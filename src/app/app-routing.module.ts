import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogFormsComponent } from './components/log-forms/log-forms.component';
import { LoginFormComponent } from './components/log-forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/log-forms/register-form/register-form.component';
import { ComponentsComponent } from './components/components.component';

import { HomeComponent } from './pages/home/home.component';
import { ApresentationComponent } from './pages/apresentation/apresentation.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OrgaosComponent } from './components/orgaos/orgaos.component';
import { LeisComponent } from './components/leis/leis.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { FaqComponent } from './components/faq/faq.component';
import { AcoesComponent } from './components/acoes/acoes.component';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},

  {path: 'user', component: LogFormsComponent, children: [
    {path: 'login', component: LoginFormComponent},
    {path: 'cad', component: RegisterFormComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
  ] },

  {path: 'orgaos', component: OrgaosComponent},
  {path: 'leis', component: LeisComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'acoes', component: AcoesComponent},
  {path: 'faq', component: FaqComponent},
  {path: '', component: ApresentationComponent, 
  children: [{path: 'inicio', component: InicioComponent}]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
