import { k, s } from 'life-helper-frontend-config'

export const environment = {
  production: false,

  // baseURL: 'https://api-test.lifehelper.com.cn',

  baseURL: 'https://api-local.lifehelper.com.cn',

  /** 阿里云 API 网关签名 */
  sign: { key: k, secret: s, debug: false },
}
