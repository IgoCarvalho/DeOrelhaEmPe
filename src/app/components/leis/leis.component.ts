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
  
  constructor() { }

  ngOnInit() {
   
  }

}
