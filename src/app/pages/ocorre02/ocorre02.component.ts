import { Component, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MapService } from 'src/app/services/map.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ocorre02',
  // template: '',
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

  data: any;
  teste = '';

  aad: FileList;

  images = [];
  imagesPre = [];


  visible: number = 1;
  
  @ViewChild('oForm') form;
  @ViewChild('file') formFile;
  

  constructor(
    private mapService: MapService,
    private http: HttpClient
    ) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvY2FydmFsaG8iLCJhIjoiY2p1cnhlb211MWcxcjRkbnRjdDFpeGExZSJ9.zCy_6DkI8tpXunft_yKkew';
    
  }

  onSubmit(){
    let form = <HTMLFormElement>document.getElementById('myForm')

    let formData = new FormData(form)
    
    formData.delete('file')
    this.images.map((data:File)=>{formData.append('file', data)})

    formData.append('geo', JSON.stringify(this.data))
    // console.log(this.formFile.nativeElement.files);
    this.http.post('http://localhost:3003/api/images', formData).subscribe(res=>{
      console.log(res);
      
    })
    
  }

  onChange(event){
    console.log(event.srcElement.files)
    let files = Array.from(event.srcElement.files)

    files.map((file:File)=>{
      this.images.push(file)

      let fileReader = new FileReader()

      fileReader.onloadend = () =>{
        let img = fileReader.result;

        let imgData = {
          img,
          name: file.name
        }

        this.imagesPre.push(imgData)
        
        // this.imagensPro.push(fileReader.result)
        console.log(this.imagesPre);

      }

      fileReader.readAsDataURL(file)

    })    

  }

  removeData(index){
    this.imagesPre.splice(index, 1)
    this.images.splice(index, 1)
  }


  zzz(event){
    let files = Array.from(event.files)
    console.log(event);
    // this.aad = new FileList()
    files.map(a=>{console.log(a);
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
    this.images.map((data:File)=>{formData.append('file', data)})
    formData.append('igo', JSON.stringify(element))
    /* for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i])

      
    } */
    // formData.set('file', this.aad)
    console.log(formData.getAll('file'));
    
    // formData.append('file', image)
    // formData.append('name', 'igo')
    // formData.append('ncasce', 'scasc')
    this.http.post('http://localhost:3003/api/images', formData).subscribe(res=>{
      console.log(res);
      
    })
  }

  selectCategory(value){
    this.form.form.patchValue({
      category: value
    })
  }
  
  next(form){
    this.visible++
    console.log(form);

  }
  prev(){
    this.visible--
    console.log(this.form);
    
  }

  ngOnInit() {
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      // center: [-103.59179687498357, 40.66995747013945],
      center: [-39.016081, -4.970468],
      // center: [-96, 37.8],
      zoom: 12
    });

    // Add zoom and rotation controls to the map.
    // map.addControl(new mapboxgl.NavigationControl());
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    
    let div = geocoder.onAdd(map);

    div.querySelector('svg').remove();
    
    div.querySelector('.mapboxgl-ctrl-geocoder--input').className = ' form-control';
    
    // let i = div.querySelector('.mapboxgl-ctrl-geocoder--input');
    
    // i.className += ' form-control'
    
    // console.log(i)
    
    document.getElementById('geocoder').appendChild(div);
    // console.log(geocoder.onAdd(map));
    
    
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
      this.mapService.getAddress(e.lngLat.lng, e.lngLat.lat).subscribe(res => {
        console.log(res)
        let data = res.features[0]
        let geoData: any = {};
        if((data.id.split('.').shift()) === 'address'){
          geoData.address = data.text
        }
        data.context.map( (i)=>{

          if((i.id.split('.').shift()) === 'address'){
            geoData.address = i.text
          }
          if((i.id.split('.').shift()) === 'neighborhood'){
            geoData.neighborhood = i.text
          }
          if((i.id.split('.').shift()) === 'place'){
            geoData.city = i.text
          }
          
        } )
        this.data = data.geometry
        this.setAddress(geoData)
      })
      // this.aa = e.lngLat;
      // console.log(this.aa);
    });
    geocoder.on("result", (e)=>{
      this.data = {};
      this.data.endereco = e.result.text;
      this.data.coo = e.result.geometry;
      e.result.context.map( (i)=>{
        if((i.id.split('.').shift()) === 'neighborhood'){
          this.data.bairrro = i.text
        }
        if((i.id.split('.').shift()) === 'place'){
          this.data.cidade = i.text
        }
        
        console.log(i.text)
      } )
      console.log(e)
    })

  }
  setAddress(data){
    this.form.form.patchValue({
      address: data.address,
      neighborhood: data.neighborhood,
      other: data.city
    })
  }
}
