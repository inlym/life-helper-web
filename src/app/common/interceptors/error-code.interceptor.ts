import {HttpInterceptorFn} from '@angular/common/http'
import {inject} from '@angular/core'
import {Router} from '@angular/router'
import {catchError, of, throwError} from 'rxjs'

/** 错误码处理拦截器 */
export const errorCodeInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)

  return next(req).pipe(
    catchError((error) => {
      // 自定义错误码（非HTTP状态码）
      const errorCode = error.error.errorCode

      if (errorCode === 2) {
        router.navigateByUrl('/login')
      }

      return throwError(() => error)
    })
  )
}
