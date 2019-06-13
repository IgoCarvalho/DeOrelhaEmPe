import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
import { Ocorre01Component } from './ocorre01/ocorre01.component';
import { Ocorre02Component } from './ocorre02/ocorre02.component';
import { Ocorre03Component } from './ocorre03/ocorre03.component';
import { MapComponent } from '../components/map/map.component';
import { CczComponent } from './ccz/ccz.component';
import { CczComplaintsComponent } from '../components/ccz-complaints/ccz-complaints.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, 
   children: [
      {path: 'info/:id', component: CardComponent},
      {path: '', component: MapComponent},
    ]},
    {path: '1', component: Ocorre01Component},
    {path: '2', component: Ocorre02Component},
    {path: '3', component: Ocorre03Component},
    {path: 'ccz', component: CczComponent, 
    children: [
      {path: '', component: CczComplaintsComponent},
      {path: 'info/:id', component: CardComponent},
      {path: 'map', component: MapComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
