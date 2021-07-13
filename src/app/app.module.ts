import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MainInterceptor } from './common/main.interceptor'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
