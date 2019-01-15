import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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
