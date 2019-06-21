import { Component, OnInit } from '@angular/core';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-ccz-complaints',
  templateUrl: './ccz-complaints.component.html',
  styleUrls: ['./ccz-complaints.component.scss']
})
export class CczComplaintsComponent implements OnInit {

  data;
  
  constructor(
    private occDataService: OccurrenceDataService,
    private not: NotificationService
  ) { }

  ngOnInit() {
    this.data = this.occDataService.currentOccurrence
    console.log(this.data)
    this.not.new().subscribe((res)=>{
      console.log('NOVA', res)
      this.occDataService.addData(res)
    })
  }

}
