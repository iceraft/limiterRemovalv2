import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { Playlist } from '../../../interfaces/playlist';
import { Workout } from '../../../interfaces/workout'

@Component({
  selector: 'app-workout-play',
  templateUrl: './workout-play.page.html',
  styleUrls: ['./workout-play.page.scss'],
})



export class WorkoutPlayPage implements OnInit {
  workout : Workout;
  playlist : Playlist;
  list: [];
  typing: boolean = true;

	time: any ="seconds left";

	percent:number = 0;
	radius:number =100;
	fulltime : any = '00:00:20';

	timer: any = false;
	progress: any = 0;

	minutes: number=  0;
	seconds : any =0;
	name="Workout Name";
  i: any =-2;
  rest: boolean = false;

  constructor(
  				private modalCtrl: ModalController,
  				private navParams: NavParams,
  			 ) { }

  ngOnInit() {

    this.workout= this.navParams.get('workout');
    this.list =  this.navParams.get('list');
    this.play();

  }


  play(){
    
    this.i++;
    switch(this.i) { 

       case -1: { 
          this.name = "Okay Get Ready!";
          this.timerStart();
          break; 
       }

       case 100: { 
          this.name ="Your DONE";
          console.log("end");
          break; 
       } 

       default: { 
         if(this.i< this.list.length){
          this.playlist = this.list[this.i];
          this.name=this.playlist.wName;
          if(this.playlist.wType == "Time"){
            this.typing = true;
            this.rest= true;
            this.timerStart();
          }else{
            this.rest=true;
            this.typing = false;
          }
         }else{
           this.i = 99;
         }
          break; 
       } 

    } 

  }

resting(){
this.typing = true;
this.name = "resting";
this.rest= false;
this.timerStart();
}


  timerStart(){
    console.log(this.rest);
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

        if(this.rest === true){
          this.resting();
        }else {
          this.play();
        }
          
  		}
  	},1000)
  }

}

