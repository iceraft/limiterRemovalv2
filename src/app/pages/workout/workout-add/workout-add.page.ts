import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators , FormArray, FormControl} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Workout } from '../../../interfaces/workout'
import { WorkoutService } from '../../../services/workout.service';


@Component({
  selector: 'app-workout-add',
  templateUrl: './workout-add.page.html',
  styleUrls: ['./workout-add.page.scss'],
})
export class WorkoutAddPage implements OnInit {

	worked :Workout= {
		workoutCreatedBy: "",
		workoutTitle: "",
		workoutList: [{
      wName: 'Crunch',
      wType: 'Interval',
      wValue: 18
    },
    {
      wName: 'Plank',
      wType: 'Time',
      wValue: 10
    }],
		workoutLastEdit: "",
		workoutCategory: "",
		workoutTotalCalorie: 0,
	}


	public workoutForm: FormGroup = new FormGroup({
      workout1: new FormControl("",[Validators.compose([Validators.required])]),
    });

  public binForm: FormGroup = new FormGroup({});

    private count: number = 1;
    private cuont: number = 0;

    workoutID: "";
    workouts: any[] = [
    {
      wName: 'Crunch',
      wType: 'Interval'
    },
    {
      wName: 'Plank',
      wType: 'Time'
    },
    {
      wName: 'Pullup',
      wType: 'Interval'
    },
     {
      wName: 'Squats',
      wType: 'Interval'
    },
    {
      wName: 'Rope Skip',
      wType: 'Time'
    },
    {
      wName: 'Wall Sit',
      wType: 'Time'
    },
    {
      wName: 'Bicycle Crunch',
      wType: 'Interval'
    },
    {
      wName: 'Burpee',
      wType: 'Interval'
    },
    {
      wName: 'Pushup',
      wType: 'Interval'
    },]

  constructor(private modalCtrl: ModalController,
              private workoutService: WorkoutService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private nav: NavController,
              private loadingController: LoadingController,
              private navParams: NavParams){ }

  ngOnInit() {
  }

  addControl(){
    this.count++;
    this.workoutForm.addControl('workout' + this.count, new FormControl('', Validators.compose([Validators.required])));
  }



  removeControl(control){
    this.workoutForm.removeControl(control.key);
    this.count--;
  }

  saveAlarm(){
//hardcode adding regiments
  //    this.db.collection('regiments').add({
  //     session: "Stamina Workout",
  //     createdBy: this.afAuth.auth.currentUser.uid,
  //     workouts:[] = [
  //   {
  //     wName: 'Plank',
  //     wDuration:'10',
  //     wTimes:'0',
  //   },
  //   {
  //     wName: 'Bicycle Crunch',
  //     wDuration:'20',
  //     wTimes:'0',
  //   },
  //   {
  //     wName: 'Pullup',
  //     wDuration:'20',
  //     wTimes:'0',
  //   },]
  //   });
  }

}
