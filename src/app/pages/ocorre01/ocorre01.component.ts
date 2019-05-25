import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-ocorre01',
  templateUrl: './ocorre01.component.html',
  styleUrls: ['./ocorre01.component.scss']
})
export class Ocorre01Component{
  etapa1: boolean = false;
  etapa2: boolean = true;
  etapa3: boolean = true;
  
  // ngOnInit() {
  //   this.etapa1 = false;
  //   this.etapa2 = true;
  //   this.etapa3 = true;
  // }

}
