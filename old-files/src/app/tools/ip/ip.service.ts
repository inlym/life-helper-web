import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IpResponse } from './ip.interface'

@Injectable({ providedIn: 'root' })
export class IpService {
  constructor(private readonly http: HttpClient) {}

  /**
   * 获取 IP 地址的相关信息，为空时返回当前请求客户端的 IP 信息
   *
   * @param ip IP 地址
   */
  getIpInfo(ip?: string): Observable<IpResponse> {
    const params = new HttpParams()
    if (ip) {
      params.set('ip', ip!)
    }
    return this.http.get<IpResponse>('/ip', { params: params })
  }
}
