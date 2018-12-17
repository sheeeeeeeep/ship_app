import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../Account';
import { TabsPage } from '../tabs/tabs';
import { AccountProvider } from '../../providers/account/account';
import { HttpClientModule } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { BackendProvider } from '../../providers/backend/backend';
import { FindPassPage } from '../find-pass/find-pass'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController, public accountProvider: AccountProvider, public events: Events, private http: HttpClient, public gv: GlobalVarProvider, public  backend:BackendProvider) {
      events.publish('hideHeader', {isHidden: true});
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


  /*goHome() {
    this.accountProvider.getAccount(this.username)
      .subscribe(data => {
        this.isWrongUser = false;
        this.isWrongPass = false;

        try{
            this.realPassword=data[0].password;
            if(this.password == this.realPassword){
              this.navCtrl.push(TabsPage);
            }else{
              this.isWrongPass = true;
            }
        }catch(err){
          this.isWrongUser = true;
          console.log(err)
        }
      });

  }*/

  goHome(){
// let url2 = "http://localhost:8100/api/api-token-auth/"
    this.backend.getToken(this.username, this.password)
      .subscribe(data => {
        this.gv.TOKEN = data['access'];
        //console.log(data.refresh);
        console.log(this.gv.TOKEN);
        this.navCtrl.push(TabsPage);

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
