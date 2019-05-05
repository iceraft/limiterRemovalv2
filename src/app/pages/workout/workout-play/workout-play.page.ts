import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { Playlist } from '../../../interfaces/playlist'


@Component({
  selector: 'app-workout-play',
  templateUrl: './workout-play.page.html',
  styleUrls: ['./workout-play.page.scss'],
})



export class WorkoutPlayPage implements OnInit {
  playlit : Playlist;
	list:[{
		name: "You are",
		time: 5
	},
	{
		name: "My one",
		time: 5
	},
	{
		name: "Desire",
		time: 2
	}];

	time: any ="seconds left";

	percent:number = 0;
	radius:number =100;
	fulltime : any = '00:00:20';

	timer: any = false;
	progress: any = 0;

	minutes: number=  0;
	seconds : any =0;
	name="Workout Name";
  i=0;


  constructor(
  				private modalCtrl: ModalController,
  				//private navParams: NavParams,
  			 ) { }

  ngOnInit() {

  	//this.list = this.navParams.get('list');
    this.list.forEach(item=>{
        this.playlit = item;
        console.log(this.playlit);
      }
    )

  }

  timerStart(){

  	if(this.timer){
  		clearInterval(this.timer);
  	}

  	this.timer = false;
  	this.percent = 0;
  	this.progress = 0;

  	let timeSplit = this.fulltime.split(':');
	this.minutes = timeSplit[1];
	this.seconds = timeSplit[2];

  	let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
  	totalSeconds--;


  	this.timer = setInterval(() =>
  	{
  		if(totalSeconds == this.progress){
  			clearInterval(this.timer);
  		}

  		this.percent = Math.floor((this.progress/ totalSeconds) * 100);
  		this.progress ++;

  		this.time = Math.floor(totalSeconds - this.progress);
  		if(this.time <= -1 ){
  			this.time="Done";
  		}

  	},1000)

  }

}

// import { Component, OnInit } from '@angular/core';
// import { ModalController, NavParams } from '@ionic/angular';

// @Component({
//   selector: 'app-workout-play',
//   templateUrl: './workout-play.page.html',
//   styleUrls: ['./workout-play.page.scss'],
// })
// export class WorkoutPlayPage implements OnInit {

// 	list: [{
// 		wName: "You are",
// 		wSec: 5
// 	},
// 	{
// 		wName: "My Fire",
// 		wSec: 2
// 	},
// 	{
// 		wName: "My One",
// 		wSec: 5
// 	}];
	

// 	time: any ="seconds left";

// 	percent:number = 0;
// 	radius:number =100;
// 	// fulltime : any = '00:00:20';

// 	timer: any = false;
// 	progress: any = 0;

// 	minutes: number=  0;
// 	seconds : any =0;

// 	i: 0;

// 	name="";

//   constructor(	private modalCtrl: ModalController,
//   				//private navParams: NavParams,
//   			 ) { }

//   ngOnInit() {

//   	//this.list = this.navParams.get('list');
//   	//this.name=this.list[this.i].wName;
//   	console.log(name);
//   	console.log(this.list[this.i].wSec);
//   	console.log(this.list[this.i].wName);
  	
//   }


//   timerStart(){

//   	if(this.timer){
//   		clearInterval(this.timer);
//   	}

//   	this.timer = false;
//   	this.percent = 0;
//   	this.progress = 0;
//   	this.seconds= this.list[this.i].wSec;

// 	// let timeSplit = this.fulltime.split(':');
// 	// this.minutes = timeSplit[1];
// 	// this.seconds = timeSplit[2];

//   	let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
//   	totalSeconds--;


//   	this.timer = setInterval(() =>
//   	{
//   		if(totalSeconds == this.progress){
//   			clearInterval(this.timer);
//   		}

//   		this.percent = Math.floor((this.progress/ totalSeconds) * 100);
//   		this.progress ++;

//   		this.time = Math.floor(totalSeconds - this.progress);
//   		if(this.time <= -1 ){
//   			this.time="Done";
//   			this.i ++;
//   		}

//   	},1000)

//   }

// }

