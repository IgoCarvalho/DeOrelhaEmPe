import { Component, OnInit } from '@angular/core';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ccz',
  templateUrl: './ccz.component.html',
  styleUrls: ['./ccz.component.scss']
})
export class CczComponent implements OnInit {

  constructor(
    private occDataService: OccurrenceDataService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.occDataService.setCzz()
  }

}
