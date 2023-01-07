import {Component, OnInit} from '@angular/core'
import {LoginService} from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
      console.log(data)
    })
  }
}
