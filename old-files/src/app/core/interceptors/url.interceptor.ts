import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

const { baseURL } = environment

/**
 * [功能]：
 * - 如果请求 `url` 不是绝对路径，则自动添加 `baseURL` 前缀
 */
@Injectable()
export class UrlInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
      return next.handle(request)
    } else {
      return next.handle(request.clone({ url: baseURL + request.url }))
    }
  }
}
