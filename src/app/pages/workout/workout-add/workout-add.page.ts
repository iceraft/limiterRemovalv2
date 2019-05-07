import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { Validators , FormControl} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { Playlist } from '../../../interfaces/playlist'
import { Workout } from '../../../interfaces/workout'
import { WorkoutService } from '../../../services/workout.service';


@Component({
  selector: 'app-workout-add',
  templateUrl: './workout-add.page.html',
  styleUrls: ['./workout-add.page.scss'],
})


export class WorkoutAddPage implements OnInit {

  workout :Workout= {
    workoutCreatedBy: "",
    workoutTitle: "",
    workoutList: [],
    workoutLastEdit: "",
    workoutCategory: "",
    workoutTotalCalorie: 0,
  }

  playlist: Playlist={
    wName:"",
    wType:"",
    wValue:0
  };


  exercises: any[] = [
    {
      wName: 'Crunch',
      wType: 'Interval',
      wValue:2
    },
    {
      wName: 'Plank',
      wType: 'Time',
      wValue:5
    },
    {     
      wName: 'Pullup',
      wType: 'Interval',
      wValue:3
    },
     {
      wName: 'Squats',
      wType: 'Interval',
      wValue:2
    },
    {
      wName: 'Rope Skip',
      wType: 'Time',
      wValue:8
    },
    {
      wName: 'Wall Sit',
      wType: 'Time',
      wValue:1
    },
    {
      wName: 'Bicycle Crunch',
      wType: 'Interval',
      wValue:20
    },
    { 
      wName: 'Burpee',
      wType: 'Interval',
      wValue:8
    },
    { 
      wName: 'Pushup',
      wType: 'Interval',
      wValue:6
  },]

  compare:any = {
    wName:"",
    wType:""
  }

  calVal :number;

  constructor(private modalCtrl: ModalController,
              private workoutService: WorkoutService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private nav: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams){ }

  ngOnInit() {

    

  }



  addExercise(){
    var play: Playlist ={
      wName: this.playlist.wName,
      wType: this.playlist.wType,
      wValue: this.playlist.wValue
    }
    this.workout.workoutTotalCalorie = this.workout.workoutTotalCalorie + Math.floor(this.playlist.wValue * this.calVal);
    this.workout.workoutList.push(play);
    console.log(this.workout.workoutList);
  }


  saveWorkout(){
    this.workout.workoutCreatedBy=this.afAuth.auth.currentUser.uid;
    this.workout.workoutLastEdit= new Date().toString();
    this.workout.workoutCategory = "Moderate";
    this.workoutService.addWorkout(this.workout).then(()=>{
        console.log("it does not");
        this.modalCtrl.dismiss();
      })
    }


  changed(thing){
    this.exercises.forEach(item=>{
      this.compare = item;
      if (this.compare.wName == thing)
       this.playlist.wType = this.compare.wType;
       this.calVal = this.compare.wValue;
    })
  }
  
}




    // //hardcode adding regiments
    // this.worked.workoutCreatedBy=this.afAuth.auth.currentUser.uid;
    // this.worked.workoutLastEdit= new Date().toString();
    // this.worked.workoutCategory = "Moderate";
    // this.worked.workoutTotalCalorie = 164;

  // addControl(){
  //   this.count++;
  //   this.workoutForm.addControl('workout' + this.count, new FormControl('', Validators.compose([Validators.required])));
  // }

  //   removeControl(control){
  //   this.workoutForm.removeControl(control.key);
  //   this.count--;
  // }

  // worked :Workout= {
  //   workoutCreatedBy: "",
  //   workoutTitle: "",
  //   workoutList: [{
  //     wName: 'Crunch',
  //     wType: 'Interval',
  //     wValue: 18
  //   },
  //   {
  //     wName: 'Plank',
  //     wType: 'Time',
  //     wValue: 10
  //   },
  //   {
  //     wName: 'Pullup',
  //     wType: 'Interval',
  //     wValue: 10
  //   },
  //   {
  //     wName: 'Squats',
  //     wType: 'Interval',
  //     wValue: 10
  //   }],
  //   workoutLastEdit: "",
  //   workoutCategory: "",
  //   workoutTotalCalorie: 0,
  // }

  //   public workoutForm: FormGroup = new FormGroup({
  //     workout1: new FormControl("",[Validators.compose([Validators.required])]),
  //   });

  // public binForm: FormGroup = new FormGroup({});

  //   private count: number = 1;
  //   private cuont: number = 0;

  //   workoutID: "";