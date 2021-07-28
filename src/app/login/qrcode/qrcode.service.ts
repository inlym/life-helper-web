import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { StorageKey } from 'src/app/core/enums/storage-key.enum'
import { AccountService } from 'src/app/core/services/account.service'
import { Logger } from 'src/app/core/services/logger'

/** 扫码登录的二维码信息 */
export interface QrcodeDetail {
  /** 二维码的 URL 地址 */
  url: string

  /** 检验码 */
  code: string
}

/** 扫码登录成功后返回的身份凭证信息 */
export interface TokenDetail {
  /** 扫码登录状态，0：未扫码，1：已扫码，未登录，2：已登录 */
  status: number

  /** 登录状态凭证 */
  token?: string

  /** 登录态有效时间（单位：秒） */
  expiration?: number

  /** 头像的 URL 地址 */
  avatarUrl?: string

  /** 昵称 */
  nickName?: string
}

@Injectable({ providedIn: 'root' })
export class QrcodeService {
  private readonly logger = new Logger(QrcodeService.name)

  /** 检验码 */
  private code = ''

  constructor(private readonly http: HttpClient, private readonly accountService: AccountService) {}

  getQrcode(): Observable<QrcodeDetail> {
    return this.http.get<QrcodeDetail>('/auth/qrcode').pipe(
      tap((data) => {
        this.code = data.code
      })
    )
  }

  query(): Observable<TokenDetail> {
    const code = this.code
    return this.http.get<TokenDetail>('/login/qrcode', { params: { code } }).pipe(
      tap((data) => {
        if (data.status === 0) {
          this.logger.debug('未扫码')
        } else if (data.status === 1) {
          this.logger.debug('已扫码，未登录')
        } else if (data.status === 2) {
          this.logger.info('已登录')
          this.accountService.login(data.token!, data.expiration!)
          localStorage.setItem(StorageKey.AvatarUrl, data.avatarUrl!)
          localStorage.setItem(StorageKey.NickName, data.nickName!)
        }
      })
    )
  }
}
