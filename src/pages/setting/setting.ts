import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { Events } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,public gv: GlobalVarProvider,public storage: Storage) {
  }

  title:   string="設定";
  id:string = "0214";
  name:string = "朱東旭";
  isPush = true;
  version = "94.87.m0354";

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logout(){
      this.storage.ready().then(() => {
        this.storage.remove('token').then(()=>{
          this.gv.TOKEN = "";
          window.location.reload();
        });
        // this.gv.TOKEN = "";
      });
      // window.location.reload();
  }
}
