import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leis',
  templateUrl: './leis.component.html',
  styleUrls: ['./leis.component.scss']
})
export class LeisComponent implements OnInit {

  deveres = false;
  leis = true;

  margin = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/leis"){
      console.log(this.router.url);
      this.margin = true;
    }
  }

}
