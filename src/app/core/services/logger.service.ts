/**
 * @todo
 * 先简单弄一个，后面再优化
 */

import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

export interface LoggingOptions {
  type: 'debug' | 'info' | 'warn' | 'error'
  message: string
}

/**
 * 日志服务
 *
 * @description
 */
@Injectable({ providedIn: 'root' })
export class LoggerService {
  /** 是否为生产环境 */
  private readonly isProd: boolean = environment.production

  constructor() {
    // empty
  }

  debug(...args: unknown[]): void {
    const message = this.makeMessage(args)
    this.makeLog({ type: 'debug', message })
  }

  info(...args: unknown[]): void {
    const message = this.makeMessage(args)
    this.makeLog({ type: 'debug', message })
  }

  warn(...args: unknown[]): void {
    const message = this.makeMessage(args)
    this.makeLog({ type: 'debug', message })
  }

  error(...args: unknown[]): void {
    const message = this.makeMessage(args)
    this.makeLog({ type: 'debug', message })
  }

  private isValid(): boolean {
    return !this.isProd
  }

  private makeMessage(msgs: unknown[]): string {
    return msgs
      .filter((msg) => ['string', 'number', 'boolean', 'object'].includes(typeof msg))
      .map((msg) => {
        if (typeof msg === 'string') {
          return msg
        } else if (typeof msg === 'number') {
          return String(msg)
        } else if (typeof msg === 'boolean') {
          return String(msg)
        } else {
          return '\n' + JSON.stringify(msg, null, 2)
        }
      })
      .join(' ')
  }

  private makeLog(options: LoggingOptions): void {
    if (this.isValid()) {
      const time = new Date().toISOString()
      const sentence = `${time} ${options.type.toUpperCase()} ${options.message}`

      if (options.type === 'debug') {
        console.log(sentence)
      } else {
        console[options.type](sentence)
      }
    }
  }
}
