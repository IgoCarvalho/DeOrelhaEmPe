import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  tittle: any  =  'CATEGORIA';
  @ViewChild('titulo') tittleElement: ElementRef;
  
  menu: any[] = [
    {type: 'item', value: 'value-1', label: 'opcao 1'},
    {type: 'item', value: 'value-2', label: 'opcao 2'},
    {type: 'item', value: 'value-3', label: 'opcao 3'},
    {type: 'item', value: 'value-4', label: 'opcao 4'},
  ];

  @Output() emit: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  abc(value: string, event){
    this.tittleElement.nativeElement.innerHTML = event.target.innerHTML;
    this.emit.emit(value);
    console.log(this.tittleElement.nativeElement)
    console.log(value);
  }

}
