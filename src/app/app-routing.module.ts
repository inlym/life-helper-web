import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './single/home/home.component'
import {LoginComponent} from './single/login/login.component'
import {InfoComponent} from './user/info/info.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user/info', component: InfoComponent},
  {path: '**', redirectTo: '/'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
