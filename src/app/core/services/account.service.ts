import { Injectable } from '@angular/core'
import { StorageKey } from '../enums/storage-key.enum'
import { Logger } from './logger'

/** 登录时的附加选项 */
export interface LoginExtraOptions {
  /** 头像的 URL 地址 */
  avatarUrl?: string

  /** 昵称 */
  nickName?: string
}

/**
 * 用户登录状态管理
 */
@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly logger = new Logger(AccountService.name)

  constructor() {
    // 空
  }

  /**
   * 保存登录状态
   *
   * @param token 用户登录凭证
   * @param expiration 用户登录凭证的有效时长（单位：秒）
   * @param extra 登录时的附加选项
   */
  login(token: string, expiration: number, extra?: LoginExtraOptions): void {
    /** 登录凭证有效期的截止时间（当前时间加有效时长） */
    const deadline: number = Date.now() + expiration * 1000
    localStorage.setItem(StorageKey.Token, token)
    localStorage.setItem(StorageKey.TokenExpiration, deadline.toString())

    if (extra) {
      if (extra.avatarUrl) {
        localStorage.setItem(StorageKey.AvatarUrl, extra.avatarUrl)
      }

      if (extra.nickName) {
        localStorage.setItem(StorageKey.NickName, extra.nickName)
      }
    }
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

    if (token && deadlineStr) {
      if (Number(deadlineStr) > Date.now()) {
        return true
      } else {
        // 登录态已过期
        this.clearSession()
      }
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
    this.clearSession()
  }

  /**
   * 清除登录态
   */
  clearSession(): void {
    localStorage.removeItem(StorageKey.Token)
    localStorage.removeItem(StorageKey.TokenExpiration)
    localStorage.removeItem(StorageKey.AvatarUrl)
    localStorage.removeItem(StorageKey.NickName)
  }
}
