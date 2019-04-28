import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController , ActionSheetController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../interfaces/workout';
import { WorkoutAddPage } from './workout-add/workout-add.page';
import { WorkoutEditPage } from './workout-edit/workout-edit.page';

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
              public actionSheetController: ActionSheetController,
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

  async remove(item) {
      const actionSheet = await this.actionSheetController.create({
      header: item.workoutTitle,
      buttons: [{
        text: 'Yes',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.workoutService.removeWorkout(item.id);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
		
	}

   async workoutAct(item){
   const modal = await this.modalCtrl.create({
      component: WorkoutEditPage,
      backdropDismiss: false,
      componentProps: {
      workout: item,
      workoutID: item.id,
   }
   });
   return await modal.present();
   }
}
