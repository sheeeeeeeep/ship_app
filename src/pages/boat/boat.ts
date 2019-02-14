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
  public list = [];
  public orderby = ["請假中(無代班)", "掛牌中", "工作中"];


  ionViewWillEnter(){
    this.backend.getOrder()
        .subscribe(data => {
          this.orders = data;
          for(var i=0; i<this.orders.length; i++){
            this.orders[i]['date'] = this.orders[i]['created'].split(" ", 2)[0];
            this.orders[i]['time'] = this.orders[i]['created'].split(" ", 2)[1];
          }
    });


    this.backend.getStatus()
        .subscribe(data =>{
          this.statuses = data;
          for(var j=0; j<this.statuses.length; j++){
            if(this.statuses[j]['pilot_status']=='掛牌中'){
              this.statuses[j]['break_time']=(this.statuses[j]['break_start'].split("T",2)[1].substring(0,2)).concat("-",
                                              this.statuses[j]['break_end'].split("T",2)[1].substring(0,2));
            }
          }
      });

    }

    doRefresh(refresher) {
      this.backend.getOrder()
          .subscribe(data => {
            this.orders = data;
            for(var i=0; i<this.orders.length; i++){
              this.orders[i]['date'] = this.orders[i]['created'].split(" ", 2)[0];
              this.orders[i]['time'] = this.orders[i]['created'].split(" ", 2)[1];
            }
      });


      this.backend.getStatus()
          .subscribe(data =>{
            this.statuses = data;
            for(var j=0; j<this.statuses.length; j++){
              if(this.statuses[j]['pilot_status']=='掛牌中'){
                this.statuses[j]['break_time']=(this.statuses[j]['break_start'].split("T",2)[1].substring(0,2)).concat("-",
                                                this.statuses[j]['break_end'].split("T",2)[1].substring(0,2));
              }
            }
        });

        setTimeout(() => {
          refresher.complete();
        }, 1500);

    }


  }
