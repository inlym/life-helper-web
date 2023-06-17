import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {AuthService} from '../services/auth.service'

/**
 * 登录凭证拦截器
 *
 * @since 1.0.0
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const securityToken = this.authService.getToken()
    if (securityToken) {
      const {token, headerName} = securityToken
      request = request.clone({
        setHeaders: {[headerName]: token},
      })
    }

    return next.handle(request)
  }
}
