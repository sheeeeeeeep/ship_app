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
  inputBox: string = "box";
  inputBox2: string = "box";

  goHome(){
    this.isWrongUser = false;
    this.isWrongPass = false;

    this.backend.getAuth(this.username, this.password)
      .subscribe(data => {
        if(data['first_name']){
          this.gv.TOKEN = data['token'];
          this.gv.FNAME = data['first_name'];
          this.gv.LNAME = data['last_name'];
          this.gv.UID = data['pilot_id'];

          this.storage.ready().then(() => {
            this.storage.set('token', data['token']);
            this.storage.set('first_name', data['first_name']);
            this.storage.set('last_name', data['last_name']);
            this.storage.set('id', data['pilot_id']);
            this.storage.set('push', true);
            this.fcm.subscribeToTopic(String(data['pilot_id']));
            this.navCtrl.push(TabsPage);
          });

        }else{
          this.isWrongUser = true;
        }

      }, error => {
        console.log(error);
        this.isWrongPass = true;
      });
  }

  gofindPass(){
    this.navCtrl.push(FindPassPage);
  }

  focus(){
    this.inputBox = "boxFocus";
  }

  blur(){
    this.inputBox = "box";
  }

  focus2(){
    this.inputBox2 = "boxFocus";
  }

  blur2(){
    this.inputBox2 = "box";
  }
}
