import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggle = false;
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{this.toggler()}, 300)
  }

  toggler(){
    this.toggle = !this.toggle;
    
  }

}
