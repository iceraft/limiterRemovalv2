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
    },
    {
      wName: 'Pullup',
      wType: 'Interval',
      wValue: 10
    },
    {
      wName: 'Squats',
      wType: 'Interval',
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

  saveWorkout(){
//hardcode adding regiments
    this.worked.workoutCreatedBy=this.afAuth.auth.currentUser.uid;
    this.worked.workoutLastEdit= new Date().toString();
    this.worked.workoutCategory = "Moderate";
    this.worked.workoutTotalCalorie = 164;
    this.workoutService.addWorkout(this.worked).then(()=>{
        console.log("it does not");
        this.modalCtrl.dismiss();
        this.nav.navigateBack('/workout');
      })
    }
  

}
