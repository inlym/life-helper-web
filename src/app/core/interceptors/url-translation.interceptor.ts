import {Injectable} from '@angular/core'
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from 'src/environments/environment'

/** 请求地址前缀 */
const {baseURL} = environment

/**
 * 请求地址转换拦截器
 *
 * ### 说明
 * 在服务类发起请求时，只包含路径，当前拦截器根据不同环境拼接前缀部分。
 */
@Injectable()
export class UrlTranslationInterceptor implements HttpInterceptor {
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
