import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginChangePassPage } from './login-change-pass';

@NgModule({
  declarations: [
    LoginChangePassPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginChangePassPage),
  ],
})
export class LoginChangePassPageModule {}
