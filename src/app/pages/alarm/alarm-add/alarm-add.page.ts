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

  customSelectOptions: any = {
    header: 'Days',
    translucent: true
  };

	alarm: Alarm = {
    alarmEnabled: true,
		alarmCreatedBy: "",
		alarmTitle: "",
		alarmTime: new Date,
		alarmDays:  []
	}; 

	alarmID: "";
  days : any[] =[ {name:'Monday'},{name:'Tuesday'}, {name:'Wednesday'},{name:'Thursday'}, {name:'Friday'},{name:'Saturday'}, {name:'Sunday'}];


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
    console.log(this.days);
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
  			this.nav.navigateBack('/alarm');
  		})

  	} else {
      this.alarm.alarmCreatedBy=this.afAuth.auth.currentUser.uid;
  		this.alarmService.addAlarm(this.alarm).then(()=>{
  			console.log("it does not");
  			loading.dismiss();
  			this.nav.navigateBack('/alarm');
  		})
  	}
    this.modalCtrl.dismiss();
  }

}
