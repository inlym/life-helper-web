import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {CoreModule} from './core/core.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      serverLoggingUrl: '',
      serverLogLevel: NgxLoggerLevel.DEBUG,
    }),
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
