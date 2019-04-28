import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutPlayPage } from './workout-play.page';
var routes = [
    {
        path: '',
        component: WorkoutPlayPage
    }
];
var WorkoutPlayPageModule = /** @class */ (function () {
    function WorkoutPlayPageModule() {
    }
    WorkoutPlayPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WorkoutPlayPage]
        })
    ], WorkoutPlayPageModule);
    return WorkoutPlayPageModule;
}());
export { WorkoutPlayPageModule };
//# sourceMappingURL=workout-play.module.js.map