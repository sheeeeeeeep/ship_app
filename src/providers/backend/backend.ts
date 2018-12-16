import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../../IOrder';
import { IStatus } from '../../IOrder';
import { Token } from '../../IOrder';
import { Observable} from 'rxjs/Observable';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

/*
  Generated class for the BackendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BackendProvider {

  constructor(public http: HttpClient,  public gv: GlobalVarProvider) {
    console.log('Hello BackendProvider Provider');
  }

    private url: string = "https://fleet-geode-218517.appspot.com/";

  getToken(username: string, password: string){
    let url2 = this.url + "api/token/";
    let postParams =  {
      "username": username,
      "password": password,
    }
    let headers = { headers: new HttpHeaders({
      "Content-Type": "application/json",

     }) };
    // var res: Observable<Token[]>;
    var res = this.http.post<Token[]>(url2, JSON.stringify(postParams),headers);
    return res

  }

  headers(){
    let header = { headers: new HttpHeaders({
     "Content-Type": "application/json",
     "Authorization": `Bearer ${this.gv.TOKEN}` }) };
    return header;
  }

  getOrder(): Observable<IOrder[]>{
    let url2 = this.url + "api/order/";
    // var res: Observable<IOrder[]>(;
    var res = this.http.get<IOrder[]>(url2, this.headers());
    return res;
  }

  getStatus(): Observable<IStatus[]>{
    let url2 = this.url + "api/status/";
    // var res = Observable<IStatus[]> ;
    var res = this.http.get<IStatus[]>(url2, this.headers());
    return res;
  }



}
