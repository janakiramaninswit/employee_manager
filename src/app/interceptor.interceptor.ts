import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from './login/authenticate.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private authenticateService: AuthenticateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let basicAuthHeaderString = this.authenticateService.getAuthenticatedToken();
    let username = this.authenticateService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
