import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackendProvider } from '../../providers/backend/backend';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})

export class NewsPage {
  options : InAppBrowserOptions = {
      location : 'yes',//Or 'no'
      hidden : 'no', //Or  'yes'
      clearcache : 'yes',
      clearsessioncache : 'yes',
      zoom : 'yes',//Android only ,shows browser zoom controls
      hardwareback : 'yes',
      mediaPlaybackRequiresUserAction : 'no',
      shouldPauseOnSuspend : 'no', //Android only
      closebuttoncaption : 'Close', //iOS only
      disallowoverscroll : 'no', //iOS only
      toolbar : 'yes', //iOS only
      enableViewportScale : 'yes', //iOS only
      allowInlineMediaPlayback : 'no',//iOS only
      presentationstyle : 'pagesheet',//iOS only
      fullscreen : 'yes',//Windows only
  };
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams,public backend: BackendProvider) {

  }
  title:string = "公開資訊";
  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewsPage');
  }
  public openWithInAppBrowser(url : string){
    let target = "_blank";
    this.iab.create(url,target,this.options);
  }

  ionViewWillEnter(){
  }

  doRefresh(refresher) {
    var ifr = (<HTMLScriptElement[]><any>document.getElementsByName('web'))[0];
    ifr.src = ifr.src;

    setTimeout(() => {
        refresher.complete();
    }, 1500);
  }
}
