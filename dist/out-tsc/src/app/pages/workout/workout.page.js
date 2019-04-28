import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutAddPage } from './workout-add/workout-add.page';
import { WorkoutEditPage } from './workout-edit/workout-edit.page';
var WorkoutPage = /** @class */ (function () {
    function WorkoutPage(db, modalCtrl, afAuth, workoutService, actionSheetController) {
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.workoutService = workoutService;
        this.actionSheetController = actionSheetController;
    }
    WorkoutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.workoutService.getWorkouts().subscribe(function (res) {
            _this.workouts = res;
        });
    };
    WorkoutPage.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: WorkoutAddPage,
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WorkoutPage.prototype.remove = function (item) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: item.workoutTitle,
                            buttons: [{
                                    text: 'Yes',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.workoutService.removeWorkout(item.id);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WorkoutPage.prototype.workoutAct = function (workout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: WorkoutEditPage,
                            backdropDismiss: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    WorkoutPage = tslib_1.__decorate([
        Component({
            selector: 'app-workout',
            templateUrl: './workout.page.html',
            styleUrls: ['./workout.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore,
            ModalController,
            AngularFireAuth,
            WorkoutService,
            ActionSheetController])
    ], WorkoutPage);
    return WorkoutPage;
}());
export { WorkoutPage };
//# sourceMappingURL=workout.page.js.map