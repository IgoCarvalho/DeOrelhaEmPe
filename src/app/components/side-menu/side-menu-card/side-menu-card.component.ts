import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styleUrls: ['./side-menu-card.component.scss']
})
export class SideMenuCardComponent implements OnInit {

  @Input() data: Observable<any[]>;
  @Input() empty$: Subject<boolean>;
  array: any[] = ['1','2','3','4','5'];
  
  constructor() { }

  ngOnInit() {
  }

}
