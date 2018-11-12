import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';

@Injectable()
export class PusherServiceProvider {
  presenceChannel;

  constructor(public http: HttpClient) {
    let pusher = new Pusher('9effdb6e1245bda33b17', {
      authEndpoint: 'https://b3b88c11.ngrok.io/pusher/auth',
      cluster: 'mt1'
    });

    this.presenceChannel = pusher.subscribe('presence-channel');
  }

  public init() {
    return this.presenceChannel;
  }
}
