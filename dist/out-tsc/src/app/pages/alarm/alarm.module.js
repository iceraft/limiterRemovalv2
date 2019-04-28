import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlarmPage } from './alarm.page';
var routes = [
    {
        path: '',
        component: AlarmPage
    }
];
var AlarmPageModule = /** @class */ (function () {
    function AlarmPageModule() {
    }
    AlarmPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AlarmPage]
        })
    ], AlarmPageModule);
    return AlarmPageModule;
}());
export { AlarmPageModule };
//# sourceMappingURL=alarm.module.js.map