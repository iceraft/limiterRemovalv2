import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', redirectTo: 'workout', pathMatch: 'full' },
    { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
    { path: 'workout', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
    { path: 'workout/add', loadChildren: './pages/workout/workout-add/workout-add.module#WorkoutAddPageModule' },
    { path: 'workout/:id', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
    { path: 'workout/:id/edit', loadChildren: './pages/workout/workout-edit/workout-edit.module#WorkoutEditPageModule' },
    { path: 'workout/:id/play', loadChildren: './pages/workout/workout-play/workout-play.module#WorkoutPlayPageModule' },
    { path: 'alarm', loadChildren: './pages/alarm/alarm.module#AlarmPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map