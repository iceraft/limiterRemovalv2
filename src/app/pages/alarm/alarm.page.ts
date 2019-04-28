import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
	alarmed: Alarm = {
    alarmEnabled: true,
		alarmCreatedBy: "",
		alarmTitle: "",
		alarmTime: new Date,
		alarmDays:  []
  
	};

  constructor(private alarmService: AlarmService,
  			  private modalCtrl: ModalController,
          public afAuth: AngularFireAuth,) {

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

	remove(item) {
		this.alarmService.removeAlarm(item.id);
	}

	enable(alarmID: string){
		this.alarmService.getAlarm(alarmID).subscribe(res =>{
  		this.alarmed = res;});
		if(this.alarmed.alarmEnabled ==true){
			this.alarmed.alarmEnabled = false;
		}
		else{
			this.alarmed.alarmEnabled = true;
			console.log(this.alarmed.alarmEnabled);			
		}
		this.alarmService.updateAlarm(this.alarmed, alarmID).then(()=>{

  		})
	}

	async edit(alarm:{}, alarmID: string) {
    const modal = await this.modalCtrl.create({
      component: AlarmAddPage,
      backdropDismiss: false,
      componentProps: {
      alarm: alarm,
      alarmID: alarmID,
   }
    });
    return await modal.present();
   } 

   // filtered(element:any){
   //   return element ? element.createdBy : this.afAuth.auth.currentUser.uid;
   // }

}
