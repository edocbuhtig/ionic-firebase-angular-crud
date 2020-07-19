import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public fbauth: AngularFireAuth,
    public ngroute: Router
  ) {
    const authfbObserver = fbauth.authState.subscribe( user => {
      if (user) {
        console.log(user)
        this.ngroute.navigate(['home']);
        authfbObserver.unsubscribe();
      } else {
        console.log(user)
        this.ngroute.navigate(['login']);
        authfbObserver.unsubscribe();
      }
    });

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  
  
}
