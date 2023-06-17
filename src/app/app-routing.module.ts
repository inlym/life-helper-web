import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './single/home/home.component'
import {LoginComponent} from './single/login/login.component'
import {TestComponent} from './single/test/test.component'
import {UserInfoComponent} from './user/user-info/user-info.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'user/info', component: UserInfoComponent},
  {path: '**', redirectTo: '/'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
