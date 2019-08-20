import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarProvider {
  public TOKEN: string;
  public FNAME: string;
  public LNAME: string;
  public UID: number;
}
