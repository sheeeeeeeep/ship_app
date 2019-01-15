import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BackendProvider } from '../../providers/backend/backend';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the ChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-pass',
  templateUrl: 'change-pass.html',
})
export class ChangePassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public backend:BackendProvider) {
  }


  title: string = "更換密碼";


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePassPage');
  }

  password: string;
  passB: string;
  isWrongEnter: boolean = false;

  sendPass(){
    if(this.password != this.passB){
      this.isWrongEnter = true;
    }else{
      this.backend.changePass(this.password)
        .subscribe(data => {
          this.navCtrl.pop();

        }, error =>{
          console.log(error);
          this.isWrongEnter = true;
        });

    }
  }




}
