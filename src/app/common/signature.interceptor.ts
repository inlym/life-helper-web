import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import * as CryptoJS from 'crypto-js'
import { HttpHeaders } from '@angular/common/http'

const { sign } = environment

interface IHeaders {
  [field: string]: string
}

/**
 * 当前请求拦截器用于阿里云 API 网关签名认证
 */
@Injectable()
export class SignatureInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('--- SignatureInterceptor ---')

    return next.handle(request)
  }
}
