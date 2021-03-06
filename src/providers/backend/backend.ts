import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder, IStatus, INotif, IAuth, IAppcal, IChange } from '../../Interface';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

@Injectable()
export class BackendProvider {

  constructor(public http: HttpClient,  public gv: GlobalVarProvider) {
  }
    private url: string = "https://certain-purpose-228904.appspot.com/";

  getAuth(username: string, password: string){
    let url2 = this.url + "authenticate/pilot/";
    let postParams =  {
      "username": username,
      "password": password,
    }
    let headers = { headers: new HttpHeaders({
      "Content-Type": "application/json",

     }) };
    var res = this.http.post<IAuth[]>(url2, JSON.stringify(postParams),headers);
    return res;
  }

  headers(){
    let header = { headers: new HttpHeaders({
     "Content-Type": "application/json",
     "Authorization": `token ${this.gv.TOKEN}` }) };
    return header;
  }

  getOrder(){
    let url2 = this.url + "api/order/";
    var res = this.http.get<IOrder[]>(url2, this.headers());
    return res;
  }

  getStatus(){
    let url2 = this.url + "api/status/";
    var res = this.http.get<IStatus[]>(url2, this.headers());
    return res;
  }

  getAppcal(){
    let url2 = this.url + "api/appcal/";
    var res = this.http.get<IAppcal[]>(url2, { headers: new HttpHeaders({
                                                  "Content-Type": "application/json",
                                                  "Authorization": `token ${this.gv.TOKEN}` })
                                            });
    return res;
  }

  getChanges(){
    let url2 = this.url + "api/app_conti/";
    var res = this.http.get<IChange[]>(url2, this.headers());
    return res;
  }

  getNotif(){
    let url2 = this.url + "api/message/";
    var res = this.http.get<INotif[]>(url2, this.headers());
    return res;
  }

  changePass(password: string){
    let url2 = this.url + "reset_pilot/";
    let postParams =  [{
      "password": password,
    }]
    var res = this.http.post(url2, JSON.stringify(postParams), this.headers());
    return res;
  }

  sendPhone(phone: string){
    let url2 = this.url + "mobile/pilot/";
    let postParams =  [{
      "mobile": phone,
    }]
    var res = this.http.post(url2, JSON.stringify(postParams), );
    return res;
  }
}
