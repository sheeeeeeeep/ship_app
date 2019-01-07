import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Events } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { FcmProvider } from '../../providers/fcm/fcm';
import { BackendProvider } from '../../providers/backend/backend';
import { FindPassPage } from '../find-pass/find-pass';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController, public events: Events, public gv: GlobalVarProvider, public backend:BackendProvider,public storage: Storage,public fcm: FcmProvider) {
      events.publish('hideHeader', {isHidden: true});
  }
  ionViewWillLeave(){
    this.events.publish('hideHeader', {isHidden: false});
  }

  username: string;
  password: string;
  isWrongUser: boolean = false;
  isWrongPass: boolean = false;

  goHome(){
    this.backend.getAuth(this.username, this.password)
      .subscribe(data => {
        this.gv.TOKEN = data['token'];
        this.gv.NAME = data['name'];
        this.gv.UID = data['pilot_id'];

        this.storage.ready().then(() => {
          this.storage.set('token', data['token']);
          this.storage.set('name', data['name']);
          this.storage.set('id', data['pilot_id']);
          this.storage.set('push', true);
          this.fcm.subscribeToTopic(String(data['pilot_id']));
          this.navCtrl.push(TabsPage);
        });

      }, error => {
        console.log(error);
        this.isWrongUser = true;
        this.isWrongPass = true;
      });
  }

  gofindPass(){
    this.navCtrl.push(FindPassPage);
  }
}
