import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../../IOrder';
import { Observable} from 'rxjs/Observable';
import { GlobalVarProvider } from '../../providers/global-var/global-var';


/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(private http: HttpClient, public gv: GlobalVarProvider) {
  }

  private url: string = "http://localhost:8100/api/api/order/";
  private  headers = { headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": `JWT ${this.gv.TOKEN}` }) };

  getOrder(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this.url, this.headers);
  }

}
