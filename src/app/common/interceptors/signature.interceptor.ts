import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpParams, HttpRequest } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { HmacSHA256, MD5, enc } from 'crypto-js'

const { key, secret } = environment.apigateway

/**
 * 阿里云 API 网关签名拦截器
 *
 * @see https://help.aliyun.com/zh/api-gateway/user-guide/use-digest-authentication-to-call-an-api
 *
 * @since 2.0.0
 * @date 2023/11/21
 */
export const signatureInterceptor: HttpInterceptorFn = (req, next) => {
  const client = new SignatureClient(key, secret, false)
  return client.intercept(req, next)
}

/** 封装签名方法 */
export class SignatureClient {
  constructor(
    private key: string,
    private secret: string,
    private debug: boolean
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandlerFn) {
    const paramsNew = this.sortParams(request.params)

    let headersNew: HttpHeaders = this.standardizeHeaders(request.headers)
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

    return next(request.clone({ headers: headersNew, params: paramsNew }))
  }

  /**
   * 标准化请求头
   *
   * ## 标准化流程
   * 1. 将请求头字段名变为小写
   * 2. 去除同名字段
   * 3. 去除值为空的字段
   *
   * @param headers 请求头
   */
  private standardizeHeaders(headers: HttpHeaders): HttpHeaders {
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
   *
   * @param headers 请求头
   */
  private addBasicHeaders(headers: HttpHeaders): HttpHeaders {
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
  private getSignHeaderKeys(headers: HttpHeaders): string[] {
    /** 不参与 Header 签名的请求头 */
    const EXCLUDE_SIGN_HEADERS = [
      'x-ca-signature',
      'x-xa-signature-headers',
      'accept',
      'content-md5',
      'content-type',
      'date',
    ]

    return headers
      .keys()
      .filter((key) => !EXCLUDE_SIGN_HEADERS.includes(key))
      .sort()
  }

  /**
   * 生成请求头的签名字符串
   */
  private generateSignedHeadersString(signHeaderKeys: string[], headers: HttpHeaders): string {
    return signHeaderKeys.map((key) => key + ':' + headers.getAll(key)?.join(',')).join('\n')
  }

  /**
   * 获取 [路径 + 查询字符串] 部分
   */
  private getPathAndParams(urlWithParams: string): string {
    const raw: string = urlWithParams.replace('https://', '').replace('http://', '')
    return raw.substring(raw.indexOf('/')) || '/'
  }

  /**
   * 对查询字符串重排序（字典排序）
   */
  private sortParams(params: HttpParams): HttpParams {
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
  private buildStringToSign(
    method: string,
    headers: HttpHeaders,
    signedHeadersString: string,
    pathAndParams: string
  ): string {
    const LF = '\n'
    const list: string[] = [method.toUpperCase(), LF]

    const keys: string[] = ['accept', 'content-md5', 'content-type', 'date']
    keys.forEach((key) => {
      if (headers.getAll(key)) {
        list.push(headers.getAll(key)!.join(',')!)
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
