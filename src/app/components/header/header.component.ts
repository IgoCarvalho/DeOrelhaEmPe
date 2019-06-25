import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { OccurrenceDataService } from 'src/app/services/occurrence-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notifications: any[] = [];
  count = 0
  fixo = false;
  
  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private occDataService: OccurrenceDataService,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.notification.get().subscribe(res=>{
      console.log(res)
    })
    this.notification.post()
    this.notification.status().subscribe((res:any)=>{
      console.log('user', res) 
      let user = this.authService.getUser()
      console.log(user)
      this.count = 0
      if(res.user == user._id){
        let not = {
          text: 'Veja como esta o andamento de sua ocorrência',
          title: res.title,
          id: res._id
        }
        this.notifications.unshift(not)
        this.count = this.notifications.length
        this.toaster.success('Você tem novas notificações')
      }
      this.occDataService.updateData(res)
    })
  }

  logOut(){
    this.authService.logout()
  }

}
