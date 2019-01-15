import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { FindPassPage } from '../find-pass/find-pass';
import { LoginChangePassPage } from '../login-change-pass/login-change-pass'

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }

  sms: string;

  sendSms(){
    this.navCtrl.push(LoginChangePassPage);
  }

  backFind(){
    this.navCtrl.pop();
  }



}
