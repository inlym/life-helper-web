import { Component, OnInit } from '@angular/core'
import { UserHomeService } from './user-home.service'

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  /** 用户昵称 */
  nickName = ''

  /** 用户头像 */
  avatarUrl = ''

  /** 是否已登录 */
  logged = false

  constructor(private readonly userHomeService: UserHomeService) {}

  /** 初始化函数 */
  init(): void {
    this.userHomeService.getBasicUserInfo().subscribe((data) => {
      this.nickName = data.nickName
      this.avatarUrl = data.avatarUrl
    })
  }

  ngOnInit(): void {
    this.init()
  }
}
