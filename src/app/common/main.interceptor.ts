import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

const { baseURL } = environment

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    if (request.url.startsWith('http://') || request.url.startsWith('https://')) {
      return next.handle(request)
    } else {
      const requestNew = request.clone({
        url: baseURL + request.url,
      })
      return next.handle(requestNew)
    }
  }
}
