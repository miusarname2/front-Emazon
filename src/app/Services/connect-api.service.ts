import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthorizationModel } from '../Types/AuthorizationModel';

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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if (error.status === 403) {
        console.log('Acceso denegado: ', error.message);
      } else {
        console.error(`${operation} failed: ${error.message}`);
      }

      return of(result as T);
    };
  }

  autenticate(username: string, password: string): Observable<AuthorizationModel> {
    return this.http.post<{ username: string; message: string; jwt: string; status: boolean }>(this.urlAPi + '/auth/log-in', { username, password })
      .pipe(
        map(response => {
          if (response.status) {
            this._token = response.jwt;
            this.headers = this.headers.set('Authorization', `Bearer ${this._token}`);
            return response;
          } else {
            throw new Error(response.message);
          }
        }),
        catchError(this.handleError<AuthorizationModel>('authenticate'))
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
