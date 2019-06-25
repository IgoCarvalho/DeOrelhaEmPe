import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fixo = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // if(this.router.url == "/"){
    //   console.log(this.router.url);
    //   this.fixo = true;
    // }
    // else{
    //   this.fixo = false;
    //   console.log(this.fixo);
      
    // }
  }

}
