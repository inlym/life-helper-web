import {Component, OnInit} from '@angular/core'
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** logo 图片地址 */
  logoUrl = 'https://static.lifehelper.com.cn/static/project/logo.svg'

  /** 扫码登录票据 ID */
  id = ''

  /** 小程序码图片的 URL 地址 */
  url = ''

  /** 是否开启「下次自动登录」 */
  autoLogin = true

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.init()
  }

  /** 初始化页面数据 */
  private initPageData() {
    this.id = ''
    this.url = ''
  }

  /** 页面初始化方法 */
  private init(): void {
    this.initPageData()

    this.loginService.getQrcode().subscribe((data) => {
      this.id = data.id
      this.url = data.url
    })
  }

  /** 「刷新」操作 */
  public refresh() {
    this.init()
  }
}
