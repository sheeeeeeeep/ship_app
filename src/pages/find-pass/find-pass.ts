import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { AboutPage } from '../about/about';
// import { SmsPage } from '../sms/sms';
import { BackendProvider } from '../../providers/backend/backend';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public backend:BackendProvider) {
    events.publish('hideHeader', {isHidden: true});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPassPage');
  }

  phone: string;
  isWrong: boolean = false;
  inputBox: string = "box";

  focus(){
    this.inputBox = "boxFocus";
  }

  blur(){
    this.inputBox = "box";
  }

  sendPhone(){
    this.isWrong = false;
    this.backend.sendPhone(this.phone)
      .subscribe(data => {
        this.navCtrl.push(AboutPage);

      }, error =>{
        console.log(error);
        this.isWrong = true;
      });

  }

  backLogin(){
    this.navCtrl.pop();
  }

}
