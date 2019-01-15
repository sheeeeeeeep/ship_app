import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-boat',
  templateUrl: 'boat.html',
})
export class BoatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public  backend:BackendProvider) {
  }

  subPage: string = "order";
  title:string = "當班資訊";

  public orders = [];
  public statuses = [];

  ionViewWillEnter(){
    this.backend.getOrder()
        .subscribe(data => this.orders = data);
    this.backend.getStatus()
        .subscribe(data => this.statuses = data);

  }
}
