import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkoutService } from '../../../services/workout.service';
var WorkoutAddPage = /** @class */ (function () {
    function WorkoutAddPage(modalCtrl, workoutService, afAuth, db, nav, loadingController, navParams) {
        this.modalCtrl = modalCtrl;
        this.workoutService = workoutService;
        this.afAuth = afAuth;
        this.db = db;
        this.nav = nav;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.worked = {
            workoutCreatedBy: "",
            workoutTitle: "",
            workoutList: [{
                    wName: 'Crunch',
                    wType: 'Interval',
                    wValue: 18
                },
                {
                    wName: 'Plank',
                    wType: 'Time',
                    wValue: 10
                },
                {
                    wName: 'Pullup',
                    wType: 'Interval',
                    wValue: 10
                },
                {
                    wName: 'Squats',
                    wType: 'Interval',
                    wValue: 10
                }],
            workoutLastEdit: "",
            workoutCategory: "",
            workoutTotalCalorie: 0,
        };
        this.workoutForm = new FormGroup({
            workout1: new FormControl("", [Validators.compose([Validators.required])]),
        });
        this.binForm = new FormGroup({});
        this.count = 1;
        this.cuont = 0;
        this.workouts = [
            {
                wName: 'Crunch',
                wType: 'Interval'
            },
            {
                wName: 'Plank',
                wType: 'Time'
            },
            {
                wName: 'Pullup',
                wType: 'Interval'
            },
            {
                wName: 'Squats',
                wType: 'Interval'
            },
            {
                wName: 'Rope Skip',
                wType: 'Time'
            },
            {
                wName: 'Wall Sit',
                wType: 'Time'
            },
            {
                wName: 'Bicycle Crunch',
                wType: 'Interval'
            },
            {
                wName: 'Burpee',
                wType: 'Interval'
            },
            {
                wName: 'Pushup',
                wType: 'Interval'
            },
        ];
    }
    WorkoutAddPage.prototype.ngOnInit = function () {
    };
    WorkoutAddPage.prototype.addControl = function () {
        this.count++;
        this.workoutForm.addControl('workout' + this.count, new FormControl('', Validators.compose([Validators.required])));
    };
    WorkoutAddPage.prototype.removeControl = function (control) {
        this.workoutForm.removeControl(control.key);
        this.count--;
    };
    WorkoutAddPage.prototype.saveWorkout = function () {
        var _this = this;
        //hardcode adding regiments
        this.worked.workoutCreatedBy = this.afAuth.auth.currentUser.uid;
        this.worked.workoutLastEdit = new Date().toString();
        this.worked.workoutCategory = "Moderate";
        this.worked.workoutTotalCalorie = 164;
        this.workoutService.addWorkout(this.worked).then(function () {
            console.log("it does not");
            _this.modalCtrl.dismiss();
            _this.nav.navigateBack('/workout');
        });
    };
    WorkoutAddPage = tslib_1.__decorate([
        Component({
            selector: 'app-workout-add',
            templateUrl: './workout-add.page.html',
            styleUrls: ['./workout-add.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            WorkoutService,
            AngularFireAuth,
            AngularFirestore,
            NavController,
            LoadingController,
            NavParams])
    ], WorkoutAddPage);
    return WorkoutAddPage;
}());
export { WorkoutAddPage };
//# sourceMappingURL=workout-add.page.js.map