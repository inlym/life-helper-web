import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import {HeaderComponent} from './header/header.component'
import {MatButtonModule} from '@angular/material/button'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule],
})
export class SharedModule {}
