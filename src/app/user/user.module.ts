import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {InfoComponent} from './info/info.component'
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [InfoComponent],
  imports: [CommonModule, SharedModule],
})
export class UserModule {}
