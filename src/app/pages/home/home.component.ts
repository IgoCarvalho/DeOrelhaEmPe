import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggle = false;
  isVisible = true;
  
  constructor(
    private route: Router,
    private location: Location
  ) { }

  ngOnInit() {
    setTimeout(()=>{this.toggler()}, 300)
    console.log(this.route)
    this.route.url.includes('info')? this.isVisible = false: this.isVisible = true
    this.route.events.subscribe(res=>{
      let url = this.location.path();
      url.includes('info')? this.isVisible = false: this.isVisible = true
      
    })
  }

  toggler(){
    this.toggle = !this.toggle;
    
  }

}
