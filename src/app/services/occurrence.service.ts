import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OccurrenceDataService } from './occurrence-data.service';
import { take, pluck, catchError, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OccurrenceService {

  url = environment.api_url.concat('/occurrence')

  constructor(
    private http: HttpClient,
    private occDataService: OccurrenceDataService
  ) { }

  getAll(){
    this.http.get(`${this.url}`).pipe(
      pluck('oc'),
      tap((x)=>{console.log('OBSERVABLE')}),
      retry(2),
      tap((x)=>{console.log('OBSERVABLE2')}),
      
      tap((x)=>{console.log('OBSERVABLE3')}),
    ).subscribe(
      (res: any)=>{ console.log(res);
       this.occDataService.setData(res) }
    )
  }

  getSmallData(){
    return this.http.get(`${this.url}/small`)
  }

  getOne(id){
    return this.http.get(`${this.url}/${id}`)
  }

  save(oc){
    return this.http.post(`${this.url}`, oc)
  }

  coment(coment){
    return
  }

  update(up){
    return
  }
  
}
