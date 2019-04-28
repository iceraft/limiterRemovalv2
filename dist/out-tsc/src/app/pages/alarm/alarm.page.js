import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlarmService } from '../../services/alarm.service';
import { AlarmAddPage } from './alarm-add/alarm-add.page';
var AlarmPage = /** @class */ (function () {
    function AlarmPage(alarmService, modalCtrl, afAuth, actionSheetController) {
        this.alarmService = alarmService;
        this.modalCtrl = modalCtrl;
        this.afAuth = afAuth;
        this.actionSheetController = actionSheetController;
    }
    AlarmPage.prototype.ngOnInit = function () {
        var _this = this;
        this.alarmService.getAlarms().subscribe(function (res) {
            _this.alarms = res;
            console.log(_this.alarms);
        });
    };
    AlarmPage.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: AlarmAddPage,
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
    AlarmPage.prototype.remove = function (alarm) {
        this.alarmService.removeAlarm(alarm.id);
    };
    AlarmPage.prototype.enable = function (alarm) {
        console.log(alarm);
        if (alarm.alarmEnabled == true) {
            alarm.alarmEnabled = false;
        }
        else {
            alarm.alarmEnabled = true;
        }
        this.alarmService.updateAlarm(alarm, alarm.id);
    };
    AlarmPage.prototype.edit = function (alarm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: AlarmAddPage,
                            backdropDismiss: false,
                            componentProps: {
                                alarm: alarm,
                                alarmID: alarm.id,
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AlarmPage.prototype.alarmAct = function (alarm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Are you sure you want to delete " + alarm.alarmTitle,
                            buttons: [{
                                    text: 'Yes',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.remove(alarm);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
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
    AlarmPage = tslib_1.__decorate([
        Component({
            selector: 'app-alarm',
            templateUrl: './alarm.page.html',
            styleUrls: ['./alarm.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlarmService,
            ModalController,
            AngularFireAuth,
            ActionSheetController])
    ], AlarmPage);
    return AlarmPage;
}());
export { AlarmPage };
//# sourceMappingURL=alarm.page.js.map