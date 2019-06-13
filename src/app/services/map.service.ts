import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

	key = environment.mapbox.key;


  constructor( private http: HttpClient ) { }

  getAddress(lng, lat){
  	return this.http.get<any>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=address&access_token=${this.key}`)
  }

}
