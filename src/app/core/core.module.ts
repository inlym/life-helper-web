import {NgModule, Optional, SkipSelf} from '@angular/core'

/**
 * 核心模块
 *
 * ## 主要作用
 * 初始化应用，以及加载必须要单例的功能。
 */
@NgModule({
  declarations: [],
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
