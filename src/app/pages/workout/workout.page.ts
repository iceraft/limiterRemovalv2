import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../interfaces/workout';
import { WorkoutAddPage } from './workout-add/workout-add.page';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

		workouts: Workout [];

  constructor(private db: AngularFirestore,
              private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              private workoutService: WorkoutService,
              ) { }

  ngOnInit() {

  	this.workoutService.getWorkouts().subscribe(res=>{
			this.workouts = res;
		})

  }

  async add() {
   const modal = await this.modalCtrl.create({
    	component: WorkoutAddPage,
    	backdropDismiss: false,
   });
   return await modal.present();
  }

  	remove(item) {
		this.workoutService.removeWorkout(item.id);
	}

}
