import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

const TOKEN_KEY = 'access_token';
const USER_ID = 'user-id';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private client_id: string = 'ac6eaf0c74664ef3816cec8615fbf029';
  private client_secret: string = '1eeaca9647494f0f994c4b52ef007755';
  private access_token!: string;
  constructor(private http: HttpClient) { }

  getToken() {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa(`${this.client_id}:${this.client_secret}`));

    return this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), { headers: headers });
  }
  
  async agetProfile():Promise<Observable<any> >{
    let accessToken = sessionStorage.getItem('access_token');

    const headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + accessToken)
      .append('content-type', 'application/json')
    return this.http.get<any>("https://api.spotify.com/v1/me", { headers: headers })
    
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  
}
