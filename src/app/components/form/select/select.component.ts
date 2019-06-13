import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  title: any  =  'CATEGORIA';
  @ViewChild('titulo') tittleElement: ElementRef;
  
  itens: any[] = [
    {type: 'danger', value: 'maus-tratos', label: 'Maus-tratos'},
    {type: 'info', value: 'perdido', label: 'Perdido'},
    {type: 'secondary', value: 'nocivo-a-saude', label: 'Situação nociva a saúde'},
  ];

  @Output() selected: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  abc(value: string, event){
    this.tittleElement.nativeElement.innerHTML = event.target.innerHTML;
    this.selected.emit(value);
    console.log(this.tittleElement.nativeElement)
    console.log(value);
  }

}
