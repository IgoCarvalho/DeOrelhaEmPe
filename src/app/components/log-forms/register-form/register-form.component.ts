import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

	url = 'http://localhost:3003/api/users'

	user = {
		name: '',
		email: '',
		password: ''
	}

  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
  }

  submit(form){
	  console.log(form)
	  if (form.invalid) return;
  	this.authService.registro(form.value).subscribe(
      (data) => { 
        console.log('DEU CERTO', this.authService.getToken()); 
        if(this.authService.isAdm()) {this.router.navigate(['/ccz']); return}
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => { console.log('DEU ERROR', error); this.toaster.error('Erro ao processar requisição', 'Erro') }
    )
  }

}
