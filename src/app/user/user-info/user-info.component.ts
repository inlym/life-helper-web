import {Component, OnInit} from '@angular/core'
import {UserInfoService} from './user-info.service'

/**
 * 用户信息
 */
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.getUserInfo().subscribe((data) => {
      console.log(data)
    })
  }
}
