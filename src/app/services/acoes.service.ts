import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  url = environment.api_url.concat('/acoes')

  constructor( private http: HttpClient ) { }

  save(acao){
   return this.http.post(this.url, acao).pipe(pluck('ac'))
  }

  getAll(){
    return this.http.get(this.url).pipe(pluck('ac'))
  }
  
}
