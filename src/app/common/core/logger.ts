import * as log from 'loglevel'
import { environment } from '../../../environments/environment'

// ========== 备注（2023.11.18） ==========
// 临时先用这个库来打日志，后续自己写一个专用的
// ======================================

if (environment.production) {
  log.setLevel('ERROR')
} else {
  log.setLevel('TRACE')
}

export const logger = log
