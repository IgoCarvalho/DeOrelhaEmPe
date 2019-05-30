import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';


import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.api_url;

  constructor( private http: HttpClient ) { }

  login(params: {email: string, password: string}) {
    return this.http.post<any>(`${this.url}/users/signin`, params);
    // .do(res => {
    //   localStorage.setItem('token', res)
    // });
  }

  logout(){
    localStorage.clear();
  }

  isLoged(){
    localStorage.getItem('token')? console.log('LOGADO') : console.log('NAO LOGADO');
  }

  getUser(){
    localStorage.getItem('token')? console.log('USUSARIO') : console.log('SEM USUARIO');
  }
  
}
