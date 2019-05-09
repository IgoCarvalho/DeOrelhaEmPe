import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  array: any[] = ['1','2','3','4','5'];

  constructor() { }

  ngOnInit() {
  }

}
