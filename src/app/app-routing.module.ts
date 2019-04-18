import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'workout', pathMatch: 'full' },
	{ path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
	{ path: 'profile/edit', loadChildren: './pages/profile-edit/profile-edit.module#ProfileEditPageModule' },
	{ path: 'profile/:id/edit', loadChildren: './pages/profile-edit/profile-edit.module#ProfileEditPageModule' },
	{ path: 'workout', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
	{ path: 'workout/add', loadChildren: './pages/workout/workout-add/workout-add.module#WorkoutAddPageModule' },
	{ path: 'workout/:id', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
	{ path: 'workout/:id/edit', loadChildren: './pages/workout/workout-edit/workout-edit.module#WorkoutEditPageModule' },
	{ path: 'workout/:id/play', loadChildren: './pages/workout/workout-play/workout-play.module#WorkoutPlayPageModule' },
	{ path: 'alarm', loadChildren: './pages/alarm/alarm.module#AlarmPageModule' },
	{ path: 'alarm/:id', loadChildren: './pages/alarm/alarm.module#AlarmPageModule' },
	{ path: 'alarm/add', loadChildren: './pages/alarm/alarm-add/alarm-add.module#AlarmAddPageModule' },
	{ path: 'alarm/:id/add', loadChildren: './pages/alarm/alarm-add/alarm-add.module#AlarmAddPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
