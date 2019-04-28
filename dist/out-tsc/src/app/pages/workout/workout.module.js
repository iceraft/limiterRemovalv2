import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutPage } from './workout.page';
import { FirebaseUIModule } from 'firebaseui-angular';
var routes = [
    {
        path: '',
        component: WorkoutPage
    }
];
var WorkoutPageModule = /** @class */ (function () {
    function WorkoutPageModule() {
    }
    WorkoutPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                FirebaseUIModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WorkoutPage]
        })
    ], WorkoutPageModule);
    return WorkoutPageModule;
}());
export { WorkoutPageModule };
//# sourceMappingURL=workout.module.js.map