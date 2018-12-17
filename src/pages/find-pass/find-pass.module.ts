import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindPassPage } from './find-pass';

@NgModule({
  declarations: [
    FindPassPage,
  ],
  imports: [
    IonicPageModule.forChild(FindPassPage),
  ],
})
export class FindPassPageModule {}
