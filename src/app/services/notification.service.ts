import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) { }

  get(){
    return this.socket.fromEvent('newComent')
  }

  post(){
    this.socket.emit('igo', JSON.stringify({name: 'wsvsd'}))
  }

  status(){
    return this.socket.fromEvent('updateStatus')
  }

  newOcc(){
    return this.socket.fromEvent('newOccurrence')
  }
}
