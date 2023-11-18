import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {CoreModule} from './core/core.module'
import {SharedModule} from './shared/shared.module'
import {SinglePageModule} from './single/single-page.module'
import {UserModule} from './user/user.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.TRACE}),
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SinglePageModule,
    UserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
