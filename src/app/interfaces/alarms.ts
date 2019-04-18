export interface Alarms {
	alarmCreatedBy: string,
	alarmTitle: string,
	alarmTime: string,
	alarmDays: {
		mon: boolean,
		tue: boolean,
		wed: boolean,
		thu: boolean,
		fri: boolean,
		sat: boolean,
		sun: boolean,
	};
}
