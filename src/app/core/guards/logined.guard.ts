import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AccountService } from '../services/account.service'
import { Logger } from '../services/logger'

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
  private readonly logger = new Logger(LoginedGuard.name)

  constructor(private readonly router: Router, private readonly accoutService: AccountService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLogined = this.accoutService.checkSession()

    if (isLogined) {
      return true
    }

    // 未登录情况
    this.logger.debug(route.toString())
    this.logger.debug(state.toString())
    this.router.navigate(['/login'])
    return false
  }
}
