import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Modulo de componentes
import { ComponentsModule } from '../components/components.module';

import { BootstrapModule } from '../bootstrap.module';

import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { Ocorre01Component } from './ocorre01/ocorre01.component';
import { Ocorre02Component } from './ocorre02/ocorre02.component';
import { Ocorre03Component } from './ocorre03/ocorre03.component';
import { CczComponent } from './ccz/ccz.component';
import { AcoesCczComponent } from './ccz/acoes/acoes.component';



@NgModule({
  declarations: [HomeComponent, ApresentationComponent, Ocorre01Component, Ocorre02Component, Ocorre03Component, CczComponent, AcoesCczComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    PagesRoutingModule,
    BootstrapModule,
    FormsModule
  ],
  exports: [ApresentationComponent, Ocorre01Component, Ocorre02Component, Ocorre03Component, CczComponent]
})
export class PagesModule { }
