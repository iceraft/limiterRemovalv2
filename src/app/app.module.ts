import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';

import { environment } from '../environments/environment';

import { ProfileEditPageModule } from './pages/profile/profile-edit/profile-edit.module';
import { WorkoutAddPageModule } from './pages/workout/workout-add/workout-add.module';
import { WorkoutEditPageModule } from './pages/workout/workout-edit/workout-edit.module';
import { WorkoutPlayPageModule } from './pages/workout/workout-play/workout-play.module';
import { AlarmAddPageModule } from './pages/alarm/alarm-add/alarm-add.module';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '',
  privacyPolicyUrl: '',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fbConfg),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    ProfileEditPageModule,
    WorkoutAddPageModule,
    WorkoutEditPageModule,
    WorkoutPlayPageModule,
    AlarmAddPageModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
