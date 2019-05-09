import { Component, OnInit } from '@angular/core';

import { ptBrLocale, defineLocale } from 'ngx-bootstrap/chronos';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
 
  constructor(
    private localeService: BsLocaleService
  ) {
  }
  
  ngOnInit() {
    this.localeService.use('pt-br');
  }

}
