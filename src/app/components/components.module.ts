import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes bootstrap
import { BootstrapModule } from '../bootstrap.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { DatePickerComponent } from './form/date-picker/date-picker.component';
import { TipographyComponent } from './tipography/tipography.component';
import { IconsComponent } from './icons/icons.component';
import { ColorsComponent } from './colors/colors.component';
import { BrandComponent } from './brand/brand.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonComponent } from './buttons/button/button.component';
import { CardComponent } from './card/card.component';
import { SelectComponent } from './form/select/select.component';
import { NotificationComponent } from './notification/notification.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LogFormsComponent } from './log-forms/log-forms.component';
import { LoginFormComponent } from './log-forms/login-form/login-form.component';
import { RegisterFormComponent } from './log-forms/register-form/register-form.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuCardComponent } from './side-menu/side-menu-card/side-menu-card.component';
import { HeaderInicialComponent } from './header-inicial/header-inicial.component';
import { CardDesaComponent } from './card-desa/card-desa.component';
import { CarouselMultilistComponent } from './carousel-multilist/carousel-multilist.component';
import { MapComponent } from './map/map.component';
import { CczFormComponent } from './log-forms/ccz-form/ccz-form.component';

@NgModule({
  declarations: [ComponentsComponent, ButtonComponent, HeaderComponent, FormComponent, DatePickerComponent, TipographyComponent, IconsComponent, ColorsComponent, BrandComponent, ButtonsComponent, CardComponent, SelectComponent, NotificationComponent, CarouselComponent, DialogModalComponent, GalleryComponent, LogFormsComponent, LoginFormComponent, RegisterFormComponent, SideMenuComponent, SideMenuCardComponent, HeaderInicialComponent, CardDesaComponent, CarouselMultilistComponent, MapComponent, CczFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsRoutingModule,
    BootstrapModule,
    CarouselModule,
    HttpClientModule
  ],
  exports: [
    ComponentsComponent,
    HeaderComponent,
    CardComponent,
    SideMenuComponent,
    CarouselComponent,
    HeaderInicialComponent,
    CardDesaComponent,
    CarouselMultilistComponent,
    ButtonsComponent,
    ButtonComponent,
    SelectComponent,
    MapComponent
  ]
})
export class ComponentsModule { }
