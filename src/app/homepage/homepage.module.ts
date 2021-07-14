import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatButtonModule, MatIconModule],
})
export class HomepageModule {}
