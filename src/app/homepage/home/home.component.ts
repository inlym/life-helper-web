import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weather: any

  constructor(private readonly http: HttpClient) {
    console.log('---')
  }

  ngOnInit(): void {
    this.http.get('/weather/common').subscribe((data) => {
      this.weather = data
    })
  }
}
