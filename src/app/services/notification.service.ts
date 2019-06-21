import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private socket: Socket) { }

  get(){
    return this.socket.fromEvent('coment')
  }

  post(){
    this.socket.emit('igo', {name: 'wsvsd'})
  }

  status(){
    return this.socket.fromEvent('updateStatus')
  }

  new(){
    return this.socket.fromEvent('newOccurrence')
  }
}
