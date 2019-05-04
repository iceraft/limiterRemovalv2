import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController, Platform, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { LocalNotifications, ELocalNotificationTriggerUnit, ILocalNotificationActionType, ILocalNotification } from '@ionic-native/local-notifications/ngx';
 

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


  scheduled = [];

  constructor(private alarmService: AlarmService,
  			  private modalCtrl: ModalController,
          public afAuth: AngularFireAuth,
          public actionSheetController: ActionSheetController,
          private plt: Platform, private localNotifications: LocalNotifications, private alertCtrl: AlertController
          ) 
  {

              this.plt.ready().then(() => {
                this.localNotifications.on('click').subscribe(res => {
                  let msg = res.data ? res.data.mydata : '';
                  this.showAlert(res.title, res.text, msg);
                });
           
                this.localNotifications.on('trigger').subscribe(res => {
                  let msg = res.data ? res.data.mydata : '';
                  this.showAlert(res.title, res.text, msg);
                });
              });

	}

	ngOnInit() {
		this.alarmService.getAlarms().subscribe(res=>{
			this.alarms = res;
		})

    this.repeatingDaily(this.alarms);
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

   showAlert(header, sub, msg) {
    this.alertCtrl.create({
      header: header,
      subHeader: sub,
      message: msg,
      buttons: ['Ok']
    }).then(alert => alert.present());
  }

  repeatingDaily(alarm) {
    this.localNotifications.schedule({
      id: 42,
      title: 'Good Morning',
      text: 'Code something epic today!',
      trigger: { every: { hour: 11, minute: 50 } }
    });
  }

  getAll() {
    this.localNotifications.getAll().then((res: ILocalNotification[]) => {
      this.scheduled = res;
    })
  }
}
