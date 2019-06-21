import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    console.log(requestUrl)
    const apiUrl: Array<any> = environment.api_url.split('/');
    console.log(apiUrl)

    const token = localStorage.getItem('token');
    console.log(token)

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({ setHeaders: {'authorization': `${token}`} });
      console.log('inter')
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }
}