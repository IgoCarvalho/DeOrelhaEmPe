import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url = environment.api_url;
  private url = 'http://localhost:3003';

  constructor( private http: HttpClient ) { }

  private setSession(authResult) {
    // const token = authResult.token;
    // const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', btoa(JSON.stringify(authResult)));
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }


  login(params: {email: string, password: string}) {
    return this.http.post<any>(`${this.url}/users`, params).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res)},
        (erro) => console.log('eroo ao adicionar token ao locahost'),
        () => console.log('TERMINADO')
        )
    );
    // .do(res => {
    //   localStorage.setItem('token', res)
    // });
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  isLoged(){
    localStorage.getItem('token')? console.log('LOGADO') : console.log('NAO LOGADO');
  }

  getUser(){
    localStorage.getItem('token')? console.log('USUSARIO') : console.log('SEM USUARIO');
  }

  get token(): string {
    return JSON.parse(atob(localStorage.getItem('token')));
  }
  
}
