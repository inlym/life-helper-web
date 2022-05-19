import { k, s } from 'life-helper-frontend-config'

export const environment = {
  production: true,

  baseURL: 'https://api.lifehelper.com.cn',

  /** 阿里云 API 网关签名 */
  sign: { key: k, secret: s, debug: false },
}
