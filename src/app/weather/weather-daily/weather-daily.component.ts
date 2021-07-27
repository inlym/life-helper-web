import { Component, Input, OnInit } from '@angular/core'
import { WeatherDailyItem } from './weather-daily.interface'

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.scss'],
})
export class WeatherDailyComponent implements OnInit {
  @Input() list!: WeatherDailyItem[]

  constructor() {}

  ngOnInit(): void {}
}
