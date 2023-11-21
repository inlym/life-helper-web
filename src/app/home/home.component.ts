import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Customer, DeviceInfo, HomeDataService} from './home-data.service'
import {HeaderComponent} from '../common/components/header/header.component'
import {FooterComponent} from '../common/components/footer/footer.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
