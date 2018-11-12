import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PusherServiceProvider } from '../../providers/pusher-service/pusher-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this will represent a new post by a user
  post: any = {};
  // this will represent your default pusher presence channel
  presence_channel: any;
  // this will represent the username of the current user
  current_user;
  // this will online a list of users online
  users_online = {
  };
  // list of default posts
  post_list = [
    {
      'username': 'og',
      'content': 'Making money was the plan oooo'
    },
    {
      'username': 'daddywon',
      'content': 'You can catch me on the express'
    }
  ];

  constructor(public navCtrl: NavController, private pusher: PusherServiceProvider, private http: HttpClient, public alertCtrl: AlertController) {
    let self = this
    this.presence_channel = this.pusher.init();
    // update the list of users online
    this.presence_channel.bind('pusher:subscription_succeeded', function (members) {
      console.log(members);
      self.users_online = members.members;
      self.current_user = members.myID;
    })

    this.presence_channel.bind('new-post', function (body) {
      self.post_list.unshift(body);
    })
  }

  isOnline(username: string) {
    // this function is responsible for determining if a user is online or not
    if (username in this.users_online) {
      return 'online'
    } else {
      return 'offline'
    }
  }

  submitPost() {
    let self = this;
    // make a post request to the server
    let body = {
      'username': this.current_user,
      'content': this.post.content
    }

    const alert = this.alertCtrl.create({
      title: 'Post Shared!',
      subTitle: `Users online to see your post: ${self.get_users_online()}`,
      buttons: ['OK']
    });

    // submit post to the backend server to trigger pusher event
    this.http.post('https://b3b88c11.ngrok.io/create-post', body).subscribe(() => {
      alert.present();
    });
  }

  get_users_online() {
    return Object.keys(this.users_online).length - 1;
  }
}
