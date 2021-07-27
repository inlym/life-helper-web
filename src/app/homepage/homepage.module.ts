import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { WeatherModule } from '../weather/weather.module'
import { HomeComponent } from './home/home.component'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'

const routes: Routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WeatherModule, SharedModule, NzCarouselModule],
})
export class HomepageModule {}
