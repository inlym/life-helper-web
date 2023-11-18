import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {tap} from 'rxjs'
import {AuthService} from 'src/app/core/services/auth.service'
import {QrCodeLoginResult, QrCodeTicket} from './login.model'

/**
 * 登录服务
 *
 * @since 1.9.0
 */
@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {}

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
          this.authService.saveToken(data.securityToken)

          // 目前跳转到用户信息页
          this.router.navigateByUrl('/user/info')
        }
      })
    )
  }
}
