import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Storage } from '@ionic/storage';
import { FcmProvider } from '../../providers/fcm/fcm';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { INotif } from '../../Interface';
import { BackendProvider } from '../../providers/backend/backend';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the NotifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html'
})


export class NotifPage {
  shit = '';
  notifs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public fcm: FcmProvider,private httpClient: HttpClient, public backend: BackendProvider) {

  }
  tt = [];
  title: string="通知";
  // time = "2018/08/09 14:20";
  // ship = "STOLT BASUTO ";
  // head = "被交換給 0216朱吉諾";
  // detail = "出港 / STOLT BASUTO / 1058 -> S1 / 16442";

  ionViewWillEnter(){
    this.backend.getNotif()
        .subscribe(data => this.notifs = data);
    // this.storage.get('message').then((msg) => {
    //   console.log(msg);
    //   this.tt = msg;
    //
    // });
  }
  clear(){
    this.storage.clear();
  }

  subA(){
    this.fcm.unsubscribeFromTopic('B');
    this.fcm.subscribeToTopic('A');
  }
  subB(){
    this.fcm.unsubscribeFromTopic('A');
    this.fcm.subscribeToTopic('B');
  }
}
