import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Alarm } from '../interfaces/alarm';

@Injectable({
  providedIn: 'root'
})
export class AlarmService {

 private alarmsCollection: AngularFirestoreCollection<Alarm>;
  private alarms: Observable<Alarm[]>;

  constructor(db : AngularFirestore,
  			  ) { 
  	this.alarmsCollection = db.collection<Alarm>('alarms');

  	this.alarms = this.alarmsCollection.snapshotChanges().pipe(
  		map(actions => {
  			return actions.map(a =>{
  				const data = a.payload.doc.data();
  				const id = a.payload.doc.id;
  				return {id, ...data};
  			});
  		})
  	);
  }

  getAlarms() {
  	return this.alarms;
  }

  getAlarm(id) {
  	return this.alarmsCollection.doc<Alarm>(id).valueChanges();
  }

  updateAlarm(alarm :Alarm, id: string){
  	return this.alarmsCollection.doc(id).update(alarm);
  }

  addAlarm(alarm: Alarm){
  	return this.alarmsCollection.add(alarm);
  }

  removeAlarm(id) {
  	return this.alarmsCollection.doc(id).delete();
  }
}
