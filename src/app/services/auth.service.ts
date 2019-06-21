import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.api_url;
  // private url = 'http://localhost:3003';

  constructor( 
    private http: HttpClient, 
    private router: Router
  ) { }

  private setSession(data) {
    const token = data.token;
    const userData = btoa(JSON.stringify(data.user)); 

    localStorage.setItem('token', token);
    localStorage.setItem('user', userData);
  }


  login(params: {email: string, password: string}) {
    return this.http.post<any>(`${this.url}/users/signin`, params).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res);},
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
    this.router.navigate(['/'])
  }

  registro(userData){

    return this.http.post(`${this.url}/users/signup`, userData).pipe(
      tap(
        (res) => {console.log('adicionando token ao locahost'); this.setSession(res);},
        (erro) => console.log('eroo ao adicionar token ao locahost', erro),
        () => console.log('TERMINADO')
        )
    );
    
  }

  isLoged(): boolean{
    return localStorage.getItem('user')? true : false;
  }

  isAdm(){
    if(!this.isLoged()) return
    const adm = this.getUser()
    // console.log(adm)
    return adm.roles.indexOf('admin') >= 0? true: false
  }

  getUser(){
    if(!this.isLoged()) return
    const user =  JSON.parse(atob(localStorage.getItem('user')));
    return user;
  }

  getToken(): string {
    const token =  JSON.parse(atob(localStorage.getItem('user')));
    console.log(token);
    return token;
  }
  
}
