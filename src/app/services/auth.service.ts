import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.api_url;
  // private url = 'http://localhost:3003';

  constructor( private http: HttpClient ) { }

  private setSession(data) {
    const token = data.token;
    const userData = btoa(JSON.stringify(data.user)); 
    // const expiresAt = moment.unix(payload.exp);

    localStorage.setItem('token', token);
    localStorage.setItem('user', userData);
    // localStorage.setItem('user', btoa(JSON.stringify(data.user)));
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }


  login(params: {email: string, password: string}) {
    return this.http.post<any>(`${this.url}/users/signin`, params).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res); shareReplay()},
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

  registro(userData){

    return this.http.post(`${this.url}/api/signup`, userData).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res); shareReplay()},
        (erro) => console.log('eroo ao adicionar token ao locahost', erro),
        () => console.log('TERMINADO')
        )
    );
    
  }

  isLoged(): boolean{
    return localStorage.getItem('user')? true : false;
  }

  getUser(){
    const user =  JSON.parse(atob(localStorage.getItem('user')));
    return user;
  }

  getToken(): string {
    const token =  JSON.parse(atob(localStorage.getItem('user')));
    console.log(token);
    return token;
  }
  
}
