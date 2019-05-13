import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
import { MapComponent } from '../components/map/map.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, 
   children: [
      {path: 'info/:id', component: CardComponent},
      {path: '', component: MapComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
