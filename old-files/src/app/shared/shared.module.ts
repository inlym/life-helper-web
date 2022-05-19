import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { HeaderComponent } from './header/header.component'
import { NzMessageModule } from 'ng-zorro-antd/message'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NzDropDownModule, NzPopconfirmModule, NzMessageModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
