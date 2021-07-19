import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthInterceptor } from './common/interceptors/auth.interceptor'
import { SignatureInterceptor } from './common/interceptors/signature.interceptor'
import { UrlInterceptor } from './common/interceptors/url.interceptor'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SignatureInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
