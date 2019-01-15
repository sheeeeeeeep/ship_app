import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SmsPage } from '../sms/sms';

/**
 * Generated class for the FindPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-pass',
  templateUrl: 'find-pass.html',
})
export class FindPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    events.publish('hideHeader', {isHidden: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPassPage');
  }

  phone: string;

  sendPhone(){
    this.navCtrl.push(SmsPage);
  }

  backLogin(){
    this.navCtrl.pop();
  }

}
