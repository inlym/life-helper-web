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
 * 权限相关服务
 *
 * ### 说明
 * 主要处理“登录凭证”的储存和使用。
 *
 * @since 2.0.0
 * @date 2023/6/17
 */
@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private logger: NGXLogger) {}

  /**
   * 存储登录凭证
   *
   * @param data 由服务器返回的整个登录凭证
   *
   * @since 2.0.0
   * @date 2023/6/17
   */
  saveToken(token: SecurityToken): void {
    localStorage.setItem(StorageKey.TOKEN, JSON.stringify(token))
    this.logger.info(`存储登录凭证 => ${JSON.stringify(token)}`)
  }

  /**
   * 获取登录凭证
   *
   * ###  注意事项
   * 已经包含了对登录凭证的有效期校验，若过期，则返回为空。
   *
   * @since 2.0.0
   * @date 2023/6/17
   */
  getToken(): SecurityToken | null {
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
