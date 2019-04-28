import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var AlarmService = /** @class */ (function () {
    function AlarmService(db) {
        this.alarmsCollection = db.collection('alarms');
        this.alarms = this.alarmsCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
    }
    AlarmService.prototype.getAlarms = function () {
        return this.alarms;
    };
    AlarmService.prototype.getAlarm = function (id) {
        return this.alarmsCollection.doc(id).valueChanges();
    };
    AlarmService.prototype.updateAlarm = function (alarm, id) {
        return this.alarmsCollection.doc(id).update(alarm);
    };
    AlarmService.prototype.addAlarm = function (alarm) {
        return this.alarmsCollection.add(alarm);
    };
    AlarmService.prototype.removeAlarm = function (id) {
        return this.alarmsCollection.doc(id).delete();
    };
    AlarmService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], AlarmService);
    return AlarmService;
}());
export { AlarmService };
//# sourceMappingURL=alarm.service.js.map