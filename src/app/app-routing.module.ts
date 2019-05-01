import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'workout', pathMatch: 'full' },
	{ path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
	{ path: 'workout/play', loadChildren: './pages/workout/workout-play/workout-play.module#WorkoutPlayPageModule' },
	{ path: 'workout', loadChildren: './pages/workout/workout.module#WorkoutPageModule' },
	{ path: 'alarm', loadChildren: './pages/alarm/alarm.module#AlarmPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
