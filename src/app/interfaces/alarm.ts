export interface Alarm {
   alarmEnabled: boolean,
	alarmCreatedBy: string,
	alarmTitle: string,
	alarmTime: string,
	alarmDays:  [
         {
            name: 'Monday',
            value: boolean,
         },
         {
            name: 'Tuesday',
            value: boolean,
         },
         {
            name: 'Wednesday',
            value: boolean,
         },
         {
            name: 'Thursday',
            value: boolean,
         },
         {
            name: 'Friday',
            value: boolean,
         },
         {
            name: 'Saturday',
            value: boolean,
         },
         {
            name: 'Sunday',
            value: boolean,
         }
       ]
}
