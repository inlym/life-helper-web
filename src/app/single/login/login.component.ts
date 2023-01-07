import {Component, OnInit} from '@angular/core'
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /** logo 图片地址 */
  public logoUrl = 'https://static.lifehelper.com.cn/static/project/logo.svg'

  /** 扫码登录票据 ID */
  public id = ''

  /** 小程序码图片的 URL 地址 */
  public url = ''

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.init()
  }

  /** 页面初始化方法 */
  init(): void {
    this.loginService.getQrcode().subscribe((data) => {
      this.id = data.id
      this.url = data.url
    })
  }
}
