/**
 * @todo
 * 先简单弄一个，后面再优化
 */

import { environment } from 'src/environments/environment'

export interface LoggingOptions {
  type: 'debug' | 'info' | 'warn' | 'error'
  message: string
}

/**
 * 日志服务（非单例服务）
 *
 * @description
 * ```js
 * // 必须使用以下方式导入，这里是特意设定成非 DI 的方式使用的
 * const logger = new Logger('prefix')
 * ```
 */
export class Logger {
  /** 是否为生产环境 */
  private readonly isProd: boolean = environment.production

  constructor(private prefix?: string) {
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
      const prefix = this.prefix ? `[${this.prefix}] ` : ''
      const sentence = `${time} ${options.type.toUpperCase()} ${prefix}${options.message}`

      if (options.type === 'debug') {
        console.log(sentence)
      } else {
        console[options.type](sentence)
      }
    }
  }
}
