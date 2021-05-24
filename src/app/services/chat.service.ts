import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://whatsim.eltrueno.es:8080/api/chat/';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  token: String;
  headers: any;
  
  constructor(private http: HttpClient,  private tokenStorage: TokenStorageService) { 
    this.token = tokenStorage.getToken();
    this.headers = {headers: 
      new HttpHeaders(
        {'Content-Type': 'application/json',
      'x-access-token': this.token.toString()
    })};
  }

  getAll(): Observable<any> {
    return this.http.get(API_URL, this.headers);
  }

  getDetail(id: any): Observable<any> {
    return this.http.get(API_URL+id+"/detailed", this.headers);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL, data, this.headers);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(API_URL+id, this.headers);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(API_URL+id, data, this.headers);
  }
}
