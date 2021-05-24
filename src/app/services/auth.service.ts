import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_BASE_URL = 'http://whatsim.eltrueno.es:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {
    return this.http.post(AUTH_BASE_URL + 'signin', {
      email: data.email,
      pass: data.pass
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_BASE_URL + 'signup', {
      email: user.email,
      displayname: user.displayname,
      pass: user.pass
    }, httpOptions);
  }
}