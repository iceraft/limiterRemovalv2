import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';

import { WorkoutService } from '../../../services/workout.service';
import { Workout } from '../../../interfaces/workout';

@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.page.html',
  styleUrls: ['./workout-edit.page.scss'],
})
export class WorkoutEditPage implements OnInit {

	workout: Workout;

  constructor(private navParams: NavParams,
  			  private workoutService: WorkoutService,
  			  private loadingController: LoadingController,
  			  private modalCtrl: ModalController) { }

  ngOnInit() {
  		this.loadWorkout();
  }

  async loadWorkout(){
  	const loading = await this.loadingController.create({
        message: 'Loading..',
        spinner: 'crescent',
    	duration: 2000
    })

  	await loading.present();
  	
 	this.workout = this.navParams.get('workout');

 	if(this.workout){
 		loading.dismiss();
 	}
  }

  playWorkout(list){
    
  }

}
