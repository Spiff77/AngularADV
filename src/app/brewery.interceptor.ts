import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BreweryInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;
    if(request.url.includes('api.openbrewerydb.org')){
       req = request.clone({url: request.url + '?by_country=' + (localStorage.getItem('lang') === 'fr' ? 'France' : 'England')})
    }
    return next.handle(req);
  }
}
