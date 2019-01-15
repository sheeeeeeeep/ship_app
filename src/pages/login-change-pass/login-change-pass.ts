import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BackendProvider } from '../../providers/backend/backend';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginChangePassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-change-pass',
  templateUrl: 'login-change-pass.html',
})
export class LoginChangePassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public backend:BackendProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginChangePassPage');
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
          this.navCtrl.push(TabsPage);

        }, error =>{
          console.log(error);
          this.isWrongEnter = true;
          this.navCtrl.push(TabsPage);

         });


    }
  }

  toHome(){
      this.navCtrl.push(TabsPage);
  }



}
