import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoatPage } from './boat';

@NgModule({
  declarations: [
    BoatPage,
  ],
  imports: [
    IonicPageModule.forChild(BoatPage),
  ],
})
export class BoatPageModule {}
