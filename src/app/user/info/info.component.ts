import {InfoService} from './info.service'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getUserInfo().subscribe((data) => {
      console.log(data)
    })
  }
}
