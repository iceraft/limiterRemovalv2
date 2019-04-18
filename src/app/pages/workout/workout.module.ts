import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkoutPage } from './workout.page';
import { FirebaseUIModule } from 'firebaseui-angular';

const routes: Routes = [
  {
    path: '',
    component: WorkoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkoutPage]
})
export class WorkoutPageModule {}
