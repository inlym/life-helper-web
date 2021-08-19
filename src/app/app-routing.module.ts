import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginedGuard } from './core/guards/logined.guard'

const routes: Routes = [
  { path: '', loadChildren: () => import('./homepage/homepage.module').then((m) => m.HomepageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule), canActivate: [LoginedGuard] },
  { path: 'tools', loadChildren: () => import('./tools/tools.module').then((m) => m.ToolsModule) },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
