import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../Account';
import { TabsPage } from '../tabs/tabs';
import { AccountProvider } from '../../providers/account/account';
// import { HttpClientModule } from '@angular/common/http';
import { Events } from 'ionic-angular';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

  constructor(public navCtrl: NavController, public accountProvider: AccountProvider, public events: Events, public gv: GlobalVarProvider, public backend:BackendProvider,public storage: Storage,public fcm: FcmProvider) {
      events.publish('hideHeader', {isHidden: true});
      // storage.get('token').then((tok) => {
      //   console.log(tok);
      //   if (tok){
      //     this.gv.TOKEN = tok;
      //     this.navCtrl.push(TabsPage);
      //   }
      // });
  }
  ionViewWillLeave(){
    this.events.publish('hideHeader', {isHidden: false});
  }

  username: string;
  password: string;
  realPassword: string;
  account: Account;
  isWrongUser: boolean = false;
  isWrongPass: boolean = false;


  goHome(){
// let url2 = "http://localhost:8100/api/api-token-auth/"
    this.backend.getToken(this.username, this.password)
      .subscribe(data => {
        this.gv.TOKEN = data['access'];
        this.backend.getUser(this.username).subscribe(data2 =>{
          this.gv.NAME = "朱東旭";
          this.gv.UID = data2['user_id'];
          this.storage.ready().then(() => {
            this.storage.set('token', data['access']);
            this.storage.set('name', "朱東旭");
            this.storage.set('id', data2['user_id']);
            this.storage.set('push', true);
            this.fcm.subscribeToTopic(String(data2['user_id']));
            this.navCtrl.push(TabsPage);
          });

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
