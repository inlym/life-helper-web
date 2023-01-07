import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'

/** 小程序码信息 */
export interface QrcodeInfo {
  /** 扫码登录票据 ID */
  id: string
  /** 小程序码图片的 URL 地址 */
  url: string
}

/**
 * 登录服务
 *
 * @since 1.9.0
 */
@Injectable({providedIn: 'root'})
export class LoginService {
  constructor(private http: HttpClient) {}

  /**
   * 获取用于「扫码登录」的小程序码信息
   */
  getQrcode() {
    return this.http.get<QrcodeInfo>('/login/qrcode')
  }
}
