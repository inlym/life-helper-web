import localforage from 'localforage'
import { environment } from '../../../environments/environment'

export const storage = localforage.createInstance({
  name: 'lifehelper',
  storeName: environment.name,
})

// ================ 使用说明 ================
// 所有缓存均需要在此处注册再使用，方便统一管理
// ========================================

export enum StorageItem {
  /** 用户登录鉴权凭证 */
  TOKEN = 'token',

  /** 用户信息 */
  USER_INFO = 'user_info',
}
