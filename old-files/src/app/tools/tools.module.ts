import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { IpComponent } from './ip/ip.component'
import { ToolsHomeComponent } from './tools-home/tools-home.component'

const routes: Routes = [
  { path: '', component: ToolsHomeComponent },
  { path: 'ip', component: IpComponent },
]

@NgModule({
  declarations: [IpComponent, ToolsHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ToolsModule {}
