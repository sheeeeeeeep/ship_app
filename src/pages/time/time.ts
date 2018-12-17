import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }




  title:string = "統計資訊";
  subPage: string = "time";
  public date_person = "new";
  public date_group = "new";
  date1 = "2018/08/18";
  date2 = "2018/08/19"


  ionViewDidLoad() {
    console.log('ionViewDidLoad TimePage');
  }

}