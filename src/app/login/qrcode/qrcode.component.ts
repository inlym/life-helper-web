import { Component, OnInit } from '@angular/core'
import { QrcodeService } from './qrcode.service'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  status: number = 0
  url: string = ''
  code: string = ''
  querying: boolean = false
  timer: number = 0

  constructor(private qrcodeService: QrcodeService) {}

  ngOnInit(): void {
    this.init()
  }

  /** 页面初始化 */
  init() {
    this.qrcodeService.getQrcode().subscribe((data: any) => {
      this.url = data.url
      this.code = data.code

      localStorage.setItem('url', this.url)
      localStorage.setItem('code', this.code)

      this.querying = true
      this.startQuery()
    })
  }

  query() {
    this.qrcodeService.query(this.code).subscribe((data: any) => {
      const { status, token } = data
      this.status = status

      if (status === 0) {
        console.log('未扫码')
      } else if (status === 1) {
        console.log('已扫码，未登录')
      } else if (status === 2) {
        console.log('已登录')
        console.log('获取 `token` => ' + data.token)
        localStorage.setItem('token', token)
        this.querying = false
        clearInterval(this.timer)
      }
    })
  }

  startQuery() {
    this.timer = setInterval(() => {
      this.query()
    }, 1000)
  }
}
