import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { tap } from 'rxjs'
import { AuthService, IdentityCertificate } from '../common/services/auth.service'

/**
 * 登录服务
 *
 * @since 1.9.0
 */
@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * 获取用于「扫码登录」的小程序码信息
   */
  getQrCodeTicket() {
    return this.http.get<QrCodeTicket>('/login/qrcode')
  }

  /**
   * 检查登录状态
   *
   * @param id 扫码登录凭据 ID
   */
  check(id: string) {
    return this.http.post<QrCodeLoginResult>('/login/qrcode', { id }).pipe(
      tap((data: QrCodeLoginResult) => {
        if (data.logined && data.securityToken) {
          this.authService.saveCertificate(data.securityToken)

          // 目前跳转到用户信息页
          this.router.navigateByUrl('/user/info')
        }
      })
    )
  }
}

/**
 * 二维码（小程序码）登录凭据
 *
 * @since 2.0.0
 * @date 2023.05.23
 */
export interface QrCodeTicket {
  /** 凭据 ID（注意是字符串不是数字） */
  id: string
  /** 要扫码的图片资源的 URL 地址 */
  url: string
}

/**
 * 扫码登录结果
 *
 * @since 2.0.0
 * @date 2023.05.23
 */
export interface QrCodeLoginResult {
  /** 是否已扫码，该状态仅用于页面展示 */
  scanned: boolean
  /** 是否已登录 */
  logined: boolean
  /**
   * 登录凭证
   *
   * ### 备注
   * 仅当 `logined` 字段为 `true` 时，当前字段有值
   */
  securityToken: IdentityCertificate
}
