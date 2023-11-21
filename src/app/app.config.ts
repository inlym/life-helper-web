import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'
import { routes } from './app.routes'
import { authInterceptor } from './common/interceptors/auth.interceptor'
import { signatureInterceptor } from './common/interceptors/signature.interceptor'
import { urlInterceptor } from './common/interceptors/url.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([urlInterceptor, authInterceptor, signatureInterceptor])),
  ],
}
