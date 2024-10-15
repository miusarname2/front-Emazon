import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectApiService {

  private readonly urlAPi: string = 'http://localhost:8080';
  private _endpoint: string = '';
  private _token: string = '';
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this._token}`,
    'Content-Type': 'application/json'
  });

  public get endpoint(): string {
    return this._endpoint;
  }

  public set endpoint(value: string) {
    this._endpoint = value;
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  constructor(private readonly http: HttpClient) { }

  autenticate(username: string, password: string): Observable<object> {
    return this.http.post<{ jwt: string }>(this.urlAPi + '/auth/log-in', { username, password }).pipe(
      map(response => {
        this._token = response.jwt;
        this.headers = this.headers.set('Authorization', `Bearer ${this._token}`);
        return response;
      })
    );
  }

  postData(data: object): Observable<object> {
    const headers: HttpHeaders = this.headers;
    return this.http.post(this.urlAPi + `/api/${this._endpoint}`, data, { headers });
  }

  getInitialData(): Observable<object> {
    const headers: HttpHeaders = this.headers;
    return this.http.get(this.urlAPi + `/api/${this._endpoint}`, { headers });
  }
}
