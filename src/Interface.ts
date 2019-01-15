export interface IOrder{
  my_name: string;
  my_pilot_id: string;
  my_created: string;
}

export interface IAuth{
    "token": string;
    "username": string;
    "name": string;
    "pilot_id": number;
}

export interface IStatus{
  my_name: string;
  my_pilot_id: string;
  my_status: string;
  night_shift: number;
  ship: string;
}

export interface INotif{
  time: string;
  ship: string;
  head: string;
  detail: string;
}

export class Account{
  username: string;
  password: string;
}

export interface IAccount{
  username: string;
  password: string;
}
