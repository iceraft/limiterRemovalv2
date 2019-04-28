import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
;
import { LoadingController, ModalController, } from '@ionic/angular';
import { ProfileService } from '../../services/profile.service';
import { ProfileEditPage } from './profile-edit/profile-edit.page';
var ProfilePage = /** @class */ (function () {
    function ProfilePage(afAuth, db, profileService, loadingController, modalCtrl) {
        this.afAuth = afAuth;
        this.db = db;
        this.profileService = profileService;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.profile = {
            profileAlias: "defaultAlias",
            profileGender: true,
            profileWeight: 0,
            profileHeight: 0,
            profileTotalCalory: 0,
            profileJoinSince: new Date().getTime(),
            profileFriends: [],
        };
        this.user = {};
        this.profileId = null;
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.profileId = user.uid;
                if (_this.profileId) {
                    _this.loadProfile();
                }
            }
        });
    };
    ProfilePage.prototype.loadProfile = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading..',
                            spinner: 'crescent',
                            duration: 10
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.profileService.getProfile(this.profileId).subscribe(function (res) {
                            loading.dismiss();
                            _this.profile = res;
                            console.log(_this.profile);
                            if (_this.profile == null) {
                                _this.db.doc("profiles/" + _this.profileId).set({
                                    profileAlias: "",
                                    profileGender: true,
                                    profileWeight: 10,
                                    profileHeight: 10,
                                    profileTotalCalory: 0,
                                    profileJoinSince: new Date().getTime(),
                                    profileFriends: [],
                                });
                            }
                            if (_this.profile.profileAlias == "") {
                                _this.editProfile(_this.profile, _this.profileId);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.editProfile = function (profile, profileID) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: ProfileEditPage,
                            backdropDismiss: false,
                            componentProps: {
                                profile: profile,
                                profileID: profileID,
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
    ProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.page.html',
            styleUrls: ['./profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth,
            AngularFirestore,
            ProfileService,
            LoadingController,
            ModalController])
    ], ProfilePage);
    return ProfilePage;
}());
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map