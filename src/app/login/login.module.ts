import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QrcodeComponent } from './components/qrcode/qrcode.component'

const routes: Routes = [{ path: '', component: QrcodeComponent }]

@NgModule({
  declarations: [QrcodeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
