import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {TokenService} from '../services/token.service'

/**
 * 登录凭证拦截器
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const wrapper = this.tokenService.get()
    if (wrapper) {
      const {token, headerName} = wrapper
      request = request.clone({
        setHeaders: {[headerName]: token},
      })
    }

    return next.handle(request)
  }
}
