import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners: string[] = ['https://static.lifehelper.com.cn/banner/2021-07-27-23-01-15.gif', 'https://static.lifehelper.com.cn/banner/2021-07-27-23-07-08.gif']

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {}
}
