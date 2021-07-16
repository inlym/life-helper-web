import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class QrcodeService {
  constructor(private readonly http: HttpClient) {}

  getQrcode() {
    return this.http.get('/auth/qrcode')
  }

  query(code: string) {
    return this.http.get('/login/qrcode', { params: { code } })
  }
}
