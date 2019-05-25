import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  isactive = true;
  @Output() toggler: EventEmitter<any> = new EventEmitter();
  
  array: any[] = ['1','2','3','4','5'];

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isactive = !this.isactive;
    console.log(this.isactive)
    this.toggler.emit()
  }

}
