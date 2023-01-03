import {Component} from '@angular/core'
import {Customer, DeviceInfo, HomeDataService} from './home-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private homeDataService: HomeDataService) {}

  public img1Url = 'https://static.lifehelper.com.cn/web/001.png'

  /** 获取用户评价列表 */
  get customers(): Customer[] {
    return this.homeDataService.customers
  }

  /** 获取客户端设备信息列表 */
  get devices(): DeviceInfo[] {
    return this.homeDataService.devices
  }

  /** 处理客户端设备卡片点击事件 */
  onDeviceItemClick(type: string) {
    console.log(type)
  }
}
