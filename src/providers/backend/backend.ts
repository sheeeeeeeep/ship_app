import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder, IStatus, INotif, IAuth } from '../../Interface';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

@Injectable()
export class BackendProvider {

  constructor(public http: HttpClient,  public gv: GlobalVarProvider) {
  }

    private url: string = "https://fleet-geode-218517.appspot.com/";

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

  private headers(){
    let header = { headers: new HttpHeaders({
     "Content-Type": "application/json",
     "Authorization": `Bearer ${this.gv.TOKEN}` }) };
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

  getNotif(){
    let url2 = this.url + "api/message/";
    var res = this.http.get<INotif[]>(url2, this.headers());
    return res;
  }

}
