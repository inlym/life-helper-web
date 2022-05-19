import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { WeatherHomeComponent } from './weather-home/weather-home.component'
import { WeatherRootComponent } from './weather-root/weather-root.component'

const routes: Routes = [
  {
    path: '',
    component: WeatherRootComponent,

    children: [{ path: '', component: WeatherHomeComponent }],
  },
]

@NgModule({
  declarations: [WeatherHomeComponent, WeatherRootComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class WeatherModule {}
