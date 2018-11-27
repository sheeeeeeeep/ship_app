import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'Firebase';


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
  shit: string = "";
  public mynotif = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.shit = navParams.get('param1');
  }

  title: string="通知";

  ionViewDidLoad() {
      const notifRef: firebase.database.Reference = firebase.database().ref(`/notif/notif/`);
      
      notifRef.on('child_changed', notifSnapshot => {
        this.mynotif = notifSnapshot.val();
        alert(JSON.stringify(notifSnapshot.val()));
      });
  }

}

