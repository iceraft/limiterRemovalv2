import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams , NavController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { ProfileService } from '../../../services/profile.service';


import { ProfilePage } from '../../profile/profile.page'
import { Profile } from '../../../interfaces/profile';
import { Playlist } from '../../../interfaces/playlist';
import { Workout } from '../../../interfaces/workout';

@Component({
  selector: 'app-workout-play',
  templateUrl: './workout-play.page.html',
  styleUrls: ['./workout-play.page.scss'],
})



export class WorkoutPlayPage implements OnInit {
  profile : Profile;
  workout : Workout;
  playlist : Playlist;
  list: [];
  typing: boolean = true;

	time: any ="seconds left";

	percent:number = 0;
	radius:number =100;

	timer: any = false;
	progress: any = 0;
  value =10 ;

	seconds : any =0;
	name="Workout Name";
  i: any =-2;
  rest: boolean = false;

  constructor(
          private afAuth: AngularFireAuth,
          private profileService: ProfileService,
  				private modalCtrl: ModalController,
  				private navParams: NavParams,
          public navCtrl: NavController,
  			 ) { }

  ngOnInit() {
    this.profileService.getProfile(this.afAuth.auth.currentUser.uid).subscribe(person=>{
      this.profile = person;
    })
    this.workout= this.navParams.get('workout');
    this.list =  this.navParams.get('list');
    this.play();

  }


  play(){

    this.i++;
    switch(this.i) { 

       case -1: { 
          this.name = "Okay Get Ready!";
          this.timerStart(this.value);
          break; 
       }

       case 999: { 
          this.name =this.profile.profileAlias;
          this.time ="You have completed this session."
          break; 
       } 

       default: {
         if(this.i< this.list.length){
          this.playlist = this.list[this.i];
          this.name=this.playlist.wName;
          this.value=this.playlist.wValue;
          if(this.playlist.wType == "Time")
          {
            this.typing = true;
            this.rest= true;
            this.timerStart(this.value);
          }
          else
          {
            this.rest=true;
            this.typing = false;
          }
         }else{
           this.i = 998;
           this.play();
         }
          break; 
       } 

    } 

  }


  timerStart(value){
    console.log(this.rest);
  	if(this.timer){
  		clearInterval(this.timer);
  	}

  	this.timer = false;
  	this.percent = 0;
  	this.progress = 0;

  	this.seconds = value;


  	this.timer = setInterval(() =>
  	{
  		if(this.seconds == this.progress){
  			clearInterval(this.timer);
  		}

  		this.percent = Math.floor((this.progress/ this.seconds) * 100);
  		this.progress ++;

  		this.time = Math.floor(this.seconds - this.progress);
  		
      if(this.time <= -1 ){
  			this.time="Done";

        if(this.rest === true){
          this.resting(value);
        }else {
          this.play();
        }
          
  		}
  	},1000)
  }

resting(value){
  value = Math.floor(value/2);
  this.typing = true;
  this.name = "resting";
  this.rest= false;
  this.timerStart(value);
}

complete(){
  this.profile.profileTotalCalory = this.profile.profileTotalCalory + this.workout.workoutTotalCalorie;
  this.profileService.updateProfile(this.profile,this.afAuth.auth.currentUser.uid);
  this.navCtrl.navigateRoot('profile');
  this.modalCtrl.dismiss().then(next=>
    this.modalCtrl.dismiss()
    );
}


}

