import { Component, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapService } from 'src/app/services/map.service';
import { OccurrenceService } from 'src/app/services/occurrence.service';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ocorre02',
  // template: '',
  templateUrl: './ocorre02.component.html',
  styleUrls: ['./ocorre02.component.scss']
})
export class Ocorre02Component implements OnInit {

  map: mapboxgl.Map;
  geocoder: mapboxgl.MapboxGeocoder;
  marker: mapboxgl.Marker;

  data: any;
  teste = '';

  aad: FileList;

  images = [];
  imagesPre = [];

  markerSource: any;
  markerData = []


  step: number = 1;

  @ViewChild('oForm') form: NgForm;
  @ViewChild('file') formFile;


  constructor(
    private mapService: MapService,
    private ocService: OccurrenceService,
    private router:Router,
    private toaster: ToastrService
  ) { }

  onSubmit(oForm) {

    if(!oForm.valid) { 
      this.toaster.warning('Existem campos em ranco no formulário', 'Validação') 
      return
    }
    
    let form = <HTMLFormElement>document.getElementById('myForm')

    let formData = new FormData(form)

    formData.append('userId', "5cfa74d981cec432ef538975")// excluir
    
    formData.delete('file')
    console.log(this.images)
    this.images.map((data: File) => { formData.append('file', data) })

    let cat = JSON.parse(this.form.value.category)
    this.data.properties.category = cat.key
    formData.append('geoData', JSON.stringify(this.data))

    this.ocService.save(formData).subscribe((res) => {
      console.log(res);
      this.toaster.success('Occorrência realizada com sucesso', 'Ocorrência')
      this.router.navigate(['/home'])
    })

  }

  addFile(event) {
    console.log(event.srcElement.files)
    let files: File[] = Array.from(event.srcElement.files)
    let isFull: boolean = false;

    for (let file of files) {
      console.log(this.imagesPre.length)
      if (this.imagesPre.length < 5) {
        let fileReader = new FileReader()

        fileReader.onloadend = () => {
          if (this.imagesPre.length < 5) {
            console.log('pprimeira imagem processada')
            let img:any;
            
            this.images.push(file)
            console.log(this.images);
            if(file.type.includes('video')){
              img = '../../../assets/img/video-preview.png';
            }
              img = fileReader.result
            

            let imgData = {
              img,
              name: file.name,
              type: file.type
            }

            this.imagesPre.push(imgData)
          }
            
          
          isFull = true  //todo notification
        
          console.log(this.imagesPre);

        }

        fileReader.readAsDataURL(file)

      } else {
        isFull = true
      }

    };
    console.log('fim do loop')


    isFull ? alert('cheio')
      : console.log('aa'); //todo


  }

  removeFile(index) {
    this.imagesPre.splice(index, 1)
    this.images.splice(index, 1)
  }


  zzz(event) {
    let files = Array.from(event.files)
    console.log(event);
    // this.aad = new FileList()
    files.map(a => {
      console.log(a);
    })


    let form = <HTMLFormElement>document.getElementById('myForm')
    // let formData = {
    //   name: 'igo',
    //   price: 12,
    //   file: image
    // }
    let element = {
      igo: 'igo',
      data: {
        iso: 123,
        ss: true
      }
    }
    let formData = new FormData(form)
    // console.log(formData.getAll('file'));
    formData.delete('file')
    this.images.map((data: File) => { formData.append('file', data) })
    formData.append('igo', JSON.stringify(element))
    /* for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i])

      
    } */
    // formData.set('file', this.aad)
    console.log(formData.getAll('file'));

    // formData.append('file', image)
    // formData.append('name', 'igo')
    // formData.append('ncasce', 'scasc')
  }

  selectCategory(selected) {
    this.form.form.patchValue({
      category: selected
    })
  }

  next(form) {
    this.step++
    console.log(form);

  }
  prev() {
    this.step--
    console.log(this.form);

  }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-103.59179687498357, 40.66995747013945],
      center: [-39.016081, -4.970468],
      // center: [-96, 37.8],
      zoom: 13
    });

    this.map.on("load", () => {
      this.marker = new mapboxgl.Marker()

      /* /// create marker source
      this.map.addSource('marker', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.markerSource = this.map.getSource('marker')

      /// create marker layer
      this.map.addLayer({
        id: 'marker',
        source: 'marker',
        type: 'symbol',
        layout: {
          'text-field': 'sage',
          'text-size': 24,
          'text-transform': 'uppercase',
          'icon-image': 'marker-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#f16624',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      }); */

    })

    // Add zoom and rotation controls to the this.map.
    // this.map.addControl(new mapboxgl.NavigationControl());
    this.geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: 'br',
      language: 'pt-BR',
      bbox: [
        -39.233828537,
        -5.16841249116946,
        -38.616797359,
        -4.66521616015307
      ],
      flyTo: false,
      placeholder: 'Endereço',
      marker: false
    });


    let div = this.geocoder.onAdd(this.map);
    div.className += ' mapboxgl-ctrl-geocoder-lg ';

    div.querySelector('svg').remove();

    div.querySelector('.mapboxgl-ctrl-geocoder--input').className = ' form-control';

    document.getElementById('geocoder').appendChild(div);
    // console.log(geocoder.onAdd(map));


    this.map.on("wheel", event => {
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
    this.map.on('click', (e) => {
      // document.getElementById('info').innerHTML =
      // e.point is the x, y coordinates of the mousemove event relative
      // to the top-left corner of the map
      // JSON.stringify(e.point) + '<br />' +
      // e.lngLat is the longitude, latitude geographical position of the event
      // console.log(JSON.stringify(e.lngLat));
      console.log('clicou');
      console.log(e);
      this.mapService.getAddress(e.lngLat.lng, e.lngLat.lat).subscribe(res => {
        console.log(res)
        this.setGeodata(res.features[0])

      })
      // this.aa = e.lngLat;
      // console.log(this.aa);
    });
    this.geocoder.on("result", (e) => {
      this.setGeodata(e.result)
    })

  }

  setGeodata(data) {
    console.log("xxxxxxxxxxxxxxxxx", data);

    let geoData: any = {};
    if ((data.id.split('.').shift()) === 'address') {
      geoData.address = data.text
    }
    data.context.map((i) => {

      if ((i.id.split('.').shift()) === 'address') {
        geoData.address = i.text
      }
      if ((i.id.split('.').shift()) === 'neighborhood') {
        geoData.neighborhood = i.text
      }
      if ((i.id.split('.').shift()) === 'place') {
        geoData.city = i.text
      }

    })
    this.map.flyTo({
      center: data.geometry.coordinates
    })
    this.data = {
      type: data.type,
      properties: data.properties,
      geometry: data.geometry
    }
    this.setAddress(geoData)
    this.setMarker(data)
  }

  setAddress(data) {
    this.geocoder.setInput(data.address)

    this.form.form.patchValue({
      address: {
        street: data.address,
        neighborhood: data.neighborhood
      }
    })
  }
  setMarker(data) {
    let { type, geometry } = data

    console.log(geometry.coordinates);
    this.marker
      .setLngLat(geometry.coordinates)
      .addTo(this.map)


    // this.markerSource.setData({ type, geometry })
  }
}
