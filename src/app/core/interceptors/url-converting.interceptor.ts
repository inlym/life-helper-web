import {Injectable} from '@angular/core'
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from 'src/environments/environment'

/** 请求地址前缀 */
const {baseURL} = environment

/**
 * 请求地址转换拦截器
 *
 * ## 主要用途
 * 将请求服务中使用的请求路径转换为完整的请求地址。
 */
@Injectable()
export class UrlConvertingInterceptor implements HttpInterceptor {
  constructor() {
    // 空
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
      return next.handle(request)
    } else {
      return next.handle(request.clone({url: baseURL + request.url}))
    }
  }
}
