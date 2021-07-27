import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { WeatherDailyComponent } from './weather-daily/weather-daily.component'

@NgModule({
  declarations: [WeatherDailyComponent],
  imports: [CommonModule],
  exports: [WeatherDailyComponent],
})
export class WeatherModule {}
