import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BoatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boat',
  templateUrl: 'boat.html',
})
export class BoatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  title:string = "當班資訊";
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BoatPage');
  }

}
