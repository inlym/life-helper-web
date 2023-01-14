import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {tap} from 'rxjs'
import {SecurityToken, TokenService} from 'src/app/core/services/token.service'

/**
 * 登录服务
 *
 * @since 1.9.0
 */
@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  /**
   * 获取用于「扫码登录」的小程序码信息
   */
  getQrcode() {
    return this.http.get<QrcodeInfo>('/login/qrcode')
  }

  /**
   * 检查登录状态
   *
   * @param id 扫码登录凭据 ID
   */
  check(id: string) {
    return this.http.post<ScanLoginResult>('/login/qrcode', {id}).pipe(
      tap((data: ScanLoginResult) => {
        if (data.logined && data.securityToken) {
          this.tokenService.save(data.securityToken)
        }
      })
    )
  }
}

/** 小程序码信息 */
export interface QrcodeInfo {
  /** 扫码登录票据 ID */
  id: string
  /** 小程序码图片的 URL 地址 */
  url: string
}

/** 扫码登录结果 */
export interface ScanLoginResult {
  /** 是否已扫码，该状态仅用于页面展示 */
  scanned: boolean
  /** 是否已登录 */
  logined: boolean
  /** 登录凭证 */
  securityToken: SecurityToken
}
