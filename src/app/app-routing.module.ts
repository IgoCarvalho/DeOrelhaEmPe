import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogFormsComponent } from './components/log-forms/log-forms.component';
import { LoginFormComponent } from './components/log-forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/log-forms/register-form/register-form.component';
import { ComponentsComponent } from './components/components.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // {path: 'home', component: HomeComponent},

  {path: 'user', component: LogFormsComponent, children: [
    {path: 'login', component: LoginFormComponent},
    {path: 'cad', component: RegisterFormComponent},
    {path: '', component: LoginFormComponent}
  ] },


  {path: '', redirectTo: "home", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
