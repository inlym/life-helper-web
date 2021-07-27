import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

/**
 * 守卫需要登录的路由（未登录不能访问）
 *
 * @description
 * 1. 检测 `localStorage` 的 `token` 判断是否登录。
 * 2. 已登录则继续流程。
 * 3. 未登录跳转扫码登录页。
 */
@Injectable({ providedIn: 'root' })
export class LoginedGuard implements CanActivate {
  constructor(private readonly router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token')
    if (token) {
      return true
    }

    this.router.navigate(['/login'])
    return false
  }
}
