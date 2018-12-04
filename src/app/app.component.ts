import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FcmProvider } from '../providers/fcm/fcm';
import { GlobalVars } from '../providers/globalvars/globalvars'
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';



import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  notifs = [];

  public footerIsHidden: boolean = false;
  constructor(platform: Platform, fcm: FcmProvider, toastCtrl: ToastController, statusBar: StatusBar, splashScreen: SplashScreen, events: Events,public storage: Storage) {
    this.storage.get('message').then((msgs) => {
      if(!msgs){
        storage.ready().then(() => {
          this.storage.set('message',this.notifs);
        });
      }
    });
    platform.ready().then(() => {
      fcm.getToken();
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
          this.storage.get('message').then((msgs) => {
            this.notifs = msgs;
            this.notifs.push(msg);
            this.storage.ready().then(() => {
              this.storage.set('message', this.notifs);
              // location.reload()
            });
          });
          // location.reload()
          // gv.setMyGlobalVar(msg.title,msg.body);

          // alert(msg.body)

          // const toast = toastCtrl.create({
          //   message: msg.body,
          //   duration: 3000
          // });
          // toast.present();
          // this.navCtrl.push(NotifPage, {
          //     param1: msg.body
          // });

        })
      )
      .subscribe()
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('hideHeader', (data)=>{
      this.footerIsHidden = data.isHidden;
    })
  }
}
