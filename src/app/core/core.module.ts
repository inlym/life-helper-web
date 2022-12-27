import {CommonModule} from '@angular/common'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {NgModule, Optional, SkipSelf} from '@angular/core'
import {UrlTranslationInterceptor} from './interceptors/url-translation.interceptor'
import {SignatureInterceptor} from './interceptors/signature.interceptor'

@NgModule({
  declarations: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlTranslationInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: SignatureInterceptor, multi: true},
  ],
  imports: [CommonModule],
})
export class CoreModule {
  /**
   * ## 主要用途
   * 让核心模块变成一个单例，使其在应用生命周期内只被加载一次。
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 被重复加载了！')
    }
  }
}
