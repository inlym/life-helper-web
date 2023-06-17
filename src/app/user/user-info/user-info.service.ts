import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {UserInfo} from './user-info.model'

@Injectable({providedIn: 'root'})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  public getUserInfo() {
    return this.http.get<UserInfo>('/user/info')
  }
}
