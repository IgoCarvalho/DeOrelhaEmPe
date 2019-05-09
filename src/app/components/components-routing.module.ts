import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './log-forms/login-form/login-form.component';
import { LogFormsComponent } from './log-forms/log-forms.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
