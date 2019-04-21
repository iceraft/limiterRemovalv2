import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AlarmService } from '../../services/alarm.service';
import { Alarm } from '../../interfaces/alarm';
import { AlarmAddPage } from './alarm-add/alarm-add.page';



@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {

	alarms: Alarm [];

  constructor(private alarmService: AlarmService,
  			  private modalCtrl: ModalController,) {

	}

	ngOnInit() {
		this.alarmService.getAlarms().subscribe(res=>{
			this.alarms = res;
		})
	}

	async add() {
	    const modal = await this.modalCtrl.create({
	      component: AlarmAddPage,
	      backdropDismiss: false,
	    });
	    return await modal.present();
  	}

	remove(item) {
		this.alarmService.removeAlarm(item.id);
	}

	async edit(alarm:{}, alarmID: string) {
    const modal = await this.modalCtrl.create({
      component: AlarmAddPage,
      backdropDismiss: false,
      componentProps: {
      profile: alarm,
      profileID: alarmID,
   }
    });
    return await modal.present();
   } 

}
