import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class QrcodeService {
  constructor(private readonly http: HttpClient) {}

  getQrcode() {
    return this.http.get('/login/qrcode')
  }
}
