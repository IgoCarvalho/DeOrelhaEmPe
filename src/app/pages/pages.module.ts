import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Modulo de componentes
import { ComponentsModule } from '../components/components.module';


import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
