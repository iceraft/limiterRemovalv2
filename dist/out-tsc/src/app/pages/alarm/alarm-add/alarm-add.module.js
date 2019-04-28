import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlarmAddPage } from './alarm-add.page';
var routes = [
    {
        path: '',
        component: AlarmAddPage
    }
];
var AlarmAddPageModule = /** @class */ (function () {
    function AlarmAddPageModule() {
    }
    AlarmAddPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AlarmAddPage],
            entryComponents: [AlarmAddPage],
        })
    ], AlarmAddPageModule);
    return AlarmAddPageModule;
}());
export { AlarmAddPageModule };
//# sourceMappingURL=alarm-add.module.js.map