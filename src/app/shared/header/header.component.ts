import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /** 用户昵称 */
  nickName: string = ''

  /** 用户头像 */
  avatarUrl: string = ''

  /** 是否已登录 */
  logged: boolean = false

  constructor() {}

  /** 初始化函数 */
  init() {
    this.nickName = localStorage.getItem('nickName') || ''
    this.avatarUrl = localStorage.getItem('avatarUrl') || ''
    this.logged = !!localStorage.getItem('token')
  }

  ngOnInit() {
    this.init()
  }
}
