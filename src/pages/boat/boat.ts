import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';
import { HttpClientModule } from '@angular/common/http';
import { StatusProvider } from '../../providers/status/status';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider, private statusProvider: StatusProvider) {




  }

  subPage: string = "order";



  title:string = "當班資訊";

/*  orders = [
    {
      "key":1,
      "pilot_id": "0014",
      "name": "朱東旭",
      "check_in_time": "2018-04-05T03:30:00Z"
    },
    {
      "key": 2,
      "pilot_id": "0015",
      "name": "朱吉諾",
      "check_in_time": "2018-04-05T04:52:00Z"
    }
  ];*/

  public orders = [];
  public statuses = [];

  ionViewWillEnter(){
    this.orderProvider.getOrder()
        .subscribe(data => this.orders = data);
    this.statusProvider.getStatus()
        .subscribe(data => this.statuses = data);

  }

  /*statuses = [
    {
      "pilot_id": "0014",
      "name": "朱東旭",
      "status": "請假(無代班)",
      "night_shift": 1,
      "ship_id": null
    },
    {
      "pilot_id": "0015",
      "name": "朱吉諾",
      "status": "工作中",
      "night_shift": 0,
      "ship_id": "出港 / STOLT BASUTO / 1058 -> S1 / 16442"
    }
  ];*/




}
