import {Component, OnInit} from '@angular/core'
import {Subscription, interval, mergeMap} from 'rxjs'
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

  /** 是否已扫码 */
  scanned = false

  /** 是否已失效 */
  invalid = false

  ob1?: Subscription
  ob2?: Subscription

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.init()
  }

  /** 初始化页面数据 */
  private initPageData() {
    this.id = ''
    this.url = ''
    this.scanned = false
    this.invalid = false

    if (this.ob1) {
      this.ob1.unsubscribe()
      this.ob1 = undefined
    }

    if (this.ob2) {
      this.ob2.unsubscribe()
      this.ob2 = undefined
    }
  }

  /** 页面初始化方法 */
  private init(): void {
    this.initPageData()

    this.ob1 = this.loginService.getQrcode().subscribe((data) => {
      this.id = data.id
      this.url = data.url

      this.ob2 = interval(2000)
        .pipe(
          mergeMap(() => {
            return this.loginService.check(this.id)
          })
        )
        .subscribe((data) => {
          if (data.scanned) {
            this.scanned = true
          }
          if (data.logined) {
            this.ob2?.unsubscribe()
          }
        })
    })
  }

  /** 「刷新」操作 */
  public refresh() {
    this.init()
  }
}
