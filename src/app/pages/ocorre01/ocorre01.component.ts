import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as mapboxgl from 'mapbox-gl';
import Denuncia from 'src/app/models/denunciaModel';


@Component({
  selector: 'app-ocorre01',
  templateUrl: './ocorre01.component.html',
  styleUrls: ['./ocorre01.component.scss']
})
export class Ocorre01Component{
  etapa1: boolean = false;
  etapa2: boolean = true;
  etapa3: boolean = true;

  denuncia: Denuncia = new Denuncia();
  // denuncia = {titulo: '',
  //             categoria: '',
  //             descricao: '',
  //             }
  
  aa = 'ifo';
  
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvY2FydmFsaG8iLCJhIjoiY2p1cnhlb211MWcxcjRkbnRjdDFpeGExZSJ9.zCy_6DkI8tpXunft_yKkew';
  }
  
  ngOnInit() {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-103.59179687498357, 40.66995747013945],
      center: [-39.016081, -4.970468],
      zoom: 12
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    map.on("wheel", event => {
      if (event.originalEvent.ctrlKey) {
          return;
      }
  
      if (event.originalEvent.metaKey) {
          return;
      }
  
      if (event.originalEvent.altKey) {
          return;
      }
  
      event.preventDefault();
    });
    map.on('click', (e) => {
      // document.getElementById('info').innerHTML =
      // e.point is the x, y coordinates of the mousemove event relative
      // to the top-left corner of the map
      // JSON.stringify(e.point) + '<br />' +
      // e.lngLat is the longitude, latitude geographical position of the event
      // console.log(JSON.stringify(e.lngLat));
      console.log('clicou');
      console.log(e);
      this.aa = e.lngLat;
      console.log(this.aa);
      });

  }
  mostrar(){
    console.log(this.denuncia);
    console.log(this.denuncia.categoria);
  }

}
