import { Component, OnInit } from '@angular/core';
import { OccurrenceService } from './services/occurrence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'projetoIII';
  constructor(private occService: OccurrenceService){

  }

  ngOnInit(){
    console.log('##########-APP-COMPONENT-#############');
    
    this.occService.getAll()
  }
}
