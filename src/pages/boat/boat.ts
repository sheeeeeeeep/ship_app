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
        .subscribe(data =>{
          this.statuses = data;
          for (var _i = 0; _i < this.statuses.length; _i++){
            console.log(this.statuses[_i].STS);
              if (this.statuses[_i].SP_STS == "I"){
                this.statuses[_i].SP_ID = this.statuses[_i].SP_INPORT + "->" + this.statuses[_i].SP_PORTPLACE;
              }
              if (this.statuses[_i].SP_STS == "O"){
                this.statuses[_i].SP_ID = this.statuses[_i].SP_PORTPLACE + "->" + this.statuses[_i].SP_INPORT;
              }
              if (this.statuses[_i].SP_STS == "T"){
                this.statuses[_i].SP_ID = this.statuses[_i].SP_PORTFROM + "->" + this.statuses[_i].SP_PORTPLACE;
              }
              console.log(this.statuses[_i].SP_ID);
        }
      });
    }
  }
