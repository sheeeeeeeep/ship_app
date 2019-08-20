import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
// import { SmsPage } from '../sms/sms';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-find-pass',
  templateUrl: 'find-pass.html',
})
export class FindPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public backend:BackendProvider) {
    events.publish('hideHeader', {isHidden: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPassPage');
  }

  phone: string;
  isWrong: boolean = false;
  inputBox: string = "box";
  disable: boolean = false;

  focus(){
    this.isWrong = false;
    this.inputBox = "boxFocus";
  }

  blur(){
    this.isWrong = false;
    this.inputBox = "box";
  }

  sendPhone(){
    this.disable = true;
    this.isWrong = false;
    this.backend.sendPhone(this.phone)
      .subscribe(data => {
        this.navCtrl.push(AboutPage);

      }, error =>{
        console.log(error);
        this.isWrong = true;
        this.disable = false;
      });
  }

  backLogin(){
    this.disable = true;
    this.navCtrl.pop();
  }
}
