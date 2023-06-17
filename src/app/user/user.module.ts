import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SharedModule} from '../shared/shared.module'
import {UserInfoComponent} from './user-info/user-info.component'

@NgModule({
  declarations: [UserInfoComponent],
  imports: [CommonModule, SharedModule],
})
export class UserModule {}
