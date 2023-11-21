import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { urlInterceptor } from './common/interceptors/url.interceptor'
import { signatureInterceptor } from './common/interceptors/signature.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([urlInterceptor, signatureInterceptor]))],
}
