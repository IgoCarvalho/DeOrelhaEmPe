import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceDataService {

  data: any[] = []
  private occurrenceSource = new BehaviorSubject(this.data);
  currentOccurrence = this.occurrenceSource.asObservable().pipe(
    tap(()=>console.log('oioioi'))
  );
  empty$ = new Subject<boolean>()
  
  constructor() { }

  setData(data: any[]){
    this.data = data
    this.occurrenceSource.next(this.data)
  }

  setDataByCategory(category){
    let newData = this.data.filter((occ)=>( occ.category.key === category ))
    console.log(newData);
    
    
    this.occurrenceSource.next(newData)
  }

  searchData(value){
    let newData = this.data.filter((occ)=>( occ.title.toLowerCase().includes(value.toLowerCase()) ))

    this.occurrenceSource.next(newData)
  }

  isEmpty(){
    this.empty$.next(true)
  }

  getData(id){
    let newData = this.data.find((occ)=>( occ._id === id))
    return newData.asObservable()
  }
  
}
