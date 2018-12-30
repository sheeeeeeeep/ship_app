// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GlobalVarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarProvider {

  constructor(public storage: Storage) {
    storage.get('name').then((nm) => {
      this.NAME = nm;
    });
    storage.get('id').then((id) => {
      this.UID = id;
    });
  }

  public TOKEN: string;
  public NAME: string;
  public UID: number;

}
