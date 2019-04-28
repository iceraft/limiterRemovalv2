import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfileEditPage } from './profile-edit.page';
var routes = [
    {
        path: '',
        component: ProfileEditPage
    }
];
var ProfileEditPageModule = /** @class */ (function () {
    function ProfileEditPageModule() {
    }
    ProfileEditPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProfileEditPage],
            entryComponents: [ProfileEditPage],
        })
    ], ProfileEditPageModule);
    return ProfileEditPageModule;
}());
export { ProfileEditPageModule };
//# sourceMappingURL=profile-edit.module.js.map