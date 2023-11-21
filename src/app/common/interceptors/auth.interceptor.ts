import { HttpInterceptorFn } from '@angular/common/http'
import { inject } from '@angular/core'
import { AuthService } from '../services/auth.service'

/** 权限拦截器 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const certificate = inject(AuthService).getCertificate()
  if (certificate) {
    const { token, headerName } = certificate
    req = req.clone({ setHeaders: { [headerName]: token } })
  }

  return next(req)
}
