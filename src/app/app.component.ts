import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FcmProvider } from '../providers/fcm/fcm';
import { GlobalVarProvider } from '../providers/global-var/global-var';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  notifs = [];

  public footerIsHidden: boolean = false;
  constructor(platform: Platform, public fcm: FcmProvider, toastCtrl: ToastController, statusBar: StatusBar, splashScreen: SplashScreen, events: Events,public storage: Storage,public gv: GlobalVarProvider) {
    storage.get('token').then((tok) => {
      console.log(tok);
      if (tok){
        this.gv.TOKEN = tok;
        storage.get('last_name').then((ln) => {
          this.gv.LNAME = ln;
          storage.get('first_name').then((fn) => {
            this.gv.FNAME = fn;
            storage.get('id').then((id) => {
              this.gv.UID = id;
              
            });
          });
        });
        this.rootPage = TabsPage;
      }
      else{
        this.rootPage = AboutPage;
      }
    });

    platform.ready().then(() => {
      fcm.getToken();
      fcm.listenToNotifications().pipe(tap(msg => {})).subscribe();

      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#3A5786');
      splashScreen.hide();
    });

    events.subscribe('hideHeader', (data)=>{
      this.footerIsHidden = data.isHidden;
    })
  }
}
