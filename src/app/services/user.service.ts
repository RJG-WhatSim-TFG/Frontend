import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://whatsim.eltrueno.es:8080/api/profile/';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: String;
  headers: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { 
    this.token = tokenStorage.getToken();
    this.headers = {headers: 
      new HttpHeaders(
        {'Content-Type': 'application/json',
      'x-access-token': this.token.toString()
    })};
  }

  getUserInfo(): Observable<any> {
    return this.http.get(API_URL + 'userinfo', this.headers);
  }

  deleteAccount(): Observable<any> {
    return this.http.delete(API_URL + 'delete', this.headers);
  }
}