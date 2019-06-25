import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent implements OnInit {

  margin = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/acoes"){
      console.log(this.router.url);
      this.margin = true;
    }
  }

}
