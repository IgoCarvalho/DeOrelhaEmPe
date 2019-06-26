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

  m_data;
  a_data;
  n_data;

  data = data;
  geoData: GeoJson;

  constructor(
    private mapService: MapService,
    private occDataService: OccurrenceDataService
  ) {
  }

  ngOnInit() {
    // this.occDataService.setData()
    this.occDataService.currentOccurrence.pipe(
      map(g => g.map(a => JSON.parse(a.geoData))),
      tap((d) => {
        this.m_data = d.filter(i => i.properties.category == 'maus-tratos')
        this.a_data = d.filter(i => i.properties.category == 'abandono')
        this.n_data = d.filter(i => i.properties.category == 'nocivo-a-saude')
      })
    ).subscribe(res => {
      this.geoData = new GeoJson(res)
      this.createMap();
    })

    
  }

  createMap() {
    const colorSchema = {
      maus_tratos: '#e74054',
      abandono: '#FFD21F',
      nocivo: '#E98F2B',
    }
    let ref = [
      { name: 'maus_tratos', data: this.m_data },
      { name: 'abandono', data: this.a_data },
      { name: 'nocivo', data: this.n_data },
    ]


    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-39.016081, -4.970468],
      zoom: 13
    });

    map.addControl(new mapboxgl.NavigationControl());

    map.on('load', () => {
      // add a clustered GeoJSON source for powerplant
      ref.map(d => {

        map.addSource(d.name, {
          'type': 'geojson',
          'data': {
            type: 'FeatureCollection',
            features: d.data
          },
          'cluster': true,
          'clusterRadius': 50
        });

        map.addLayer({
          id: d.name + '-cluster',
          type: 'circle',
          source: d.name,
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': colorSchema[d.name],
            'circle-radius': {
              property: 'point_count',
              type: 'interval',
              stops: [
                [0, 20],
                [4, 30],
                [750, 40]
              ]
            }
          }
        });

        map.addLayer({
          id: d.name + 'cluster-count',
          type: 'symbol',
          source: d.name,
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
          }
        });

        map.addLayer({
          id: d.name+'-individual',
          type: 'circle',
          source: d.name,
          filter: ['!has', 'point_count'],
          paint: {
              'circle-color': colorSchema[d.name],
              'circle-radius': 10,
              'circle-stroke-width': 1,
              'circle-stroke-color': '#fff'
          }
      });

      })

    });

  }


}
