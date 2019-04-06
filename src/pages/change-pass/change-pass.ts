import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

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
  inputBox: string = "box";
  inputBox2: string = "box";
  disable: boolean = false;

  sendPass(){
    this.disable = true;
    if(this.password != this.passB){
      this.isWrongEnter = true;
      this.disable = false;
    }else{
      this.backend.changePass(this.password)
        .subscribe(data => {
          this.navCtrl.pop();

        }, error =>{
          console.log(error);
          this.isWrongEnter = true;
          this.disable = false;
        });

    }
  }

  focus(){
    this.isWrongEnter = false;
    this.inputBox = "boxFocus";
  }

  blur(){
    this.isWrongEnter = false;
    this.inputBox = "box";
  }

  focus2(){
    this.isWrongEnter = false;
    this.inputBox2 = "boxFocus";
  }

  blur2(){
    this.isWrongEnter = false;
    this.inputBox2 = "box";
  }




}
