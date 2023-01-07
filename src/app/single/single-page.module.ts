import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {SharedModule} from '../shared/shared.module'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'

/**
 * 单页面模块
 *
 * ### 模块定义
 * 将一些只有1个页面的模块声明到这个模块中，避免过于零散。
 */
@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [CommonModule, SharedModule],
})
export class SinglePageModule {}
