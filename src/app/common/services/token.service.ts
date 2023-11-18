import { Injectable } from '@angular/core'
import { storage, StorageItem } from '../core/storage'

/** 登录凭证 */
export interface SecurityToken {
  /** 鉴权令牌 */
  token: string
  /** 安全令牌类型 */
  type: 'JSON_WEB_TOKEN' | 'SIMPLE_TOKEN'
  /** 发起请求时，携带令牌的请求头名称 */
  headerName: string
  /** 创建时间 */
  createTime: string
  /** 过期时间 */
  expireTime: string
}

/**
 * 登录凭证管理服务
 *
 * @since 2.0.0
 * @date 2023/11/19
 */
@Injectable({ providedIn: 'root' })
export class TokenService {
  /**
   * 存储登录凭证
   * @param token 由服务器返回的整个登录凭证
   *
   * @since 2.0.0
   * @date 2023/11/19
   */
  save(token: SecurityToken): void {
    storage.setItem(StorageItem.TOKEN, token)
  }

  /**
   * 获取登录凭证
   *
   * @since 2.0.0
   * @date 2023/11/19
   */
  async get(): Promise<SecurityToken | null> {
    const token = await storage.getItem<SecurityToken>(StorageItem.TOKEN)
    if (token && new Date(token.expireTime).getTime() > Date.now()) {
      return token
    }

    return null
  }
}
