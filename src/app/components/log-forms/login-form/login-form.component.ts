import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  erroLogin: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  cad(){
    this.router.navigate(['user/cad'])
  }

  onSubmit(form){
    this.authService.login(form).subscribe(
      (res) => { console.log('DEU CERTO'); this.router.navigate(['/home']); },
      (error) => { this.erroLogin = true; }
    )
  }

}
