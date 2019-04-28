import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, afAuth, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.afAuth = afAuth;
        this.router = router;
        this.appPages = [
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
        this.initializeApp();
    }
    AppComponent.prototype.signOut = function () {
        this.router.navigate(['/']);
        this.afAuth.auth.signOut().then(function () {
            location.reload();
        });
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AngularFireAuth,
            Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map