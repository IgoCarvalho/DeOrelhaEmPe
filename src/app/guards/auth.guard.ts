import { Injectable } from '@angular/core';
import {RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import {Observable} from "rxjs"

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  {
    if(this.authService.isLoged()){
      return true;
    }
    
    
    // this.router.navigate(['/user/login']);
    // return false;
    return true;
  }
}
