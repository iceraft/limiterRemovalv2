import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var WorkoutService = /** @class */ (function () {
    function WorkoutService(db) {
        this.workoutCollection = db.collection('workouts');
        this.workouts = this.workoutCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
    }
    WorkoutService.prototype.getWorkouts = function () {
        return this.workouts;
    };
    WorkoutService.prototype.getWorkout = function (id) {
        return this.workoutCollection.doc(id).valueChanges();
    };
    WorkoutService.prototype.updateWorkout = function (workout, id) {
        return this.workoutCollection.doc(id).update(workout);
    };
    WorkoutService.prototype.addWorkout = function (workout) {
        return this.workoutCollection.add(workout);
    };
    WorkoutService.prototype.removeWorkout = function (id) {
        return this.workoutCollection.doc(id).delete();
    };
    WorkoutService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], WorkoutService);
    return WorkoutService;
}());
export { WorkoutService };
//# sourceMappingURL=workout.service.js.map