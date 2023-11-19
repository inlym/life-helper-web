/** 缓存使用的键名枚举 */
export enum StorageItem {
  /** 用户登录鉴权凭证 */
  TOKEN = 'token',
  /** 用户信息 */
  USER_INFO = 'user_info',
}

/**
 * 获取缓存值
 * @param key 键名
 *
 * @since 2.0.0
 * @date 2023/11/19
 */
function getItem<T>(key: StorageItem): T | null {
  const str = localStorage.getItem(key)
  if (str !== null) {
    return JSON.parse(str)
  }
  return null
}

/**
 * 设置缓存值
 * @param key 键名
 * @param value 键值，可以为任意值
 *
 * @since 2.0.0
 * @date 2023/11/19
 */
function setItem(key: StorageItem, value: any): void {
  if (value !== undefined && value !== null) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const storage = { getItem, setItem }
