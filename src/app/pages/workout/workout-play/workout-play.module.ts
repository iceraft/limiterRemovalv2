import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { IonicModule } from '@ionic/angular';

import { WorkoutPlayPage } from './workout-play.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPlayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      percent: 100,
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [WorkoutPlayPage],
  entryComponents: [WorkoutPlayPage],
})
export class WorkoutPlayPageModule {}
