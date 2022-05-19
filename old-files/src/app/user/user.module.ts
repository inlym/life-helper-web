import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { UserHomeComponent } from './user-home/user-home.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,

    children: [
      { path: 'profile', component: ProfileComponent },
      { path: '**', redirectTo: 'profile' },
    ],
  },
]

@NgModule({
  declarations: [UserHomeComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UserModule {}
