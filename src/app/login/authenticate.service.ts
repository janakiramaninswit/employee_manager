import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  TOKEN = 'token'
  AUTHENTICATED_USER = 'authenticaterUser'

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username:string, password:string) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`,
      { headers }).pipe(
        map(
          data => {
            sessionStorage.setItem(this.AUTHENTICATED_USER, username);
            sessionStorage.setItem(this.TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(this.AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(this.TOKEN);
    } else {
      return null;
    }
      
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(this.AUTHENTICATED_USER);
    sessionStorage.removeItem(this.TOKEN);
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
