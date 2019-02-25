import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { PinchZoomModule } from 'ngx-pinch-zoom';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    PinchZoomModule
  ],
})
export class NewsPageModule {}
