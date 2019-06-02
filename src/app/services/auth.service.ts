import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url = environment.api_url;
  private url = 'http://localhost:3003';

  constructor( private http: HttpClient ) { }

  private setSession(data) {
    // const token = authResult.token;
    // const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', data.token);
    localStorage.setItem('token', btoa(JSON.stringify(data.user)));
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }


  login(params: {email: string, password: string}) {
    return this.http.post<any>(`${this.url}/users`, params).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res)},
        (erro) => console.log('eroo ao adicionar token ao locahost', erro),
        () => console.log('TERMINADO')
        )
    );
    // .do(res => {
    //   localStorage.setItem('token', res)
    // });
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoged(){
    localStorage.getItem('token')? console.log('LOGADO') : console.log('NAO LOGADO');
  }

  getUser(){
    localStorage.getItem('token')? console.log('USUSARIO') : console.log('SEM USUARIO');
  }

  getToken(): string {
    return JSON.parse(atob(localStorage.getItem('token')));
  }
  
}
