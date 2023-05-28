import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

/**
 * 用户信息服务
 *
 * @since 2023.05.28
 */
@Injectable({providedIn: 'root'})
export class InfoService {
  constructor(private http: HttpClient) {}

  /**
   * 获取用户信息
   */
  getUserInfo() {
    return this.http.get('/userinfo')
  }
}
