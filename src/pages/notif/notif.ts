import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FcmProvider } from '../../providers/fcm/fcm';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html'
})


export class NotifPage {
  shit = '';
  notifs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public fcm: FcmProvider, public backend: BackendProvider) {

  }
  tt = [];
  title: string="通知";

  ionViewWillEnter(){
    this.backend.getNotif()
        .subscribe(data => this.notifs = data);
  }
  
  clear(){
    this.storage.clear();
  }

  goNews(){
    this.navCtrl.parent.select(2);
  }
}
