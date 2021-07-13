import { Component, OnInit } from '@angular/core'
import { QrcodeService } from './qrcode.service'

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QrcodeComponent implements OnInit {
  url: string = ''
  code: string = ''

  constructor(private qrcodeService: QrcodeService) {}

  ngOnInit(): void {
    this.qrcodeService.getQrcode().subscribe((data: any) => {
      this.url = data.url
      this.code = data.code
    })
  }
}
