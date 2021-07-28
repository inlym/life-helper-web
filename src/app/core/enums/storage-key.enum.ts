/**
 * 存储在 `localStorage` 中数据的键名
 */
export enum StorageKey {
  /** 用户登录凭证 */
  Token = 'token',

  /** 用户登录凭证有效期（时间戳） */
  TokenExpiration = 'token_expiration',
}
