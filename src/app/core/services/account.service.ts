import { Injectable } from '@angular/core'
import { StorageKey } from '../enums/storage-key.enum'

/**
 * 用户登录状态管理
 */
@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor() {
    // 空
  }

  /**
   * 登录状态保存
   *
   * @param token 用户登录凭证
   * @param expiration 用户登录凭证的有效时长（单位：秒）
   */
  login(token: string, expiration: number): void {
    /** 登录凭证有效期的截止时间（当前时间加有效时长） */
    const deadline: number = Date.now() + expiration * 1000
    localStorage.setItem(StorageKey.Token, token)
    localStorage.setItem(StorageKey.TokenExpiration, deadline.toString())
  }

  /**
   * 检查登录态是否有效
   *
   * @description
   * 1. 无登录态为无效。
   * 2. 有登录态但是已过期为无效。
   */
  checkSession(): boolean {
    const token = localStorage.getItem(StorageKey.Token)
    const deadlineStr = localStorage.getItem(StorageKey.TokenExpiration)

    if (token && deadlineStr && Number(deadlineStr) > Date.now()) {
      return true
    }

    return false
  }

  /**
   * 退出登录
   *
   * @description
   * 1. 清空缓存中的登录状态。
   */
  logout(): void {
    localStorage.removeItem(StorageKey.Token)
    localStorage.removeItem(StorageKey.TokenExpiration)
  }
}
