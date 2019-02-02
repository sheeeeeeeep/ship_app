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
  tt = [{
  	'time':'2018/08/12 14:20',
  	'ship':'STOLT BASUTO ',
  	'head':'被交換給 0216朱吉諾',
  	'detail':'出港 / STOLT BASUTO / 1058 -> S1 / 16442'
  },{
  	'time':'2018/08/10 10:25',
  	'ship':'GINO M0354 ',
  	'head':'被交換給 0878朱志遠',
  	'detail':'入港 / GINO M0354 / S2 -> 87 / 12345'
  }];
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
