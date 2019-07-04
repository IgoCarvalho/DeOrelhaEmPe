import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Componentes Bootstrap -- Ngx-bootstrap
import {
  CarouselModule,
  BsDatepickerModule,
  ModalModule,
  BsDropdownModule,
  TabsModule,
  TooltipModule,
  AccordionModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot()
  ],
  exports: [
    CarouselModule,
    BsDatepickerModule,
    ModalModule,
    BsDropdownModule,
    TabsModule,
    TooltipModule,
    AccordionModule
  ]
})
export class BootstrapModule { }
