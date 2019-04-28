import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { WorkoutEditPage } from './workout-edit.page';
var routes = [
    {
        path: '',
        component: WorkoutEditPage
    }
];
var WorkoutEditPageModule = /** @class */ (function () {
    function WorkoutEditPageModule() {
    }
    WorkoutEditPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [WorkoutEditPage],
            entryComponents: [WorkoutEditPage],
        })
    ], WorkoutEditPageModule);
    return WorkoutEditPageModule;
}());
export { WorkoutEditPageModule };
//# sourceMappingURL=workout-edit.module.js.map