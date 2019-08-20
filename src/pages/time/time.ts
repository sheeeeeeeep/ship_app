import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Scroll  } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';

@IonicPage()
@Component({
  selector: 'page-time',
  templateUrl: 'time.html',
})
export class TimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public  backend:BackendProvider) {
  }

  @ViewChild('scrollItem') scrollItem: Scroll;

  title:string = "統計資訊";
  subPage: string = "time";
  date_person = "zero";
  date_group = "zeroo";
  date1: string;
  date2: string ;

  zero_year: number;
  zero_month: number;
  refresherEnabled : boolean= true;
  xs: number[] = [0];
  values: string[] = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "night", "ten", "eleven"];
  values_g: string[] = ["zeroo", "onee", "twoo", "threee", "fourr", "fivee", "sixx", "sevenn", "eightt", "nightt", "tenn", "elevenn"];
  months: number[] = [0];
  years: number[] = [0];

  join:boolean = true;
  accumulateWorkTime_h:number;
  accumulateWorkTime_m:number;

  zero_person_day_h:number;
  zero_person_day_m:number;
  zero_person_night_h:number;
  zero_person_night_m:number;
  zero_group_day_h:number;
  zero_group_day_m:number;
  zero_group_night_h:number;
  zero_group_night_m:number;

  one_person_day_h:number;
  one_person_day_m:number;
  one_person_night_h:number;
  one_person_night_m:number;
  one_group_day_h:number;
  one_group_day_m:number;
  one_group_night_h:number;
  one_group_night_m:number;

  two_person_day_h:number;
  two_person_day_m:number;
  two_person_night_h:number;
  two_person_night_m:number;
  two_group_day_h:number;
  two_group_day_m:number;
  two_group_night_h:number;
  two_group_night_m:number;

  three_person_day_h:number;
  three_person_day_m:number;
  three_person_night_h:number;
  three_person_night_m:number;
  three_group_day_h:number;
  three_group_day_m:number;
  three_group_night_h:number;
  three_group_night_m:number;

  four_person_day_h:number;
  four_person_day_m:number;
  four_person_night_h:number;
  four_person_night_m:number;
  four_group_day_h:number;
  four_group_day_m:number;
  four_group_night_h:number;
  four_group_night_m:number;

  five_person_day_h:number;
  five_person_day_m:number;
  five_person_night_h:number;
  five_person_night_m:number;
  five_group_day_h:number;
  five_group_day_m:number;
  five_group_night_h:number;
  five_group_night_m:number;

  six_person_day_h:number;
  six_person_day_m:number;
  six_person_night_h:number;
  six_person_night_m:number;
  six_group_day_h:number;
  six_group_day_m:number;
  six_group_night_h:number;
  six_group_night_m:number;

  seven_person_day_h:number;
  seven_person_day_m:number;
  seven_person_night_h:number;
  seven_person_night_m:number;
  seven_group_day_h:number;
  seven_group_day_m:number;
  seven_group_night_h:number;
  seven_group_night_m:number;

  eight_person_day_h:number;
  eight_person_day_m:number;
  eight_person_night_h:number;
  eight_person_night_m:number;
  eight_group_day_h:number;
  eight_group_day_m:number;
  eight_group_night_h:number;
  eight_group_night_m:number;

  nine_person_day_h:number;
  nine_person_day_m:number;
  nine_person_night_h:number;
  nine_person_night_m:number;
  nine_group_day_h:number;
  nine_group_day_m:number;
  nine_group_night_h:number;
  nine_group_night_m:number;

  ten_person_day_h:number;
  ten_person_day_m:number;
  ten_person_night_h:number;
  ten_person_night_m:number;
  ten_group_day_h:number;
  ten_group_day_m:number;
  ten_group_night_h:number;
  ten_group_night_m:number;

  eleven_person_day_h:number;
  eleven_person_day_m:number;
  eleven_person_night_h:number;
  eleven_person_night_m:number;
  eleven_group_day_h:number;
  eleven_group_day_m:number;
  eleven_group_night_h:number;
  eleven_group_night_m:number;

  changes = [];

  ionViewWillEnter() {
    let now = new Date();
    this.zero_year = now.getFullYear();
    this.zero_month = now.getMonth() + 1;
    console.log(this.zero_month);
    var xss = 0;
    for(var j=0; j<12; j++){      
      this.xs[xss] = xss;
      xss = xss + 1;
      this.months[j] = this.zero_month-j;
      this.years[j] = this.zero_year;
      if(this.months[j]<=0){
        this.months[j] = this.months[j]+12;
        this.years[j] = this.years[j]-1;
      }
    }
    console.log(this.months);

    this.backend.getAppcal()
        .subscribe(data => {
          console.log(data)
          this.join = data[0]['join_continuous'];
          this.accumulateWorkTime_h = Math.floor(data[0]['accumulateWorkTime']/60);
          this.accumulateWorkTime_m = data[0]['accumulateWorkTime']%60;

          this.zero_person_day_h = Math.floor(data[0]['zeroDaytimeAve']/60);
          this.zero_person_day_m = data[0]['zeroDaytimeAve']%60;
          this.zero_person_night_h = Math.floor(data[0]['zeroNightAve']/60);
          this.zero_person_night_m = data[0]['zeroNightAve']%60;
          this.zero_group_day_h = Math.floor(data[0]['zeroDaytimeContAve']/60);
          this.zero_group_day_m = data[0]['zeroDaytimeContAve']%60;
          this.zero_group_night_h = Math.floor(data[0]['zeroNightContAve']/60);
          this.zero_group_night_m = data[0]['zeroNightContAve']%60;

          this.one_person_day_h = Math.floor(data[0]['oneDaytimeAve']/60);
          this.one_person_day_m = data[0]['oneDaytimeAve']%60;
          this.one_person_night_h = Math.floor(data[0]['oneNightAve']/60);
          this.one_person_night_m = data[0]['oneNightAve']%60;
          this.one_group_day_h = Math.floor(data[0]['oneDaytimeContAve']/60);
          this.one_group_day_m = data[0]['oneDaytimeContAve']%60;
          this.one_group_night_h = Math.floor(data[0]['oneNightContAve']/60);
          this.one_group_night_m = data[0]['oneNightContAve']%60;

          this.two_person_day_h = Math.floor(data[0]['twoDaytimeAve']/60);
          this.two_person_day_m = data[0]['twoDaytimeAve']%60;
          this.two_person_night_h = Math.floor(data[0]['twoNightAve']/60);
          this.two_person_night_m = data[0]['twoNightAve']%60;
          this.two_group_day_h = Math.floor(data[0]['twoDaytimeContAve']/60);
          this.two_group_day_m = data[0]['twoDaytimeContAve']%60;
          this.two_group_night_h = Math.floor(data[0]['twoNightContAve']/60);
          this.two_group_night_m = data[0]['twoNightContAve']%60;

          this.three_person_day_h = Math.floor(data[0]['threeDaytimeAve']/60);
          this.three_person_day_m = data[0]['threeDaytimeAve']%60;
          this.three_person_night_h = Math.floor(data[0]['threeNightAve']/60);
          this.three_person_night_m = data[0]['threeNightAve']%60;
          this.three_group_day_h = Math.floor(data[0]['threeDaytimeContAve']/60);
          this.three_group_day_m = data[0]['threeDaytimeContAve']%60;
          this.three_group_night_h = Math.floor(data[0]['threeNightContAve']/60);
          this.three_group_night_m = data[0]['threeNightContAve']%60;

          this.four_person_day_h = Math.floor(data[0]['fourDaytimeAve']/60);
          this.four_person_day_m = data[0]['fourDaytimeAve']%60;
          this.four_person_night_h = Math.floor(data[0]['fourNightAve']/60);
          this.four_person_night_m = data[0]['fourNightAve']%60;
          this.four_group_day_h = Math.floor(data[0]['fourDaytimeContAve']/60);
          this.four_group_day_m = data[0]['fourDaytimeContAve']%60;
          this.four_group_night_h = Math.floor(data[0]['fourNightContAve']/60);
          this.four_group_night_m = data[0]['fourNightContAve']%60;

          this.five_person_day_h = Math.floor(data[0]['fiveDaytimeAve']/60);
          this.five_person_day_m = data[0]['fiveDaytimeAve']%60;
          this.five_person_night_h = Math.floor(data[0]['fiveNightAve']/60);
          this.five_person_night_m = data[0]['fiveNightAve']%60;
          this.five_group_day_h = Math.floor(data[0]['fiveDaytimeContAve']/60);
          this.five_group_day_m = data[0]['fiveDaytimeContAve']%60;
          this.five_group_night_h = Math.floor(data[0]['fiveNightContAve']/60);
          this.five_group_night_m = data[0]['fiveNightContAve']%60;

          this.six_person_day_h = Math.floor(data[0]['sixDaytimeAve']/60);
          this.six_person_day_m = data[0]['sixDaytimeAve']%60;
          this.six_person_night_h = Math.floor(data[0]['sixNightAve']/60);
          this.six_person_night_m = data[0]['sixNightAve']%60;
          this.six_group_day_h = Math.floor(data[0]['sixDaytimeContAve']/60);
          this.six_group_day_m = data[0]['sixDaytimeContAve']%60;
          this.six_group_night_h = Math.floor(data[0]['sixNightContAve']/60);
          this.six_group_night_m = data[0]['sixNightContAve']%60;

          this.seven_person_day_h = Math.floor(data[0]['sevenDaytimeAve']/60);
          this.seven_person_day_m = data[0]['sevenDaytimeAve']%60;
          this.seven_person_night_h = Math.floor(data[0]['sevenNightAve']/60);
          this.seven_person_night_m = data[0]['sevenNightAve']%60;
          this.seven_group_day_h = Math.floor(data[0]['sevenDaytimeContAve']/60);
          this.seven_group_day_m = data[0]['sevenDaytimeContAve']%60;
          this.seven_group_night_h = Math.floor(data[0]['sevenNightContAve']/60);
          this.seven_group_night_m = data[0]['sevenNightContAve']%60;

          this.eight_person_day_h = Math.floor(data[0]['eightDaytimeAve']/60);
          this.eight_person_day_m = data[0]['eightDaytimeAve']%60;
          this.eight_person_night_h = Math.floor(data[0]['eightNightAve']/60);
          this.eight_person_night_m = data[0]['eightNightAve']%60;
          this.eight_group_day_h = Math.floor(data[0]['eightDaytimeContAve']/60);
          this.eight_group_day_m = data[0]['eightDaytimeContAve']%60;
          this.eight_group_night_h = Math.floor(data[0]['eightNightContAve']/60);
          this.eight_group_night_m = data[0]['eightNightContAve']%60;

          this.nine_person_day_h = Math.floor(data[0]['nineDaytimeAve']/60);
          this.nine_person_day_m = data[0]['nineDaytimeAve']%60;
          this.nine_person_night_h = Math.floor(data[0]['nineNightAve']/60);
          this.nine_person_night_m = data[0]['nineNightAve']%60;
          this.nine_group_day_h = Math.floor(data[0]['nineDaytimeContAve']/60);
          this.nine_group_day_m = data[0]['nineDaytimeContAve']%60;
          this.nine_group_night_h = Math.floor(data[0]['nineNightContAve']/60);
          this.nine_group_night_m = data[0]['nineNightContAve']%60;

          this.ten_person_day_h = Math.floor(data[0]['tenDaytimeAve']/60);
          this.ten_person_day_m = data[0]['tenDaytimeAve']%60;
          this.ten_person_night_h = Math.floor(data[0]['tenNightAve']/60);
          this.ten_person_night_m = data[0]['tenNightAve']%60;
          this.ten_group_day_h = Math.floor(data[0]['tenDaytimeContAve']/60);
          this.ten_group_day_m = data[0]['tenDaytimeContAve']%60;
          this.ten_group_night_h = Math.floor(data[0]['tenNightContAve']/60);
          this.ten_group_night_m = data[0]['tenNightContAve']%60;

          this.eleven_person_day_h = Math.floor(data[0]['elevenDaytimeAve']/60);
          this.eleven_person_day_m = data[0]['elevenDaytimeAve']%60;
          this.eleven_person_night_h = Math.floor(data[0]['elevenNightAve']/60);
          this.eleven_person_night_m = data[0]['elevenNightAve']%60;
          this.eleven_group_day_h = Math.floor(data[0]['elevenDaytimeContAve']/60);
          this.eleven_group_day_m = data[0]['elevenDaytimeContAve']%60;
          this.eleven_group_night_h = Math.floor(data[0]['elevenNightContAve']/60);
          this.eleven_group_night_m = data[0]['elevenNightContAve']%60;
    });

    this.backend.getChanges()
        .subscribe(data => {
          this.changes = data;
          for(var i=0; i<this.changes.length; i++){
            this.changes[i]['date'] = this.changes[i]['occur_time'].split(" ", 2)[0];
            this.changes[i]['time'] = this.changes[i]['occur_time'].split(" ", 2)[1];
          }
          if (this.changes.length > 0){
            this.date1 = this.changes[0]['date'];
          }

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
          this.join = data[0]['join_continuous'];
          this.accumulateWorkTime_h = Math.floor(data[0]['accumulateWorkTime']/60);
          this.accumulateWorkTime_m = data[0]['accumulateWorkTime']%60;

          this.zero_person_day_h = Math.floor(data[0]['zeroDaytimeAve']/60);
          this.zero_person_day_m = data[0]['zeroDaytimeAve']%60;
          this.zero_person_night_h = Math.floor(data[0]['zeroNightAve']/60);
          this.zero_person_night_m = data[0]['zeroNightAve']%60;
          this.zero_group_day_h = Math.floor(data[0]['zeroDaytimeContAve']/60);
          this.zero_group_day_m = data[0]['zeroDaytimeContAve']%60;
          this.zero_group_night_h = Math.floor(data[0]['zeroNightContAve']/60);
          this.zero_group_night_m = data[0]['zeroNightContAve']%60;

          this.one_person_day_h = Math.floor(data[0]['oneDaytimeAve']/60);
          this.one_person_day_m = data[0]['oneDaytimeAve']%60;
          this.one_person_night_h = Math.floor(data[0]['oneNightAve']/60);
          this.one_person_night_m = data[0]['oneNightAve']%60;
          this.one_group_day_h = Math.floor(data[0]['oneDaytimeContAve']/60);
          this.one_group_day_m = data[0]['oneDaytimeContAve']%60;
          this.one_group_night_h = Math.floor(data[0]['oneNightContAve']/60);
          this.one_group_night_m = data[0]['oneNightContAve']%60;

          this.two_person_day_h = Math.floor(data[0]['twoDaytimeAve']/60);
          this.two_person_day_m = data[0]['twoDaytimeAve']%60;
          this.two_person_night_h = Math.floor(data[0]['twoNightAve']/60);
          this.two_person_night_m = data[0]['twoNightAve']%60;
          this.two_group_day_h = Math.floor(data[0]['twoDaytimeContAve']/60);
          this.two_group_day_m = data[0]['twoDaytimeContAve']%60;
          this.two_group_night_h = Math.floor(data[0]['twoNightContAve']/60);
          this.two_group_night_m = data[0]['twoNightContAve']%60;

          this.three_person_day_h = Math.floor(data[0]['threeDaytimeAve']/60);
          this.three_person_day_m = data[0]['threeDaytimeAve']%60;
          this.three_person_night_h = Math.floor(data[0]['threeNightAve']/60);
          this.three_person_night_m = data[0]['threeNightAve']%60;
          this.three_group_day_h = Math.floor(data[0]['threeDaytimeContAve']/60);
          this.three_group_day_m = data[0]['threeDaytimeContAve']%60;
          this.three_group_night_h = Math.floor(data[0]['threeNightContAve']/60);
          this.three_group_night_m = data[0]['threeNightContAve']%60;

          this.four_person_day_h = Math.floor(data[0]['fourDaytimeAve']/60);
          this.four_person_day_m = data[0]['fourDaytimeAve']%60;
          this.four_person_night_h = Math.floor(data[0]['fourNightAve']/60);
          this.four_person_night_m = data[0]['fourNightAve']%60;
          this.four_group_day_h = Math.floor(data[0]['fourDaytimeContAve']/60);
          this.four_group_day_m = data[0]['fourDaytimeContAve']%60;
          this.four_group_night_h = Math.floor(data[0]['fourNightContAve']/60);
          this.four_group_night_m = data[0]['fourNightContAve']%60;

          this.five_person_day_h = Math.floor(data[0]['fiveDaytimeAve']/60);
          this.five_person_day_m = data[0]['fiveDaytimeAve']%60;
          this.five_person_night_h = Math.floor(data[0]['fiveNightAve']/60);
          this.five_person_night_m = data[0]['fiveNightAve']%60;
          this.five_group_day_h = Math.floor(data[0]['fiveDaytimeContAve']/60);
          this.five_group_day_m = data[0]['fiveDaytimeContAve']%60;
          this.five_group_night_h = Math.floor(data[0]['fiveNightContAve']/60);
          this.five_group_night_m = data[0]['fiveNightContAve']%60;

          this.six_person_day_h = Math.floor(data[0]['sixDaytimeAve']/60);
          this.six_person_day_m = data[0]['sixDaytimeAve']%60;
          this.six_person_night_h = Math.floor(data[0]['sixNightAve']/60);
          this.six_person_night_m = data[0]['sixNightAve']%60;
          this.six_group_day_h = Math.floor(data[0]['sixDaytimeContAve']/60);
          this.six_group_day_m = data[0]['sixDaytimeContAve']%60;
          this.six_group_night_h = Math.floor(data[0]['sixNightContAve']/60);
          this.six_group_night_m = data[0]['sixNightContAve']%60;

          this.seven_person_day_h = Math.floor(data[0]['sevenDaytimeAve']/60);
          this.seven_person_day_m = data[0]['sevenDaytimeAve']%60;
          this.seven_person_night_h = Math.floor(data[0]['sevenNightAve']/60);
          this.seven_person_night_m = data[0]['sevenNightAve']%60;
          this.seven_group_day_h = Math.floor(data[0]['sevenDaytimeContAve']/60);
          this.seven_group_day_m = data[0]['sevenDaytimeContAve']%60;
          this.seven_group_night_h = Math.floor(data[0]['sevenNightContAve']/60);
          this.seven_group_night_m = data[0]['sevenNightContAve']%60;

          this.eight_person_day_h = Math.floor(data[0]['eightDaytimeAve']/60);
          this.eight_person_day_m = data[0]['eightDaytimeAve']%60;
          this.eight_person_night_h = Math.floor(data[0]['eightNightAve']/60);
          this.eight_person_night_m = data[0]['eightNightAve']%60;
          this.eight_group_day_h = Math.floor(data[0]['eightDaytimeContAve']/60);
          this.eight_group_day_m = data[0]['eightDaytimeContAve']%60;
          this.eight_group_night_h = Math.floor(data[0]['eightNightContAve']/60);
          this.eight_group_night_m = data[0]['eightNightContAve']%60;

          this.nine_person_day_h = Math.floor(data[0]['nineDaytimeAve']/60);
          this.nine_person_day_m = data[0]['nineDaytimeAve']%60;
          this.nine_person_night_h = Math.floor(data[0]['nineNightAve']/60);
          this.nine_person_night_m = data[0]['nineNightAve']%60;
          this.nine_group_day_h = Math.floor(data[0]['nineDaytimeContAve']/60);
          this.nine_group_day_m = data[0]['nineDaytimeContAve']%60;
          this.nine_group_night_h = Math.floor(data[0]['nineNightContAve']/60);
          this.nine_group_night_m = data[0]['nineNightContAve']%60;

          this.ten_person_day_h = Math.floor(data[0]['tenDaytimeAve']/60);
          this.ten_person_day_m = data[0]['tenDaytimeAve']%60;
          this.ten_person_night_h = Math.floor(data[0]['tenNightAve']/60);
          this.ten_person_night_m = data[0]['tenNightAve']%60;
          this.ten_group_day_h = Math.floor(data[0]['tenDaytimeContAve']/60);
          this.ten_group_day_m = data[0]['tenDaytimeContAve']%60;
          this.ten_group_night_h = Math.floor(data[0]['tenNightContAve']/60);
          this.ten_group_night_m = data[0]['tenNightContAve']%60;

          this.eleven_person_day_h = Math.floor(data[0]['elevenDaytimeAve']/60);
          this.eleven_person_day_m = data[0]['elevenDaytimeAve']%60;
          this.eleven_person_night_h = Math.floor(data[0]['elevenNightAve']/60);
          this.eleven_person_night_m = data[0]['elevenNightAve']%60;
          this.eleven_group_day_h = Math.floor(data[0]['elevenDaytimeContAve']/60);
          this.eleven_group_day_m = data[0]['elevenDaytimeContAve']%60;
          this.eleven_group_night_h = Math.floor(data[0]['elevenNightContAve']/60);
          this.eleven_group_night_m = data[0]['elevenNightContAve']%60;
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

  ngAfterViewInit() {
    if (this.scrollItem) {
        this.scrollItem.addScrollEventListener((ev) => {
          if(ev.target.scrollTop>10){
            this.refresherEnabled=false;
          }else{
            this.refresherEnabled=true;
          }
        });
    }
  }
}
