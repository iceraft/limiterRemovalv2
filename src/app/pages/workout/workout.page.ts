import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ModalController , ActionSheetController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../interfaces/workout';
import { WorkoutAddPage } from './workout-add/workout-add.page';
import { WorkoutEditPage } from './workout-edit/workout-edit.page';

import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';
import { ProfileEditPage } from '../profile/profile-edit/profile-edit.page';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {

    workouts: Workout [];
    user ={};
    profileId= null;
    profile: Profile={
    profileAlias: "defaultAlias",
    profileGender: true,
    profileWeight: 0,
    profileHeight: 0,
    profileTotalCalory: 0,
    profileJoinSince: new Date().getTime(),
    profileFriends: [],
  }

  constructor(private db: AngularFirestore,
              private modalCtrl: ModalController,
              public afAuth: AngularFireAuth,
              private loadingController: LoadingController,
              private profileService: ProfileService,
              private workoutService: WorkoutService,
              public actionSheetController: ActionSheetController,
              ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user=>{
        if(user) {
            this.user = user;
      this.profileId = user.uid;
        if(this.profileId) {
          this.loadProfile();
        }
    }
    })

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
        }
      }]
    });
    await actionSheet.present();
	}

   async workoutAct(item,num){
   const modal = await this.modalCtrl.create({
      component: WorkoutEditPage,
      backdropDismiss: false,
      componentProps: {
      workout: item,
      var: num,
   }
   });
   return await modal.present();
   }

   async loadProfile(){
    const loading = await this.loadingController.create({
        message: 'Loading..',
        spinner: 'crescent',
      duration: 10
    })

    await loading.present();
    
    this.profileService.getProfile(this.profileId).subscribe(res =>{
      loading.dismiss();
      this.profile = res;
      if(this.profile == null){
        this.db.doc(`profiles/`+this.profileId).set({
        profileAlias:"",
        profileGender: true,
        profileWeight: 10,
        profileHeight: 10,
        profileTotalCalory: 0,
        profileJoinSince: new Date().getTime(),
        profileFriends: [],
        })
      }
    if(this.profile.profileAlias ==  ""){
      this.editProfile(this.profile, this.profileId);
    }
    })
  }

  async editProfile(profile:{}, profileID: string) {
    const modal = await this.modalCtrl.create({
      component: ProfileEditPage,
      backdropDismiss: false,
      componentProps: {
      profile: profile,
      profileID: profileID,
   }
    });
    return await modal.present();
   } 
}
