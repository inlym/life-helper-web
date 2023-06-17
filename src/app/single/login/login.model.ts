import {SecurityToken} from 'src/app/core/services/auth.service'

/**
 * 二维码（小程序码）登录凭据
 *
 * @since 2.0.0
 * @date 2023.05.23
 */
export interface QrCodeTicket {
  /** 凭据 ID（注意是字符串不是数字） */
  id: string
  /** 要扫码的图片资源的 URL 地址 */
  url: string
}

/**
 * 扫码登录结果
 *
 * @since 2.0.0
 * @date 2023.05.23
 */
export interface QrCodeLoginResult {
  /** 是否已扫码，该状态仅用于页面展示 */
  scanned: boolean
  /** 是否已登录 */
  logined: boolean
  /**
   * 登录凭证
   *
   * ### 备注
   * 仅当 `logined` 字段为 `true` 时，当前字段有值
   */
  securityToken: SecurityToken
}
