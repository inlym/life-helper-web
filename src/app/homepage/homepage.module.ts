import { CommonModule, registerLocaleData } from '@angular/common'
import zh from '@angular/common/locales/zh'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NzCalendarModule } from 'ng-zorro-antd/calendar'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { SharedModule } from '../shared/shared.module'
import { WeatherModule } from '../weather/weather.module'
import { HomeComponent } from './home/home.component'

registerLocaleData(zh)

const routes: Routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), WeatherModule, SharedModule, NzCarouselModule, NzCalendarModule],
})
export class HomepageModule {}
