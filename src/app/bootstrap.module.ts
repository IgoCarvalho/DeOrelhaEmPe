import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Componentes Bootstrap -- Ngx-bootstrap
import {
  CarouselModule,
  BsDatepickerModule,
  ModalModule,
  BsDropdownModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    CarouselModule,
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule
  ]
})
export class BootstrapModule { }
