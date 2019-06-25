import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  margin = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/mapa"){
      console.log(this.router.url);
      this.margin = true;
    }
  }
}
