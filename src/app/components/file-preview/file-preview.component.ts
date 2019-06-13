import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {

  @Output() deleteEmitter: EventEmitter<any> = new EventEmitter()
  
  @Input() files = [];
  
  constructor() { }

  ngOnInit() {
  }

  delete(index){
    console.log(index);
    
    this.deleteEmitter.emit(index)
  }

}
