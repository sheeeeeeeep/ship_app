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
  date1: string;
  date2: string ;

  join:boolean = true;
  accumulateWorkTime_h:number;
  accumulateWorkTime_m:number;

  new_person_day_h:number;
  new_person_day_m:number;
  new_person_night_h:number;
  new_person_night_m:number;
  new_group_day_h:number;
  new_group_day_m:number;
  new_group_night_h:number;
  new_group_night_m:number;

  old_person_day_h:number;
  old_person_day_m:number;
  old_person_night_h:number;
  old_person_night_m:number;
  old_group_day_h:number;
  old_group_day_m:number;
  old_group_night_h:number;
  old_group_night_m:number;

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

    this.backend.getChanges()
        .subscribe(data => {
          this.changes = data;
          for(var i=0; i<this.changes.length; i++){
            this.changes[i]['date'] = this.changes[i]['occur_time'].split(" ", 2)[0];
            this.changes[i]['time'] = this.changes[i]['occur_time'].split(" ", 2)[1];
          }
          this.date1 = this.changes[0]['date'];

          for(var i2=1; i2<this.changes.length; i2++){
            if(this.changes[i2]['date']!=this.date1){
              this.date2=this.changes[i2]['date'];
              break;
            }
          }

          for(var i3=0; i3<this.changes.length; i3++){
            if(this.changes[i3]['date']==this.date1){
              this.changes[i3]['today']=true;
            }else{
              this.changes[i3]['today']=false;
            }
          }
    });

  }



  doRefresh(refresher) {
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

    this.backend.getChanges()
        .subscribe(data => {
          this.changes = data;
          for(var i=0; i<this.changes.length; i++){
            this.changes[i]['date'] = this.changes[i]['occur_time'].split(" ", 2)[0];
            this.changes[i]['time'] = this.changes[i]['occur_time'].split(" ", 2)[1];
          }
          this.date1 = this.changes[0]['date'];

          for(var i2=1; i2<this.changes.length; i2++){
            if(this.changes[i2]['date']!=this.date1){
              this.date2=this.changes[i2]['date'];
              break;
            }
          }

          for(var i3=0; i3<this.changes.length; i3++){
            if(this.changes[i3]['date']==this.date1){
              this.changes[i3]['today']=true;
            }else{
              this.changes[i3]['today']=false;
            }
          }
    });

      setTimeout(() => {
        refresher.complete();
      }, 1500);

  }


}
