import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-ocorre01',
  templateUrl: './ocorre01.component.html',
  styleUrls: ['./ocorre01.component.scss']
})
export class Ocorre01Component{
  etapa1: boolean = false;
  etapa2: boolean = true;
  etapa3: boolean = true;
  
  aa = 'ifo';

  imagens = []
  imagensPro = []
  
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvY2FydmFsaG8iLCJhIjoiY2p1cnhlb211MWcxcjRkbnRjdDFpeGExZSJ9.zCy_6DkI8tpXunft_yKkew';
  }

  abc(event){
    console.log(event.srcElement)
    let files = event.srcElement.files
    for (let i = 0; i < files.length; i++) {
      let fileReader = new FileReader()

      fileReader.onloadend = () =>{
        this.imagensPro.push(fileReader.result)
      }

      fileReader.readAsDataURL(files[i])
      
    }
    console.log(this.imagens)
    console.log(this.imagensPro)

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

}
