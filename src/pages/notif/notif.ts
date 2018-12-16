import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
import { Storage } from '@ionic/storage';
import { FcmProvider } from '../../providers/fcm/fcm';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
// import { Observable } from 'rxjs/Observable';

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
  mynotif = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public fcm: FcmProvider,private httpClient: HttpClient) {
    var headers = new Headers();
    this.headers.append('Content-Type', 'application/json' );
    this.headers.append('Authorization', 'Bearer '+this.token);
    let options = new RequestOptions({ headers: this.headers });
  }
  tt = [];
  title: string="通知";
  // time = "2018/08/09 14:20";
  // ship = "STOLT BASUTO ";
  // head = "被交換給 0216朱吉諾";
  // detail = "出港 / STOLT BASUTO / 1058 -> S1 / 16442";

  token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxMTAwNTY4NDYyMywianRpIjoiMmQ0ZjhlNDQxMDJlNDU4NDg4YjNhODEyNjNjNTYxNzUiLCJ1c2VyX2lkIjoxNX0.vWKnpO82mhGHndjP3sLHO7GwqmLHUOOCAY3G3P1OzBQ';
  headers:any;

  options: any;
  ionViewDidEnter(){
    // this.storage.get('message').then((msg) => {
    //   console.log(msg);
    //   this.tt = msg;
    //
    // });
    this.mynotif = this.httpClient.get('http://fleet-geode-218517.appspot.com/api/message',this.options);
    console.log(this.mynotif);

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
