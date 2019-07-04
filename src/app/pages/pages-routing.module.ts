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
import { AuthGuard } from '../guards/auth.guard';
import { AdmGuardService } from '../guards/adm-guard.service';
import { AcoesCczComponent } from './ccz/acoes/acoes.component';
import { OrgaosComponent } from '../components/orgaos/orgaos.component';
import { LeisComponent } from '../components/leis/leis.component';
import { AcoesComponent } from '../components/acoes/acoes.component';
import { FaqComponent } from '../components/faq/faq.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, 
   children: [
      {path: 'info/:id', component: CardComponent},
      {path: '', component: MapComponent},
    ]},

    {path: 'orgaos' ,component: OrgaosComponent},
    {path: 'mapa' ,component: MapComponent},
    {path: 'leis' ,component: LeisComponent},
    {path: 'acoes' ,component: AcoesComponent},
    {path: 'duvidas' ,component: FaqComponent},
    {path: 'ocorrencia',canActivate: [AuthGuard] , component: Ocorre02Component},
    {path: '3',canActivate: [AuthGuard] , component: Ocorre03Component},
    {path: 'ccz',canActivate: [AuthGuard, AdmGuardService] , component: CczComponent, 
    children: [
      {path: 'denuncias', component: CczComplaintsComponent},
      {path: 'info/:id', component: CardComponent},
      {path: 'acoes', component: AcoesCczComponent},
      {path: 'map', component: MapComponent},
      {path: '', redirectTo: 'denuncias', pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
