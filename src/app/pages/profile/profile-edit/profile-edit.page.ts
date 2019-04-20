import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { Profile } from '../../../interfaces/profile'
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

	profiles: Profile = {
		profileAlias: "defaultAlias",
		profileGender: true,
		profileWeight: 0,
		profileHeight: 0,
		profileTotalCalory: 0,
		profileJoinSince: new Date().getTime(),
		profileFriends: [],
	};
	profileID: "";

  constructor(private modalCtrl: ModalController,
              private profileService: ProfileService,
              public db: AngularFirestore,
              private nav: NavController,
              private navParams: NavParams){
  }


  ngOnInit() {
  	this.profileID= this.navParams.get('profileID');
  	this.profiles=this.navParams.get('profile');
  	console.log(this.profiles);

  }

    onSubmit(){
    this.profileService.updateProfile(this.profiles, this.profileID).then(()=>{
  			console.log("it does");
  			this.nav.navigateBack('profile');
  		})
    this.modalCtrl.dismiss();
  }

}
