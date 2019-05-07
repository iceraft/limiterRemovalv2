import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WorkoutAddPage } from './workout-add.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WorkoutAddPage],
  entryComponents: [WorkoutAddPage],
})
export class WorkoutAddPageModule {}
