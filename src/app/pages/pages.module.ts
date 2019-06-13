import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


// Modulo de componentes
import { ComponentsModule } from '../components/components.module';

import { BootstrapModule } from '../bootstrap.module';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { Ocorre01Component } from './ocorre01/ocorre01.component';
import { Ocorre02Component } from './ocorre02/ocorre02.component';
import { Ocorre03Component } from './ocorre03/ocorre03.component';



@NgModule({
  declarations: [HomeComponent, ApresentationComponent, Ocorre01Component, Ocorre02Component, Ocorre03Component],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PagesRoutingModule,
    BootstrapModule
  ],
  exports: [ApresentationComponent, Ocorre01Component, Ocorre02Component, Ocorre03Component]
})
export class PagesModule { }
