import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, NavController, NavParams, LoadingController } from '@ionic/angular';
import { AlarmService } from '../../../services/alarm.service';
var AlarmAddPage = /** @class */ (function () {
    function AlarmAddPage(modalCtrl, alarmService, db, afAuth, nav, loadingController, navParams) {
        this.modalCtrl = modalCtrl;
        this.alarmService = alarmService;
        this.db = db;
        this.afAuth = afAuth;
        this.nav = nav;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.customSelectOptions = {
            header: 'Days',
            translucent: true
        };
        this.days = [{ name: 'Monday' }, { name: 'Tuesday' }, { name: 'Wednesday' }, { name: 'Thursday' }, { name: 'Friday' }, { name: 'Saturday' }, { name: 'Sunday' }];
    }
    AlarmAddPage.prototype.ngOnInit = function () {
        this.alarmID = this.navParams.get('alarmID');
        if (this.alarmID) {
            this.loadAlarm();
        }
        console.log(this.days);
    };
    AlarmAddPage.prototype.loadAlarm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading..',
                            spinner: 'crescent',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.alarmService.getAlarm(this.alarmID).subscribe(function (res) {
                            loading.dismiss();
                            _this.alarm = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AlarmAddPage.prototype.saveAlarm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Adding Your Data..',
                            spinner: 'crescent',
                            duration: 2000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.alarmID) {
                            this.alarmService.updateAlarm(this.alarm, this.alarmID).then(function () {
                                console.log("it does");
                                loading.dismiss();
                                _this.nav.navigateBack('/alarm');
                            });
                        }
                        else {
                            this.alarm.alarmCreatedBy = this.afAuth.auth.currentUser.uid;
                            this.alarmService.addAlarm(this.alarm).then(function () {
                                console.log("it does not");
                                loading.dismiss();
                                _this.nav.navigateBack('/alarm');
                            });
                        }
                        this.modalCtrl.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlarmAddPage = tslib_1.__decorate([
        Component({
            selector: 'app-alarm-add',
            templateUrl: './alarm-add.page.html',
            styleUrls: ['./alarm-add.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            AlarmService,
            AngularFirestore,
            AngularFireAuth,
            NavController,
            LoadingController,
            NavParams])
    ], AlarmAddPage);
    return AlarmAddPage;
}());
export { AlarmAddPage };
//# sourceMappingURL=alarm-add.page.js.map