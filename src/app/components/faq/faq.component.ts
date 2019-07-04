import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  margin = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url == "/faq"){
      console.log(this.router.url);
      this.margin = true;
    }
  }

}
