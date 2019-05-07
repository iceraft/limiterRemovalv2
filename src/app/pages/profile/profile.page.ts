import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';;
import { LoadingController, ModalController, } from '@ionic/angular';
import { Profile } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';
import { ProfileEditPage } from './profile-edit/profile-edit.page';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	profile: Profile={
    profileAlias: "defaultAlias",
    profileGender: true,
    profileWeight: 0,
    profileHeight: 0,
    profileTotalCalory: 0,
    profileJoinSince: new Date().getTime(),
    profileFriends: [],
  };
  gender= "unkown";
	user ={};
	profileId= null;


  constructor( public afAuth: AngularFireAuth,
  			   public db: AngularFirestore,
  			   private profileService: ProfileService,
  			   private loadingController: LoadingController,
  			   private modalCtrl: ModalController,	
  			   ) { 
  	
  }

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
    // if(this.profile.profileGender == true){
    //   this.gender="Female";
    // }else{
    //   this.gender="Male"
    // }

  	
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
