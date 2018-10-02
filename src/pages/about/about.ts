import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Account } from '../../Account';
import { TabsPage } from '../tabs/tabs';
import { AccountProvider } from '../../providers/account/account';
import { HttpClientModule } from '@angular/common/http';
import { Events } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public accountProvider: AccountProvider, public events: Events ) {
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


  goHome() {
    this.accountProvider.getAccount(this.username)
      .subscribe(data => {
        this.isWrongUser = false;
        this.isWrongPass = false;
        if(data.length>0){
            this.realPassword=data[0].password;
            if(this.password == this.realPassword){
              this.navCtrl.push(TabsPage);
            }else{
              this.isWrongPass = true;
            }
        }else{
          this.isWrongUser = true;
        }
      });

  }


}
