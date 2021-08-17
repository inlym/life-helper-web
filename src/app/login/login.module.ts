import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { QrcodeComponent } from './qrcode/qrcode.component'
import { QrcodeService } from './qrcode/qrcode.service'

const routes: Routes = [{ path: '', component: QrcodeComponent }]

@NgModule({
  declarations: [QrcodeComponent],
  providers: [QrcodeService],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LoginModule {}
