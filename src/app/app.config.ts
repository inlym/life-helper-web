import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {ApplicationConfig} from '@angular/core'
import {provideAnimations} from '@angular/platform-browser/animations'
import {provideRouter} from '@angular/router'
import {routes} from './app.routes'
import {authInterceptor} from './common/interceptors/auth.interceptor'
import {signatureInterceptor} from './common/interceptors/signature.interceptor'
import {urlInterceptor} from './common/interceptors/url.interceptor'
import {errorCodeInterceptor} from './common/interceptors/error-code.interceptor'

const httpInterceptors = [urlInterceptor, authInterceptor, signatureInterceptor, errorCodeInterceptor]

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors(httpInterceptors)), provideAnimations()],
}
