import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {fromEvent} from 'rxjs'

export interface HeaderClasses {
  header: boolean
  'touch-top': boolean
  'fixed-top': boolean
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * 滚动条是否发生滚动
   *
   * ### 说明
   * 1. 根据滚动条发生位移的距离定义该值。
   * 2. `>0px` => true, `=0px` => false
   */
  public scrolled = false

  /** logo 图片地址 */
  public logoUrl = 'https://static.lifehelper.com.cn/static/project/logo.svg'

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 监听滚动条滚动事件
    fromEvent(window, 'scroll').subscribe(() => {
      this.handleScrolling()
    })
  }

  /** 处理顶部导航栏的样式类 */
  handleScrolling() {
    const distance = document.documentElement.scrollTop

    // [备注]：加上后半句判断是为了避免重复赋值
    if (distance > 0 && !this.scrolled) {
      this.scrolled = true
    } else if (distance === 0 && this.scrolled) {
      this.scrolled = false
    }
  }

  /** 跳转到「登录页」 */
  goToLoginPage() {
    this.router.navigate(['/login'])
  }
}
