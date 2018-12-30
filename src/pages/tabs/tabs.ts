import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';

import { BoatPage } from '../boat/boat';
import { TimePage } from '../time/time';
import { NewsPage } from '../news/news';
import { NotifPage } from '../notif/notif';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BoatPage;
  tab2Root = TimePage;
  tab3Root = NewsPage;
  tab4Root = NotifPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
