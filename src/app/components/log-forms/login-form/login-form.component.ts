import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';

import {HttpErrorResponse} from '@angular/common/http'

import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  erroLogin: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService

  ) { }

  ngOnInit() {
  }

  cad(){
    this.router.navigate(['user/cad'])
  }

  teste(form){
    console.log(form)
  }

  onSubmit(form){
    console.log(form);
    if (form.invalid) return;
    
    this.authService.login(form.value).subscribe(
      (data) => { 
        console.log('DEU CERTO', this.authService.getToken()); 
        if(this.authService.isAdm()) {this.router.navigate(['/ccz']); return}
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        console.log('DEU ERROR', error);
        if(error.status == 404) {this.toaster.error(error.error.message, 'Erro'); return}
        this.toaster.error(error.error.message, 'Erro')
      }
    )
  }

}
