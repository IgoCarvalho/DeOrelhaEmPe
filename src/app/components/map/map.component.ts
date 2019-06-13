import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { data } from './map.geo';

import  {geo}  from  'src/assets/geodata.geojson';

console.log(data);


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
    /*let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-103.59179687498357, 40.66995747013945],
      center: [-39.016081, -4.970468],
      // center: [-96, 37.8],
      zoom: 12
    });

    // Add zoom and rotation controls to the map.
    // map.addControl(new mapboxgl.NavigationControl());

    // map.on("wheel", event => {
    //   if (event.originalEvent.ctrlKey) {
    //     return;
    //   }

    //   if (event.originalEvent.metaKey) {
    //     return;
    //   }

    //   if (event.originalEvent.altKey) {
    //     return;
    //   }

    //   event.preventDefault();
    // });
    // var map = new mapboxgl.Map({
    //   container: 'map',
    //   style: 'mapbox://styles/mapbox/light-v9'
    // });

    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'bottom-right');


    map.on('load',
      () => {
        map.addSource('ocorrencias', {
          type: 'geojson',
          data: data,
          cluster: true,
          clusterRadius: 50,
          clusterMaxZoom: 15
        })

        map.addLayer({
          id: 'ocorrencia',
          type: 'circle',
          source: 'ocorrencias',
          filter: ['has', 'point_count'],
          // filter: ['has',['==', 'color', '#8833ee']],
          paint: {
            'circle-color': {
              property: 'point_count',
              type: 'interval',
              stops: [
                [0, 'rgba(12,202,100, 0.5)'],
                [3, 'rgba(202,22,100, 0.5)'],
                [750, '#0B5703'],
              ]
            },
            'circle-radius': {
              property: 'point_count',
              type: 'interval',
              stops: [
                [0, 20],
                [3, 30],
                [750, 40]
              ]
            }
          }
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'ocorrencias',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          }
        });

        map.addLayer({
          id: 'airport',
          type: 'circle',
          source: 'ocorrencias',
          filter: ['!has', 'point_count'],
          paint: {
            'circle-color': '#04eb87',
            'circle-radius': 6,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
          }
        });

        // map.addLayer({
        //   "id": "points",
        //   "type": "symbol",
        //   "source": {
        //     "type": "geojson",
        //     "data": data
        //   },
        //   "layout": {
        //     "text-field": "1",
        //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        //     "text-offset": [0, 0.6],
        //     "text-anchor": "top"
        //   }
        // });
      });

      //this.createMap();*/
  }

  createMap(){
    let hydro = ['==', ['get', 'fuel1'], 'Hydro'];


    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-79.381000, 43.646000],
      zoom: 12.0
    });
    
    map.on('load', () => {
      // add a clustered GeoJSON source for powerplant
      map.addSource('powerplants', {
        'type': 'geojson',
        'data': geo,
        'cluster': true,
        'clusterRadius': 80,
        'clusterProperties': { // keep separate counts for each fuel category in a cluster
          'hydro': ['+', ['case', hydro, 1, 0]]
          }
      });

      let current_fuel = "hydro";

      map.addLayer({
        'id': 'powerplant_cluster',
        'type': 'circle',
        'source': 'powerplants',
        'filter': [
          'all',
          ['>', ['get', current_fuel], 1],
          ['==', ['get', 'cluster'], true]
        ],
        'paint': {
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-radius': [
            'step',
            ['get', current_fuel],
            20,
            100,
            30,
            750,
            40
          ],
          'circle-stroke-color': '#8dd3c7',
          'circle-stroke-width': 5
        }
      });

      map.addLayer({
        'id': 'powerplant_cluster_label',
        'type': 'symbol',
        'source': 'powerplants',
        'filter': [
          'all',
          ['>', ['get', current_fuel], 1],
          ['==', ['get', 'cluster'], true]
        ],
        'layout': {
          'text-field': ['number-format', ['get', current_fuel], {}],
          'text-font': ['Montserrat Bold', 'Arial Unicode MS Bold'],
          'text-size': 13
        },
        'paint': {
          'text-color': '#8dd3c7'
        }
      });
      
    });
    
  }


}
