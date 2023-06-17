import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, tap, of} from 'rxjs'
import {StorageKey} from '../enums/storage-key'

/**
 * 用户信息服务
 *
 * ### 备注
 * 当前用户信息服务会在全局用到，因此将服务提出来，放在公共部分。
 */
@Injectable({providedIn: 'root'})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  /** 获取用户信息 */
  get(): Observable<UserInfo> {
    // 先从本地存储找，若有，则直接返回
    const str = localStorage.getItem(StorageKey.USER_INFO)
    if (str) {
      return of(JSON.parse(str))
    }

    return this.update()
  }

  /**
   * 更新本地存储的用户信息
   *
   * ### 备注
   * 登录后，可能与之前是不同账号，因此需要在登录后强制更新一次。
   */
  update(): Observable<UserInfo> {
    return this.http.get<UserInfo>('/userinfo').pipe(
      tap((data: UserInfo) => {
        // 获取后本地存储
        localStorage.setItem(StorageKey.USER_INFO, JSON.stringify(data))
      })
    )
  }
}

/** 用户信息 */
export interface UserInfo {
  /** 账户 ID */
  accountId: number
  /** 注册时间 */
  registerTime: string
  /** 已注册天数 */
  registeredDays: number
  /** 用户昵称 */
  nickName: string
  /** 头像图片的 URL 地址 */
  avatarUrl: string
  /** 性别：男、女、未知 */
  gender: string
  /** 用户所在地区 */
  region: string[]
  /** 用户所在地区名称 */
  regionDisplayName: string
}
