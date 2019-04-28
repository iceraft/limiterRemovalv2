import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


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
	alarm: Alarm ;

  constructor(private alarmService: AlarmService,
  			  private modalCtrl: ModalController,
          public afAuth: AngularFireAuth,
          public actionSheetController: ActionSheetController,) {

	}

	ngOnInit() {
		this.alarmService.getAlarms().subscribe(res=>{
			this.alarms = res;
      console.log(this.alarms)
		})
	}

	async add() {
	    const modal = await this.modalCtrl.create({
	      component: AlarmAddPage,
	      backdropDismiss: false,
	    });
	    return await modal.present();
  	}

	remove(alarm) {
		this.alarmService.removeAlarm(alarm.id);
	}

	enable(alarm){
  		console.log(alarm);
		if(alarm.alarmEnabled ==true){
			alarm.alarmEnabled = false;
		}else{
			alarm.alarmEnabled = true;		
		}
		this.alarmService.updateAlarm(alarm, alarm.id);

	}

	async edit(alarm) {
    const modal = await this.modalCtrl.create({
      component: AlarmAddPage,
      backdropDismiss: false,
      componentProps: {
      alarm: alarm,
      alarmID: alarm.id,
   }
    });
    return await modal.present();
   } 

   async alarmAct(alarm : Alarm){
      const actionSheet = await this.actionSheetController.create({
      header: "Are you sure you want to delete " + alarm.alarmTitle,
      buttons: [{
        text: 'Yes',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.remove(alarm);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
   }
}
