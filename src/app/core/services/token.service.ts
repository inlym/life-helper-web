import {Injectable} from '@angular/core'
import {NGXLogger} from 'ngx-logger'
import {StorageKey} from '../enums/storage-key'

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
 * 登录凭证服务
 *
 * ### 主要用途
 * 用于登录状态管理。
 */
@Injectable({providedIn: 'root'})
export class TokenService {
  constructor(private logger: NGXLogger) {}

  /**
   * 存储登录凭证
   *
   * @param data 由服务器返回的整个登录凭证
   */
  save(data: SecurityToken): void {
    localStorage.setItem(StorageKey.TOKEN, JSON.stringify(data))
  }

  /**
   * 获取登录凭证
   */
  get(): SecurityToken | null {
    const str = localStorage.getItem(StorageKey.TOKEN)
    if (!str) {
      return null
    }

    const wrapper: SecurityToken = JSON.parse(str)
    if (new Date(wrapper.expireTime).getTime() > Date.now()) {
      return wrapper
    }

    return null
  }
}
