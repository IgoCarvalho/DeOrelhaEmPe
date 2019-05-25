import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-multilist',
  templateUrl: './carousel-multilist.component.html',
  styleUrls: ['./carousel-multilist.component.scss']
})
export class CarouselMultilistComponent implements OnInit {
  itemsPerSlide = 4;
  singleSlideOffset = true;
 
  slides =  [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
