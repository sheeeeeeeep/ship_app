import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  title:string = "公開資訊";
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }


  doRefresh(refresher) {

    var ifr = (<HTMLScriptElement[]><any>document.getElementsByName('web'))[0];
    ifr.src = ifr.src;

    setTimeout(() => {
        refresher.complete();
    }, 1500);

  }



}
