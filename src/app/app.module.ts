import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {CoreModule} from './core/core.module'
import {SharedModule} from './shared/shared.module'
import {HomeComponent} from './single/home/home.component'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.TRACE}),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
