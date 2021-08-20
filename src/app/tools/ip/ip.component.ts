import { Component, OnInit } from '@angular/core'
import { Address, IpResponse, Location } from './ip.interface'
import { IpService } from './ip.service'

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.scss'],
})
export class IpComponent implements OnInit {
  constructor(private readonly ipService: IpService) {}

  public clientIp = ''
  public queryIp = ''
  public mapUrl = ''
  public location!: Location
  public address!: Address

  ngOnInit(): void {
    this.getClientIpInfo()
  }

  getClientIpInfo(): void {
    this.ipService.getIpInfo().subscribe((data) => {
      this.assign(data)
    })
  }

  queryIpInfo(ip: string): void {
    this.ipService.getIpInfo(ip).subscribe((data) => {
      this.assign(data)
    })
  }

  /**
   * 对响应数据做赋值操作
   *
   * @param data 获取的响应数据
   */
  assign(data: IpResponse): void {
    this.clientIp = data.clientIp
    this.mapUrl = data.mapUrl
    this.location = data.location
    this.address = data.address
  }
}
