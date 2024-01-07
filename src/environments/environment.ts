export const environment = {
  /** 环境名称 */
  name: 'development',

  /** 是否为生产环境 */
  production: false,

  /** 服务端请求地址 */
  baseURL: 'https://api-local.lifehelper.com.cn',

  /** 阿里云 API 网关签名认证密钥 */
  apigateway: {
    key: 'xxxxxxxxxx',
    secret: 'xxxxxxxxxx',
  },
}
