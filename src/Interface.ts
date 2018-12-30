export interface IOrder{
  my_name: string;
  my_pilot_id: string;
  my_created: string;
}

export interface Token{
  access: string;
  refresh: string;
}

export interface IUser{
  auth: string;
  user_id: number;
  username: string;
  // real_name: string;
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
