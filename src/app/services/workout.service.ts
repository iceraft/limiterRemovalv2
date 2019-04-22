import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Workout } from '../interfaces/workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutService {

  private workoutCollection: AngularFirestoreCollection<Workout>;
  private workouts: Observable<Workout[]>;

  constructor(db : AngularFirestore,
  			  ) { 
  	this.workoutCollection = db.collection<Workout>('workouts');

  	this.workouts = this.workoutCollection.snapshotChanges().pipe(
  		map(actions => {
  			return actions.map(a =>{
  				const data = a.payload.doc.data();
  				const id = a.payload.doc.id;
  				return {id, ...data};
  			});
  		})
  	);
  }

  getWorkouts() {
  	return this.workouts;
  }

  getWorkout(id) {
  	return this.workoutCollection.doc<Workout>(id).valueChanges();
  }

  updateWorkout(workout :Workout, id: string){
  	return this.workoutCollection.doc(id).update(workout);
  }

  addWorkout(workout: Workout){
  	return this.workoutCollection.add(workout);
  }

  removeWorkout(id) {
  	return this.workoutCollection.doc(id).delete();
  }
}



