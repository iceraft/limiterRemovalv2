import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
   public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Workout',
      url: '/workout',
      icon: 'walk'
    },
    {
      title: 'Alarm',
      url: '/alarm',
      icon: 'alarm'
    },
    {
      title: 'Settings',
      // url: '/settings',
      icon: 'settings'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
    signOut() {
   // this.router.navigate(['/']);
   // this.afAuth.auth.signOut().then(() => {
   //    location.reload();
   // });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
