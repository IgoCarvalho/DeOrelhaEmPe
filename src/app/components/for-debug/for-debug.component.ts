import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-for-debug',
  templateUrl: './for-debug.component.html',
  styleUrls: ['./for-debug.component.scss']
})
export class ForDebugComponent implements OnInit {

  @Input() form;
  
  constructor() { }

  ngOnInit() {
  }

}
