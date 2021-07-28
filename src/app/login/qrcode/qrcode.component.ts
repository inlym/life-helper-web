import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Logger } from 'src/app/core/services/logger'
import { QrcodeDetail, QrcodeService, TokenDetail } from './qrcode.service'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  private readonly logger = new Logger(QrcodeComponent.name)

  /** 二维码 URL 地址 */
  url = ''

  /** 查询状态 */
  status = 0

  /** 是否正在查询 */
  querying = false

  /** 定时器 ID */
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
    this.qrcodeService.getQrcode().subscribe((data: QrcodeDetail) => {
      this.url = data.url
      this.querying = true
      this.startQuery()
    })
  }

  query(): void {
    this.qrcodeService.query().subscribe((data: TokenDetail) => {
      this.status = data.status
      if (data.status === 2) {
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
  }
}
