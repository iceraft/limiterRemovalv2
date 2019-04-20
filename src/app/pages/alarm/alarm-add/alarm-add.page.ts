import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
		alarmCreatedBy: "",
		alarmTitle: "",
		alarmTime: "",
		alarmDays: {
			mon: false,
			tue: false,
			wed: false,
			thu: false,
			fri: false,
			sat: false,
			sun: false,
			},
	};
	alarmID: "";

  constructor(private modalCtrl: ModalController,
              private alarmService: AlarmService,
              public db: AngularFirestore,
              private nav: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams){
  }

  ngOnInit() {
  	this.alarmID= this.navParams.get('alarmID');
  	this.alarm=this.navParams.get('alarm');
  	if(this.alarmID) {
  		this.loadAlarm();
  	}
  	console.log(this.alarm);
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
  		this.alarmService.updateAlarm(this.alarm, this.alarmID).then(()=>{
  			console.log("it does");
  			loading.dismiss();
  			this.nav.navigateBack('home');
  		})

  	} else {
  		this.alarmService.addAlarm(this.alarm).then(()=>{
  			console.log("it does not");
  			loading.dismiss();
  			this.nav.navigateBack('home');
  		})
  	}
  }

}
