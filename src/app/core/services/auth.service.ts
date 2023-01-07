import {Injectable} from '@angular/core'

/**
 * 权限鉴权服务
 *
 * ### 主要用途
 * 用于登录状态管理。
 */
@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() {
    // 空
  }
}

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
