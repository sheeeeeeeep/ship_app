import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { FindPassPage } from '../find-pass/find-pass';
import { LoginChangePassPage } from '../login-change-pass/login-change-pass'
import { BackendProvider } from '../../providers/backend/backend';

/**
 * Generated class for the SmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public backend:BackendProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }

  sms: string;

  sendSms(){
    this.backend.smsVerify(this.sms)
      .subscribe(data => {
        this.navCtrl.push(LoginChangePassPage);

      }, error =>{
        console.log(error);
        this.isWrong = true;
        this.navCtrl.push(LoginChangePassPage);
      });

  }

  backFind(){
    this.navCtrl.pop();
  }



}
