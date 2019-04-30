import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-workout-play',
  templateUrl: './workout-play.page.html',
  styleUrls: ['./workout-play.page.scss'],
})
export class WorkoutPlayPage implements OnInit {

	list:{};

  constructor(
  				private modalCtrl: ModalController,
  				private navParams: NavParams,
  			 ) { }

  ngOnInit() {

  	this.list = this.navParams.get('list');
  	console.log(this.list);
  }

}
