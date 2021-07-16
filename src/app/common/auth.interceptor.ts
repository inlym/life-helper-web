import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

/**
 * [功能]
 * - 本地存有 `token` 则在请求头附加
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('access_token')
    const authorization = token ? `token ${token}` : ''
    const headers = request.headers.set('authorization', authorization)
    return next.handle(request.clone({ headers }))
  }
}
