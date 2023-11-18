import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from '../../../environments/environment'

/** 请求地址前缀 */
const { baseURL } = environment

/**
 * 请求地址拦截器
 *
 * ### 主要用途
 * 根据当前环境在请求路径加上请求地址前缀。
 */
export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('http://') || req.url.startsWith('https://')) {
    return next(req)
  } else {
    return next(req.clone({ url: baseURL + req.url }))
  }
}
