import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { QrcodeService } from './qrcode.service'
import { Logger } from 'src/app/core/services/logger'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  private readonly logger = new Logger(QrcodeComponent.name)

  status = 0
  url = ''
  code = ''
  querying = false
  timer = 0

  constructor(private readonly qrcodeService: QrcodeService, private readonly router: Router) {}

  ngOnInit(): void {
    this.init()
  }

  ngOnDestroy(): void {
    this.stopQuery()
  }

  /** 页面初始化 */
  init(): void {
    this.qrcodeService.getQrcode().subscribe((data: any) => {
      this.url = data.url
      this.code = data.code

      localStorage.setItem('url', this.url)
      localStorage.setItem('code', this.code)

      this.querying = true
      this.startQuery()
    })
  }

  query(): void {
    this.qrcodeService.query(this.code).subscribe((data: any) => {
      const { status, token, avatarUrl, nickName } = data
      this.status = status

      if (status === 0) {
        this.logger.debug('未扫码')
      } else if (status === 1) {
        this.logger.debug('已扫码，未登录')
      } else if (status === 2) {
        this.logger.info('已登录')
        this.logger.info('获取 `token` => ' + data.token)
        localStorage.setItem('token', token)
        localStorage.setItem('nickName', nickName)
        localStorage.setItem('avatarUrl', avatarUrl)

        this.stopQuery()
        setTimeout(() => {
          this.router.navigate(['user'])
        }, 1000)
      }
    })
  }

  startQuery(): void {
    this.timer = setInterval(() => {
      this.query()
    }, 1000)
  }

  stopQuery(): void {
    this.querying = false
    clearInterval(this.timer)
    localStorage.removeItem('url')
    localStorage.removeItem('code')
  }
}
