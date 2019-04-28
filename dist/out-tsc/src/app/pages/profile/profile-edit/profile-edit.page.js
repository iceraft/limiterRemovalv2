import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { ProfileService } from '../../../services/profile.service';
var ProfileEditPage = /** @class */ (function () {
    function ProfileEditPage(modalCtrl, profileService, db, nav, navParams) {
        this.modalCtrl = modalCtrl;
        this.profileService = profileService;
        this.db = db;
        this.nav = nav;
        this.navParams = navParams;
        this.profiles = {
            profileAlias: "defaultAlias",
            profileGender: true,
            profileWeight: 0,
            profileHeight: 0,
            profileTotalCalory: 0,
            profileJoinSince: new Date().getTime(),
            profileFriends: [],
        };
    }
    ProfileEditPage.prototype.ngOnInit = function () {
        this.profileID = this.navParams.get('profileID');
        this.profiles = this.navParams.get('profile');
        console.log(this.profiles);
    };
    ProfileEditPage.prototype.onSubmit = function () {
        var _this = this;
        this.profileService.updateProfile(this.profiles, this.profileID).then(function () {
            console.log("it does");
            _this.nav.navigateBack('profile');
        });
        this.modalCtrl.dismiss();
    };
    ProfileEditPage = tslib_1.__decorate([
        Component({
            selector: 'app-profile-edit',
            templateUrl: './profile-edit.page.html',
            styleUrls: ['./profile-edit.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            ProfileService,
            AngularFirestore,
            NavController,
            NavParams])
    ], ProfileEditPage);
    return ProfileEditPage;
}());
export { ProfileEditPage };
//# sourceMappingURL=profile-edit.page.js.map