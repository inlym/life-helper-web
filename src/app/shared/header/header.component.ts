import { Component, OnInit } from '@angular/core'
import { Logger } from 'src/app/core/services/logger'
import { StorageKey } from 'src/app/core/enums/storage-key.enum'
import { AccountService } from 'src/app/core/services/account.service'
import { NzMessageService } from 'ng-zorro-antd/message'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private readonly logger = new Logger(HeaderComponent.name)

  /** 用户昵称 */
  nickName = ''

  /** 用户头像 */
  avatarUrl = ''

  /** 是否已登录 */
  logged = false

  constructor(private readonly accountService: AccountService, private readonly message: NzMessageService) {
    //
  }

  /** 初始化函数 */
  init(): void {
    this.nickName = localStorage.getItem(StorageKey.NickName) || ''
    this.avatarUrl = localStorage.getItem(StorageKey.AvatarUrl) || ''
    this.logged = this.accountService.checkSession()
  }

  ngOnInit(): void {
    this.init()
  }

  logout(): void {
    this.accountService.logout()
    this.logged = false

    this.message.success('你已退出登录！')
  }
}
