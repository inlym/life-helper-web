/** 用户信息 */
export interface UserInfo {
  /** 账户 ID */
  accountId: number

  /** 注册时间 */
  registerTime: string

  /** 已注册天数 */
  registeredDays: number

  /** 用户昵称 */
  nickName: string

  /** 头像图片的 URL 地址 */
  avatarUrl: string

  /** 性别：男、女、未知 */
  gender: string

  /** 用户所在地区 */
  region: string[]

  /** 用户所在地区名称 */
  regionDisplayName: string
}
