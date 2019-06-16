import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() title: any  =  'CATEGORIA';
  @ViewChild('titulo') titleElement: ElementRef;
  
  @Input() itens: any[] = [
    {key: 'maus-tratos', name: 'Maus-tratos'},
    {key: 'abandono', name: 'Abandono'},
    {key: 'nocivo-a-saude', name: 'Situação nociva a saúde'},
  ];

  @Output() selected: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  change(key: string, event){
    this.titleElement.nativeElement.innerHTML = event.target.innerHTML;
    let data =  this.itens.find(i=> i.key == key)
    data = JSON.stringify(data)
    this.selected.emit(data)
  }

}
