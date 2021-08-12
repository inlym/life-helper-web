import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { BasicUserInfo } from './user-home.model'

@Injectable({ providedIn: 'root' })
export class UserHomeService {
  constructor(private readonly http: HttpClient) {}

  /**
   * 获取基本个人信息（头像和昵称）
   */
  getBasicUserInfo(): Observable<BasicUserInfo> {
    return this.http.get<BasicUserInfo>('/userinfo')
  }
}
