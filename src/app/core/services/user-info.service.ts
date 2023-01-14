import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {tap} from 'rxjs'
import {StorageKey} from '../enums/storage-key'

/**
 * 用户信息服务
 */
@Injectable({providedIn: 'root'})
export class UserInfoService {
  constructor(private http: HttpClient) {}

  /** 获取用户信息 */
  get() {
    return this.http.get<UserInfo>('/userinfo').pipe(
      tap((data: UserInfo) => {
        console.log(data)
      })
    )
  }

  /** 将用户信息存储至缓存中 */
  save(userInfo: UserInfo) {
    localStorage.setItem(StorageKey.USER_INFO, JSON.stringify(userInfo))
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
