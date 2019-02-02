import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public  backend:BackendProvider) {
  }

  title:string = "統計資訊";
  subPage: string = "time";
  date_person = "new";
  date_group = "neww";
  date1 = "2018/08/18";
  date2 = "2018/08/19";

  join:boolean = true;
  accumulateWorkTime_h:number = 1;
  accumulateWorkTime_m:number = 24;

  new_person_day_h:number = 4;
  new_person_day_m:number = 25;
  new_person_night_h:number = 3;
  new_person_night_m:number = 23;
  new_group_day_h:number = 1;
  new_group_day_m:number = 8;
  new_group_night_h:number = 2;
  new_group_night_m:number = 36;

  old_person_day_h:number = 1;
  old_person_day_m:number = 17;
  old_person_night_h:number = 3;
  old_person_night_m:number = 25;
  old_group_day_h:number = 5;
  old_group_day_m:number = 59;
  old_group_night_h:number = 3;
  old_group_night_m:number = 28;

  changes = [];

  ionViewWillEnter() {
    this.backend.getAppcal()
        .subscribe(data => {
          this.join = data['join_continuous'];
          this.accumulateWorkTime_h = Math.floor(data['accumulateWorkTime']/60);
          this.accumulateWorkTime_m = data['accumulateWorkTime']%60;
          this.new_person_day_h = Math.floor(data['thisDaytimeAve']/60);
          this.new_person_day_m = data['thisDaytimeAve']%60;
          this.new_person_night_h = Math.floor(data['thisNightAve']/60);
          this.new_person_night_m = data['thisNightAve']%60;
          this.new_group_day_h = Math.floor(data['thisDaytimeContAve']/60);
          this.new_group_day_m = data['thisDaytimeContAve']%60;
          this.new_group_night_h = Math.floor(data['thisNightContAve']/60);
          this.new_group_night_m = data['thisNightContAve']%60;

          this.old_person_day_h = Math.floor(data['lastDaytimeAve']/60);
          this.old_person_day_m = data['lastDaytimeAve']%60;
          this.old_person_night_h = Math.floor(data['lastNightAve']/60);
          this.old_person_night_m = data['lastNightAve']%60;
          this.old_group_day_h = Math.floor(data['lastDaytimeContAve']/60);
          this.old_group_day_m = data['lastDaytimeContAve']%60;
          this.old_group_night_h = Math.floor(data['lastNightContAve']/60);
          this.old_group_night_m = data['lastNightContAve']%60;
    });
    this.backend.getChanges().subscribe(data => this.changes = data);

  }

}
