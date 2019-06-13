import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  id: any;
  mostrar = false;
  mostrarFeed = false;

  constructor(private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id']
    });
    console.log(this.router.url);
    if(this.router.url == "/ccz/info/" + this.id){
      this.mostrar = true;
    }
    else{
      this.mostrar = false;
    }
    
  }
  // mostrarBtn(){
  //   if(this.router.url == "ccz/info/" + this.id){
  //     this.mostrar = true;
  //   }
  //   else{
  //     this.mostrar = false;
  //   }
  // }

}
