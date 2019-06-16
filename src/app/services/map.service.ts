import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  key = environment.mapbox.secret_key;
  apiUrl = environment.api_url


  constructor( private http: HttpClient ) { 
    mapboxgl.accessToken = environment.mapbox.secret_key
   }

  getAddress(lng, lat){
  	return this.http.get<any>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?types=address&access_token=${this.key}`)
  }

  getGeoData(){
    return this.http.get(`${this.apiUrl}/occurrence/geodata`)
  }

}
