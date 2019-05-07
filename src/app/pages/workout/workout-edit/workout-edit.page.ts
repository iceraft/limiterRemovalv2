import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams,LoadingController } from '@ionic/angular';

import { WorkoutService } from '../../../services/workout.service';
import { WorkoutPlayPage } from '../workout-play/workout-play.page';
import { Workout } from '../../../interfaces/workout';

@Component({
  selector: 'app-workout-edit',
  templateUrl: './workout-edit.page.html',
  styleUrls: ['./workout-edit.page.scss'],
})
export class WorkoutEditPage implements OnInit {

	workout: Workout ;


  constructor(
          private navParams: NavParams,
          private route:ActivatedRoute,
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

  async playWorkout(item,list){
    const modal = await this.modalCtrl.create({
      component: WorkoutPlayPage,
      backdropDismiss: false,
      componentProps: {
      workout: item,
      list: list,
    }
   });
    return await modal.present();

  }

}
