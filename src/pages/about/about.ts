import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../Account';
import { TabsPage } from '../tabs/tabs';
import { AccountProvider } from '../../providers/account/account';
import { HttpClientModule } from '@angular/common/http';
import { Events } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IOrder } from '../../IOrder';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  constructor(public navCtrl: NavController, public accountProvider: AccountProvider, public events: Events, private http: HttpClient, public gv: GlobalVarProvider ) {
      events.publish('hideHeader', {isHidden: true});
  }
  ionViewWillLeave(){
    this.events.publish('hideHeader', {isHidden: false});
  }

  username: string;
  password: string;
  realPassword: string;
  account: Account;
  isWrongUser: boolean = false;
  isWrongPass: boolean = false;


  /*goHome() {
    this.accountProvider.getAccount(this.username)
      .subscribe(data => {
        this.isWrongUser = false;
        this.isWrongPass = false;

        try{
            this.realPassword=data[0].password;
            if(this.password == this.realPassword){
              this.navCtrl.push(TabsPage);
            }else{
              this.isWrongPass = true;
            }
        }catch(err){
          this.isWrongUser = true;
          console.log(err)
        }
      });

  }*/

  goHome(){
    let postParams =  {
      "username": this.username,
      "password": this.password,
    }
   let headers = { headers: new HttpHeaders({
     "Content-Type": "application/json",

    }) };
   //let url = "https://fleet-geode-218517.appspot.com/api-token-auth/";
   let url2 = "http://localhost:8100/api/api-token-auth/"

    this.http.post<Token[]>(url2, JSON.stringify(postParams),headers)
      .subscribe(data => {
        this.gv.TOKEN = data.token;
        console.log(this.gv.TOKEN);
        //this.navCtrl.push(TabsPage);

      }, error => {
        console.log(error);
        this.isWrongUser = true;
        this.isWrongPass = true;
      });
  }


  getUser(){
    let url =  "http://localhost:8100/api/api/user/bill01/";
    let headers = { headers: new HttpHeaders({

      "Content-Type": "application/json",
      "Authorization": `JWT ${this.gv.TOKEN}` }) };


     this.http.get(url,headers)
       .subscribe(data => {

         console.log(data);


       }, error => {
         console.log(error);
       });

  }

  getOrder(){
    let url =  "http://localhost:8100/api/api/status/";
    let headers = { headers: new HttpHeaders({

      "Content-Type": "application/json",
      "Authorization": `JWT ${this.gv.TOKEN}` }) };


     this.http.get(url,headers)
       .subscribe(data => {

         console.log(data);


       }, error => {
         console.log(error);
       });

  }

  enter(){
      this.navCtrl.push(TabsPage);

  }


}
