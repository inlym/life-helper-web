import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MatButtonModule],
})
export class SharedModule {}
