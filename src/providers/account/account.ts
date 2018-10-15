import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../../Account';
import { IAccount } from '../../IAccount';
import { Observable} from 'rxjs/Observable';
/*
  Generated class for the AccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountProvider {

  constructor(public http: HttpClient) {
  }

  //private url_1: string = "http://my-json-server.typicode.com/Yi-Zhen/Ionic/account/";
  private url_1: string = "http://localhost:8000/api/pilot/";

  getAccount(username: string): Observable<Account>{
    let url_2: string = `?username=${username}`;
    let url: string = this.url_1.concat(url_2);
    return this.http.get<Account>(url);
  }

}
