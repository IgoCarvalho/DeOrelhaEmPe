import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  id: any;
  mostrar = false;
  mostrarFeed = false;

  data: any;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private router: Router,
    private occDataService: OccurrenceDataService
    
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.id = param['id']
    });
    
    this.data = this.occDataService.getData(this.id)
    console.log(this.data)
    
    this.mostrarBtn()
  }


  mostrarBtn(){
    if(this.router.url == "/ccz/info/" + this.id){
      this.mostrar = true;
    }
    else{
      this.mostrar = false;
    }
  }

}
