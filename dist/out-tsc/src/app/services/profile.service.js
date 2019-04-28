import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
var ProfileService = /** @class */ (function () {
    function ProfileService(db) {
        this.profilesCollection = db.collection('profiles');
        this.profiles = this.profilesCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
    }
    ProfileService.prototype.getProfiles = function () {
        return this.profiles;
    };
    ProfileService.prototype.getProfile = function (id) {
        return this.profilesCollection.doc(id).valueChanges();
    };
    ProfileService.prototype.updateProfile = function (profile, id) {
        return this.profilesCollection.doc(id).update(profile);
    };
    ProfileService.prototype.addProfile = function (profile) {
        return this.profilesCollection.add(profile);
    };
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map