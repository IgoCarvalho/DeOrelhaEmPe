import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

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
  }
}
