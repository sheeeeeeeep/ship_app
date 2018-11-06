import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../../IOrder';
import { Observable} from 'rxjs/Observable';

/*
  Generated class for the OrderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderProvider {

  constructor(private http: HttpClient) {
  }

  private _url: string = "http://fleet-geode-218517.appspot.com/api/order/";


  getOrder(): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(this._url);
  }

}
