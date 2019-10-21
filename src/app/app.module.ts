import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { FindPassPage } from '../pages/find-pass/find-pass';
import { BoatPage } from '../pages/boat/boat';
import { TimePage } from '../pages/time/time';
import { NewsPage } from '../pages/news/news';
import { NotifPage } from '../pages/notif/notif';
import { SettingPage } from '../pages/setting/setting';
import { ChangePassPage } from '../pages/change-pass/change-pass'

import { BoatPageModule } from '../pages/boat/boat.module';
import { FindPassPageModule } from '../pages/find-pass/find-pass.module';
import { NewsPageModule } from '../pages/news/news.module';
import { NotifPageModule } from '../pages/notif/notif.module';
import { SettingPageModule } from '../pages/setting/setting.module';
import { TimePageModule } from '../pages/time/time.module';
import { ChangePassPageModule } from '../pages/change-pass/change-pass.module'

import { FcmProvider } from '../providers/fcm/fcm';
import { GlobalVarProvider } from '../providers/global-var/global-var';
import { BackendProvider } from '../providers/backend/backend';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

const firebaseConfifg = {
    apiKey: "AIzaSyCSLv9NbQutolSd4_WmXa0_9UkUB0Nl-dY",
    authDomain: "ship-app-backend.firebaseapp.com",
    databaseURL: "https://ship-app-backend.firebaseio.com",
    projectId: "ship-app-backend",
    storageBucket: "ship-app-backend.appspot.com",
    messagingSenderId: "511913116476"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfifg),
    AngularFirestoreModule,
    BoatPageModule,
    FindPassPageModule,
    NewsPageModule,
    NotifPageModule,
    SettingPageModule,
    TimePageModule,
    ChangePassPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    BoatPage,
    TimePage,
    NewsPage,
    NotifPage,
    SettingPage,
    FindPassPage,
    ChangePassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Firebase,
    FcmProvider,
    GlobalVarProvider,
    BackendProvider,
    InAppBrowser
  ]
})
export class AppModule {}
