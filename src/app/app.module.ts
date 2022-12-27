import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {LoggerModule, NgxLoggerLevel} from 'ngx-logger'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.TRACE}),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
