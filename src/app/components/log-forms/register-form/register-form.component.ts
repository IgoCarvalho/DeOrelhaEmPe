import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

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

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  submit(){
  	this.http.post(`${this.url}/signup`, this.user).subscribe(res=>{
  		console.log(`usuario cadastrado`, res)
  	})
  }

}
