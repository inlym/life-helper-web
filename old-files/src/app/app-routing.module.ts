import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginedGuard } from './core/guards/logined.guard'

const routes: Routes = [
  { path: '', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule) },

  /** 登录 */
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },

  /** 天气 */
  { path: 'weather', loadChildren: () => import('./weather/weather.module').then((m) => m.WeatherModule) },

  /** 用户中心 */
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule), canActivate: [LoginedGuard] },

  /** 工具箱 */
  { path: 'tools', loadChildren: () => import('./tools/tools.module').then((m) => m.ToolsModule) },

  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
