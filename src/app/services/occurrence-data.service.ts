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

  cczData = new Subject()

  oneData = new Subject()
  
  constructor() { }

  setData(data?: any[]){
    if(data) this.data = data
    
    this.occurrenceSource.next(this.data)
  }
  setOneDataById(id){
    let newData = this.data.find((occ)=>( occ._id === id))
    this.oneData.next(newData)
  }
  setOneData(data){
    // let newData = this.data.find((occ)=>( occ._id === id))
    this.oneData.next(data)
  }
  addData(occ){
    console.log(this.data)

    this.data.unshift(occ)

    this.occurrenceSource.next(this.data)
  }
  updateData(occ){ 
    console.log(this.data)
    this.data = this.data.filter(o=> o._id != occ._id)
    this.addData(occ)
  }

  setDataByCategory(category){
    let newData;
    if(!category) {
       newData = this.data
    }else{
       newData = this.data.filter((occ)=>( occ.category.key === category ))

    }
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
  getAllData(){
    let newData = this.data
    return newData
  }

  getOneData(id){
    let newData = this.data.find((occ)=>( occ._id === id))
    return newData
  }
  
  setCzz(){
    this.cczData.next(this.data)
  }
}
