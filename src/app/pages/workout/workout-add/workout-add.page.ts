import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators , FormArray, FormControl} from '@angular/forms';
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
		workoutList: [],
		workoutLastEdit: "",
		workoutCategory: "",
		workoutTotalCalorie: 0,
	}


	public workoutForm: FormGroup = new FormGroup({
      workout1: new FormControl("",[Validators.compose([Validators.required])]),
    });
    private count: number = 1;
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

}
