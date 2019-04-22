import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { Alarm } from '../../../interfaces/alarm'
import { AlarmService } from '../../../services/alarm.service';

@Component({
  selector: 'app-alarm-add',
  templateUrl: './alarm-add.page.html',
  styleUrls: ['./alarm-add.page.scss'],
})
export class AlarmAddPage implements OnInit {

	alarm: Alarm = {
    alarmEnabled: true,
		alarmCreatedBy: "",
		alarmTitle: "",
		alarmTime: "",
		alarmDays:  [
         {
            name: 'Monday',
            value: false,
         },
         {
            name: 'Tuesday',
            value: false,
         },
         {
            name: 'Wednesday',
            value: false,
         },
         {
            name: 'Thursday',
            value: false,
         },
         {
            name: 'Friday',
            value: false,
         },
         {
            name: 'Saturday',
            value: false,
         },
         {
            name: 'Sunday',
            value: false,
         },
       ]
	}; 

	alarmID: "";


  constructor(private modalCtrl: ModalController,
              private alarmService: AlarmService,
              public db: AngularFirestore,
              public afAuth: AngularFireAuth,
              private nav: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams){

  }

  ngOnInit() {
  	this.alarmID= this.navParams.get('alarmID');
  	if(this.alarmID) {
  		this.loadAlarm();
  	}

  }

  async loadAlarm(){
  	const loading = await this.loadingController.create({
        message: 'Loading..',
        spinner: 'crescent',
    	duration: 2000
    })

  	await loading.present();
  	
  	this.alarmService.getAlarm(this.alarmID).subscribe(res =>{
  		loading.dismiss();
  		this.alarm = res;
  	})
  }

  async saveAlarm(){
  	let loading = await this.loadingController.create({
        message: 'Adding Your Data..',
        spinner: 'crescent',
    	duration: 2000
    });

  	await loading.present();
  	
  	if (this.alarmID){
      this.alarm.alarmCreatedBy=this.afAuth.auth.currentUser.uid;
      console.log(this.alarm.alarmCreatedBy);
  		this.alarmService.updateAlarm(this.alarm, this.alarmID).then(()=>{
  			console.log("it does");
  			loading.dismiss();
  			this.nav.navigateBack('/alarm');
  		})

  	} else {
      this.alarm.alarmCreatedBy=this.afAuth.auth.currentUser.uid;
      console.log(this.alarm.alarmCreatedBy);      
  		this.alarmService.addAlarm(this.alarm).then(()=>{
  			console.log("it does not");
  			loading.dismiss();
  			this.nav.navigateBack('/alarm');
  		})
  	}
    this.modalCtrl.dismiss();
  }

}
