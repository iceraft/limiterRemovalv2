import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutAddPage } from './workout-add.page';
var routes = [
    {
        path: '',
        component: WorkoutAddPage
    }
];
var WorkoutAddPageModule = /** @class */ (function () {
    function WorkoutAddPageModule() {
    }
    WorkoutAddPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WorkoutAddPage],
            entryComponents: [WorkoutAddPage],
        })
    ], WorkoutAddPageModule);
    return WorkoutAddPageModule;
}());
export { WorkoutAddPageModule };
//# sourceMappingURL=workout-add.module.js.map