import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FcmProvider } from '../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';

import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AboutPage;
  notifs = [];

  public footerIsHidden: boolean = false;
  constructor(platform: Platform, public fcm: FcmProvider, toastCtrl: ToastController, statusBar: StatusBar, splashScreen: SplashScreen, events: Events,public storage: Storage) {
    this.storage.get('message').then((msgs) => {
      if(!msgs){
        storage.ready().then(() => {
          this.storage.set('message',this.notifs);
        });
      }
    });
    platform.ready().then(() => {
      fcm.getToken();
      // fcm.subscribeToTopic('gino');
      fcm.listenToNotifications().pipe(
        tap(msg => {
          // show a toast
            if(msg.wasTapped){
              console.log("Received in background");
            } else {
              console.log("Received in foreground");
                let toast = toastCtrl.create({
                message: msg.body,
                duration: 3000,
                position: 'top',
                cssClass: "toast-message",
              });
              toast.onDidDismiss(() => {
                console.log('Dismissed toast');
              });

              toast.present();
              this.storage.get('message').then((msgs) => {
                this.notifs = msgs;
                this.notifs.push(msg);
                this.storage.ready().then(() => {
                  this.storage.set('message', this.notifs);
                });
            });

            };
            // this.storage.get('message').then((msgs) => {
            //   this.notifs = msgs;
            //   this.notifs.push(msg);
            //   this.storage.ready().then(() => {
            //     this.storage.set('message', this.notifs);
            //   });
            // });
        })
      )
      .subscribe()

      //   fcm.listenToNotifications().subscribe(data =>{
      //     this.storage.get('message').then((msgs) => {
      //     this.notifs = msgs;
      //     this.notifs.push(data);
      //     this.storage.ready().then(() => {
      //       this.storage.set('message', this.notifs);
      //     });
      //   });
      // });

      statusBar.styleDefault();
      splashScreen.hide();
    });

    events.subscribe('hideHeader', (data)=>{
      this.footerIsHidden = data.isHidden;
    })
  }
}
