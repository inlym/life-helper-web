import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {tap} from 'rxjs'
import {TokenService} from 'src/app/core/services/token.service'
import {QrCodeLoginResult, QrCodeTicket} from './login.model'

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
  getQrCodeTicket() {
    return this.http.get<QrCodeTicket>('/login/qrcode')
  }

  /**
   * 检查登录状态
   *
   * @param id 扫码登录凭据 ID
   */
  check(id: string) {
    return this.http.post<QrCodeLoginResult>('/login/qrcode', {id}).pipe(
      tap((data: QrCodeLoginResult) => {
        if (data.logined && data.securityToken) {
          this.tokenService.save(data.securityToken)
        }
      })
    )
  }
}
