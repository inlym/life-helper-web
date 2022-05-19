/** 省市区等地址信息 */
export interface Address {
  adcode: string
  city: string
  district: string
  nation: string
  province: string
}

/** 经纬度坐标 */
export interface Location {
  /** 纬度 */
  latitude: number

  /** 经度 */
  longitude: number
}

/**
 * [GET /ip] 接口返回的响应数据
 */
export interface IpResponse {
  address: Address

  /** 客户端 IP 地址 */
  clientIp: string

  /** 查询的 IP 地址 */
  ip: string

  location: Location

  /** 生成的静态地图 URL 地址 */
  mapUrl: string
}
