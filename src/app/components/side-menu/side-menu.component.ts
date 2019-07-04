import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { OccurrenceService } from 'src/app/services/occurrence.service';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { Observable, Subject } from 'rxjs';
import { delay, tap, skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {

  isactive = false;
  @Output() toggler: EventEmitter<any> = new EventEmitter();
  
  array: any[] = ['1','2','3','4','5'];
  data: any[];
  destroy$ = new Subject<boolean>()

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private occService: OccurrenceService,
    private occDataService: OccurrenceDataService,
  ) { }

  ngOnInit() {
    setTimeout(()=>{this.isactive = !this.isactive;}, 320)
    this.occDataService.currentOccurrence.pipe(
      takeUntil(this.destroy$)
    ).subscribe((res)=>{
      console.log('side inscreveu');
      console.log(res);
      this.data = res
      
    })
    /* this.data$ = this.occDataService.currentOccurrence.pipe(
      delay(2000),
      // skip(1),
      tap(a=>{
        a.length == 0? console.log(this.array)
        :console.log(2)
      })
      )
    this.empty$ */

    this.dropdownList = [
      { key: 1, name: 'Maus tratos' },
      { key: 2, name: 'Abandono' },
      { key: 3, name: 'Nocivo a saude' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'key',
      textField: 'name',
      selectAllText: 'Todos',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false
    };
    
    // let a = document.querySelector('.dropdown-btn')
    // console.log(a)
    // a.className = ' btn btn-outline-primary bg-white'
    // a.innerHTML = '<i class="text-secondary fa fa-filter"></i>'
  }

  
  onItemSelect(e){
    console.log('onItemSelect',e)
  }
  
  onSelectAll(e){
    console.log('onSelectAll',e)
  }
  onFilterChange(e){
    console.log('onFilterChange',e)
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
    this.occDataService.searchData(value)
    
    
  }

  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
    console.log('side destroy')
  }

}
