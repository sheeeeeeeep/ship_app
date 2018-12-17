import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FindPassPage } from '../pages/find-pass/find-pass';

import { BoatPage } from '../pages/boat/boat';
import { TimePage } from '../pages/time/time';
import { NewsPage } from '../pages/news/news';
import { NotifPage } from '../pages/notif/notif';
import { SettingPage } from '../pages/setting/setting';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountProvider } from '../providers/account/account';
import { HttpClientModule } from '@angular/common/http';
import { FcmProvider } from '../providers/fcm/fcm';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IonicStorageModule } from '@ionic/storage';
import { GlobalVarProvider } from '../providers/global-var/global-var';

import { IStatus, IOrder, INotif, Token } from '../Interface';
import { BackendProvider } from '../providers/backend/backend';

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
    ContactPage,
    HomePage,
    TabsPage,
    BoatPage,
    TimePage,
    NewsPage,
    NotifPage,
    SettingPage,
    FindPassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfifg),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    BoatPage,
    TimePage,
    NewsPage,
    NotifPage,
    SettingPage,
    FindPassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccountProvider,
    Firebase,
    FcmProvider,
    GlobalVarProvider,
    BackendProvider,
  ]
})
export class AppModule {}

// import { IonicTokenService } from 'ionic-token-auth';

// @NgModule({
//     imports: [
//         BrowserModule,
//         HttpModule
//     ],
//     declarations: [ AppComponent ],
//     providers:    [ IonicTokenService ],
//     bootstrap:    [ AppComponent ]
// })
