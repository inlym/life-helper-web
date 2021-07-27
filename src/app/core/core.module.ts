import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { SignatureInterceptor } from './interceptors/signature.interceptor'
import { UrlInterceptor } from './interceptors/url.interceptor'

@NgModule({
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SignatureInterceptor, multi: true },
  ],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 被重复加载了！')
    }
  }
}
