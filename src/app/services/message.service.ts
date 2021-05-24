import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://whatsim.eltrueno.es:8080/api/message/';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

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

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data, this.headers);
  }

  delete(data: any): Observable<any> {
    return this.http.post(API_URL+"delete", data, this.headers);
  }
}
