export interface IOrder{
  name: string;
  pilot_id: number;
  created: string;
  join_continuous: boolean;
}

export interface IAuth{
    token: string;
    username: string;
    first_name: string;
    last_name: string;
    pilot_id: number;
}

export interface IStatus{
  pilot_id: number;
  name: string;
  pilot_status: string;
  event_set: IShip2[];
  break_start: any;
  break_end: any;
  temp_start: any;
  night_shift: number;
  flower: boolean;
  join_continuous: boolean;
  break_number: number;
  num: number;
  temp_reason: string;
  working_or_not: boolean;
  returnTime: string;
}

export interface INotif{
  time: string;
  ship: string;
  head: string;
  detail: string;
}

export interface IShip{
  vsl_from_to: string;
  vslName_eng: string;
  tons: number;
  vslSituation: string;
  vslNumber: string;
  applyTime: string;
  departureTime: string;
}

export interface IShip2{
  SP_STS: string;
  SP_PORTPLACE: string;
  SP_PORTFROM: string;
  SP_INPORT: string;
  SP_ENAME: string;
  SP_TOTDUN: string;
  SP_ID: string;
  SP_IPLTAPPT: string;
  SP_STARTTIME: string;
  [SP_FROM_TO: string]:any;
}

export interface IAppcal{
    join_continuous: boolean;
    accumulateWorkTime: number;
    working_day: number;
    zeroDaytimeAve: number;
    zeroNightAve: number;
    oneDaytimeAve: number;
    oneNightAve: number;
    twoDaytimeAve: number;
    twoNightAve: number;
    threeDaytimeAve: number;
    threeNightAve: number;
    fourDaytimeAve: number;
    fourNightAve: number;
    fiveDaytimeAve: number;
    fiveNightAve: number;
    sixDaytimeAve: number;
    sixNightAve: number;
    sevenDaytimeAve: number;
    sevenNightAve: number;
    eightDaytimeAve: number;
    eightNightAve: number;
    nineDaytimeAve: number;
    nineNightAve: number;
    tenDaytimeAve: number;
    tenNightAve: number;
    elevenDaytimeAve: number;
    elevenNightAve: number;
    zeroDaytimeContAve: number;
    zeroNightContAve: number;
    oneDaytimeContAve: number;
    oneNightContAve: number;
    twoDaytimeContAve: number;
    twoNightContAve: number;
    threeDaytimeContAve: number;
    threeNightContAve: number;
    fourDaytimeContAve: number;
    fourNightContAve: number;
    fiveDaytimeContAve: number;
    fiveNightContAve: number;
    sixDaytimeContAve: number;
    sixNightContAve: number;
    sevenDaytimeContAve: number;
    sevenNightContAve: number;
    eightDaytimeContAve: number;
    eightNightContAve: number;
    nineDaytimeContAve: number;
    nineNightContAve: number;
    tenDaytimeContAve: number;
    tenNightContAve: number;
    elevenDaytimeContAve: number;
    elevenNightContAve: number;
}


export interface IChange{
    id: number;
    pilot_work: {
        name: string;
        pilot_id: number;
    };
    pilot_wait: {
        name: string;
        pilot_id: number;
    };
    occur_time: string;
    SP_STS: string;
    SP_ENAME: string;
    SP_PORTPLACE: string;
    SP_PORTFROM: string;
    SP_INPORT: string;
    SP_TOTDUN: string;
}
