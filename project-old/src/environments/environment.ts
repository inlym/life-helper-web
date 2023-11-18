import {getAppConfig} from 'life-helper-secret'

const appConfig = getAppConfig()

export const environment = {
  /** 是否为生产环境 */
  production: false,

  /** 服务端请求地址 */
  baseURL: 'https://api-local.lifehelper.com.cn',

  /** 阿里云 API 网关签名密钥对 */
  key: appConfig.key,

  /** 阿里云 API 网关签名密钥对 */
  secret: appConfig.secret,
}
