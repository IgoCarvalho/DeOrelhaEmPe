import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { data } from './map.geo';
import { GeoJson } from 'src/app/models/geo-json';
import { MapService } from 'src/app/services/map.service';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { map, tap } from 'rxjs/operators';

// import  {geo}  from  'src/assets/geodata.geojson';

console.log(data);


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  data = data;
  geoData: GeoJson;
  
  constructor(
    private mapService: MapService,
    private occDataService: OccurrenceDataService
  ) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvY2FydmFsaG8iLCJhIjoiY2p1cnhlb211MWcxcjRkbnRjdDFpeGExZSJ9.zCy_6DkI8tpXunft_yKkew';
  }

  ngOnInit() {
    this.occDataService.currentOccurrence.pipe(
      map(g=>g.map(a=>JSON.parse(a.geoData))),
      tap((a)=>console.log(a))
    ).subscribe(res=>{
      this.geoData = new GeoJson(res)
    })

    // this.mapService.getGeoData().subscribe((data: [])=>{
    //   this.geoData = new GeoJson(data)
    // })
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
      */

    this.createMap();
  }

  createMap() {
    const maus_tratos = ['==', ['get', 'category'], 'maus-tratos'];
    const abandono = ['==', ['get', 'category'], 'abandono'];
    const nocivo = ['==', ['get', 'category'], 'nocivo'];
    const colorSchema = {
      maus_tratos : '#e74054',
      abandono: '#FFD21F',
      nocivo: '#E98F2B',
    }


    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-39.016081, -4.970468],
      zoom: 12.0
    });

    map.on('load', () => {
      // add a clustered GeoJSON source for powerplant
      map.addSource('occurrences', {
        'type': 'geojson',
        'data': this.geoData,
        'cluster': false,
        'clusterRadius': 50,
        'clusterProperties': { // keep separate counts for each fuel category in a cluster
          'maus-tratos': ['+', ['case', maus_tratos, 1, 0]],
          'abandono': ['+', ['case', abandono, 1, 0]],
          'nocivo': ['+', ['case', nocivo, 1, 0]]
        }
      });

      let current_fuel = "hydro";

      /* map.addLayer({
        'id': 'maus-tratos-cluster',
        'type': 'circle',
        'source': 'occurrences',
        'filter': [
          'all',
          ['>', ['get', 'maus-tratos'], 1],
          ['==', ['get', 'cluster'], true]
        ],
        'paint': {
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-radius': [
            'step',
            ['get', 'maus-tratos'],
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
        'id': 'maus-tratos-cluster-label',
        'type': 'symbol',
        'source': 'occurrences',
        'filter': [
          'all',
          ['>', ['get', 'maus-tratos'], 1],
          ['==', ['get', 'cluster'], true]
        ],
        'layout': {
          'text-field': ['number-format', ['get', 'maus-tratos'], {}],
          'text-font': ['Montserrat Bold', 'Arial Unicode MS Bold'],
          'text-size': 13
        },
        'paint': {
          'text-color': '#8dd3c7'
        }
      }); */

      map.addLayer({
        'id': 'occurrence-individual',
        'type': 'circle',
        'source': 'occurrences',
        'filter': ['!=', ['get', 'cluster'], true],
        'paint': {
          'circle-color': ['case',
            maus_tratos, colorSchema['maus_tratos'],
            abandono, colorSchema['abandono'],
            nocivo, colorSchema['nocivo'], '#ffed6f'],
          'circle-radius': 5
        }
      });

      let markers = {};
      let markersOnScreen = {};
      let point_counts = [];
      let totals;

      let id: any;

      const getPointCount = (features) => {
        features.forEach(f => {
          if (f.properties.cluster) {
            point_counts.push(f.properties.point_count)
          }
        })
        return point_counts;
      };

      const updateMarkers = () => {
        // keep track of new markers
        let newMarkers = {};
        // get the features whether or not they are visible (https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures)
        const features = map.querySourceFeatures('powerplants');

        totals = getPointCount(features);
        // loop through each feature
        features.forEach((feature) => {
          const coordinates = feature.geometry.coordinates;
          // get our properties, which include our clustered properties
          const props = feature.properties;
          // continue only if the point is part of a cluster
          if (!props.cluster) {
            return;
          };
          // if yes, get the cluster_id
          id = props.cluster_id;
          // create a marker object with the cluster_id as a key
          let marker = markers[id];
          // if that marker doesn't exist yet, create it
          /* if (!marker) {
            // create an html element (more on this later)
            const el = createDonutChart(props, totals);
            // create the marker object passing the html element and the coordinates
            marker = markers[id] = new mapboxgl.Marker({
              element: el
            }).setLngLat(coordinates);
          } */
          
          // create an object in our newMarkers object with our current marker representing the current cluster
          newMarkers[id] = marker;
          
          // if the marker isn't already on screen then add it to the map
          if (!markersOnScreen[id]) {
            marker.addTo(map);
          }
        });
        
        // check if the marker with the cluster_id is already on the screen by iterating through our markersOnScreen object, which keeps track of that
        for (id in markersOnScreen) {
          // if there isn't a new marker with that id, then it's not visible, therefore remove it. 
          if (!newMarkers[id]) {
            markersOnScreen[id].remove();
          }
        }
        // otherwise, it is visible and we need to add it to our markersOnScreen object
          markersOnScreen = newMarkers;
      };

    });

  }


}
