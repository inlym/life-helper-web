import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { UserHomeComponent } from './user-home/user-home.component'

const routes: Routes = [{ path: '', component: UserHomeComponent }]

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class UserModule {}
