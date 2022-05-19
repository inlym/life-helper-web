import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { MD5, HmacSHA256, enc } from 'crypto-js'
import { HttpHeaders } from '@angular/common/http'

interface ISign {
  disable?: boolean
  key: string
  secret: string
  debug: boolean
}

/**
 * 当前请求拦截器用于 [阿里云 API 网关] 签名认证
 * @see https://help.aliyun.com/document_detail/29475.html
 */
@Injectable()
export class SignatureInterceptor implements HttpInterceptor {
  private signed: boolean = false
  private key: string = ''
  private secret: string = ''
  private debug: boolean = false

  constructor() {
    const sign: ISign = environment.sign
    if (typeof sign === 'object' && !sign.disable && sign.key && sign.secret) {
      this.signed = true
      this.key = sign.key
      this.secret = sign.secret
      this.debug = sign.debug
    }
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.signed) {
      return next.handle(request)
    }

    const paramsNew = this.sortParams(request.params)

    let headersNew: HttpHeaders = this.normalizeHeaders(request.headers)
    headersNew = this.addBasicHeaders(headersNew)

    // 存在 `body` 则添加 `content-md5` 请求头
    if (request.body) {
      headersNew = headersNew.set('content-md5', MD5(JSON.stringify(request.body)).toString(enc.Base64))
    }

    const signHeaderKeys = this.getSignHeaderKeys(headersNew)
    headersNew = headersNew.set('x-ca-signature-headers', signHeaderKeys.join(','))

    const pathAndParams = this.getPathAndParams(request.clone({ params: paramsNew }).urlWithParams)
    const signedHeadersString = this.generateSignedHeadersString(signHeaderKeys, headersNew)
    const stringToSign = this.buildStringToSign(request.method, headersNew, signedHeadersString, pathAndParams)

    headersNew = headersNew.set('x-ca-signature', HmacSHA256(stringToSign, this.secret).toString(enc.Base64))

    if (this.debug) {
      console.info(`当前签名字符串：\`${stringToSign.replace(/\n/g, '#')}\``)
    }

    return next.handle(request.clone({ headers: headersNew, params: paramsNew }))
  }

  /**
   * 序列化请求头
   * 1. 将自定义的请求头字段名全部变成小写
   * 2. 去除同名字段
   * 3. 去除字段值为空的字段
   */
  normalizeHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.keys().reduce((headersNew: HttpHeaders, key: string) => {
      if (!headersNew.getAll(key) || !headersNew.get(key)) {
        return headersNew.delete(key)
      } else {
        return headersNew.set(key.toLowerCase(), headersNew.getAll(key)!)
      }
    }, headers)
  }

  /**
   * 添加常规签名认证需要的请求头
   */
  addBasicHeaders(headers: HttpHeaders): HttpHeaders {
    return headers
      .set('x-ca-key', this.key)
      .set('x-ca-timestamp', Date.now().toString())
      .set('accept', headers.getAll('accept') ? headers.getAll('accept')! : '*/*')
      .set('content-type', headers.getAll('content-type') ? headers.getAll('content-type')! : 'application/json')
      .set('x-ca-nonce', MD5((Date.now() + Math.random()).toString()).toString(enc.Hex))
  }

  /**
   * 获取参与签名的请求头字段名
   */
  getSignHeaderKeys(headers: HttpHeaders): string[] {
    /** 不参与 Header 签名的请求头 */
    const EXCLUDE_SIGN_HEADERS = ['x-ca-signature', 'x-xa-signature-headers', 'accept', 'content-md5', 'content-type', 'date']

    return headers
      .keys()
      .filter((key) => !EXCLUDE_SIGN_HEADERS.includes(key))
      .sort()
  }

  /**
   * 生成请求头的签名字符串
   */
  generateSignedHeadersString(signHeaderKeys: string[], headers: HttpHeaders): string {
    return signHeaderKeys.map((key) => key + ':' + headers.getAll(key)?.join(',')).join('\n')
  }

  /**
   * 获取 [路径 + 查询字符串] 部分
   */
  getPathAndParams(urlWithParams: string): string {
    const raw: string = urlWithParams.replace('https://', '').replace('http://', '')
    return raw.substr(raw.indexOf('/')) || '/'
  }

  /**
   * 对查询字符串重排序（字典排序）
   */
  sortParams(params: HttpParams): HttpParams {
    return params
      .keys()
      .sort()
      .reduce((paramsNew: HttpParams, key: string) => {
        return paramsNew.set(key, params.get(key) || '')
      }, new HttpParams())
  }

  /**
   * 生成用于签名的字符串
   */
  buildStringToSign(method: string, headers: HttpHeaders, signedHeadersString: string, pathAndParams: string): string {
    const LF = '\n'
    const list: string[] = [method.toUpperCase(), LF]

    const keys: string[] = ['accept', 'content-md5', 'content-type', 'date']
    keys.forEach((key) => {
      if (headers.getAll(key)) {
        // `|| ''` 这个也是为了应付类型检查
        list.push(headers.getAll(key)?.join(',')!)
      }
      list.push(LF)
    })

    if (signedHeadersString) {
      list.push(signedHeadersString, LF)
    }

    if (pathAndParams) {
      list.push(pathAndParams)
    }

    return list.join('')
  }
}
