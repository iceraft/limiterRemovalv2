import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private profilesCollection: AngularFirestoreCollection<Profile>;
  private profiles: Observable<Profile[]>;

  constructor(db : AngularFirestore,
  			  ) { 
  	this.profilesCollection = db.collection<Profile>('profiles');

  	this.profiles = this.profilesCollection.snapshotChanges().pipe(
  		map(actions => {
  			return actions.map(a =>{
  				const data = a.payload.doc.data();
  				const id = a.payload.doc.id;
  				return {id, ...data};
  			});
  		})
  	);
  }

  getProfiles() {
  	return this.profiles;
  }

  getProfile(id) {
  	return this.profilesCollection.doc<Profile>(id).valueChanges();
  }

  updateProfile(profile :Profile, id: string){
  	return this.profilesCollection.doc(id).update(profile);
  }

  addProfile(profile: Profile){
  	return this.profilesCollection.add(profile);
  }

  removeProfiel(id) {
  	return this.profilesCollection.doc(id).delete();
  }
}
