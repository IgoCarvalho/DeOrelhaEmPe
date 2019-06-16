import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OccurrenceService } from 'src/app/services/occurrence.service';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { Observable, Subject } from 'rxjs';
import { delay, tap, skip } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  isactive = true;
  @Output() toggler: EventEmitter<any> = new EventEmitter();
  
  array: any[] = ['1','2','3','4','5'];
  data$: Observable<any[]>;
  empty$ = new Subject<boolean>()

  constructor(
    private occService: OccurrenceService,
    private occDataService: OccurrenceDataService,
  ) { }

  ngOnInit() {
    this.data$ = this.occDataService.currentOccurrence.pipe(
      delay(2000),
      skip(1),
      tap(a=>{
        a.length == 0? console.log(this.array)
        :console.log(2)
      })
      )
    this.empty$
  }

  toggle(){
    this.isactive = !this.isactive;
    console.log(this.isactive)
    this.toggler.emit()
  }

  setCategory(category){
    this.occDataService.setDataByCategory(category)
  }

  search(value: string){
    console.log(value);
    if(value.length > 2) this.occDataService.searchData(value)
    
    
  }

}
