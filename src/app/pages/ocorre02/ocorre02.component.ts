import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-ocorre02',
  templateUrl: './ocorre02.component.html',
  styles: [`
    .mapa{
      width: 100%;
      height: 300px;
    }
  `]
  // styleUrls: ['./ocorre02.components.scss']
})
export class Ocorre02Component implements OnInit {

  etapa1 = false;
  etapa2 = true;
  etapa3 = true;
  
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
      // this.aa = e.lngLat;
      // console.log(this.aa);
      });

  }
}
