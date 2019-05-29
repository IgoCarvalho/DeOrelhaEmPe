import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/userModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'localhost:3003/api/users'

  constructor( private http:HttpClient ) { }

  signUp(user: User): Observable<any> {
    return this.http.post(`${this.url}/signup`, user);
  }
  signIn(user): Observable<any> {
    return this.http.post(`${this.url}/signip`, user);
  }
}
