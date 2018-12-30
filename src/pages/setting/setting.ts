import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AboutPage } from '../about/about';
import { Events } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { Storage } from '@ionic/storage';
import { FcmProvider } from '../../providers/fcm/fcm';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,public gv: GlobalVarProvider,public storage: Storage,public fcm: FcmProvider) {
    this.name = this.gv.NAME;
    this.id = String(this.gv.UID);
    storage.get('push').then((push) => {
      console.log(push);
      this.isPush = push;
    });
  }

  title: string="設定";
  id:string;
  name:string;
  isPush: boolean;
  version = "94.87.m0354";

  ionViewDidLoad() {
    // console.log('ionViewDidLoad SettingPage');
  }

  logout(){
      this.storage.ready().then(() => {
        this.fcm.unsubscribeFromTopic(String(this.gv.UID));
        this.storage.clear().then(()=>{
          this.gv.TOKEN = "";
          window.location.reload();
        });
      });
  }
  ifPush(){
    // console.log(this.isPush);
    this.storage.ready().then(() => {
      this.storage.set('push',this.isPush);
      if(this.isPush == true){
        this.fcm.subscribeToTopic(String(this.gv.UID));
      } else{
        this.fcm.unsubscribeFromTopic(String(this.gv.UID));
      }
    });

  }
}
