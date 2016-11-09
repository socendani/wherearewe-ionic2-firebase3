
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

//Servicios
import { AuthMiniService } from '../services/auth.mini.service';
import { LoggerService } from '../services/logger.service';
import { LoggerFirebaseService } from '../services/logger.firebase.service';

import { TabsPage } from '../pages/tabs/tabs';
// import { Firebase } from 'firebase';
import * as Firebase from 'firebase';




@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  providers: [LoggerService, LoggerFirebaseService, AuthMiniService]
})
export class MyApp {
  rootPage = TabsPage;



  constructor(
    private platform: Platform,
    private logger: LoggerService,
    private loggerFirebase: LoggerFirebaseService,
    private authMiniService: AuthMiniService

  ) {

    const firebaseConfig = {
      apiKey: "AIzaSyBlkz6YQ4hv_iOw4zK7zh0O1ubU1ekgNjU",
      authDomain: "wherearewe-35d2c.firebaseapp.com",
      databaseURL: "https://wherearewe-35d2c.firebaseio.com",
      storageBucket: "wherearewe-35d2c.appspot.com",
      messagingSenderId: "40964073089"
    };
    Firebase.initializeApp(firebaseConfig);

    platform.ready().then(() => {
      console.log("***DMR: platform Ready! ***");


      //checkCredentials
      //DUDAAAA::: si creamos una variable de USUARIO en este componente GLOBAL... no se mantendría para TODA la APLICACION????
      //revisar este punto 
      authMiniService.checkCredentials();

      //Esto funciona OK.. 
      // logger.log("Start Logger... Platform ready [logger]");
      // loggerFirebase.log("Start Logger... Platform ready [Firebase]", "START", "ARG2");





      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });



  }



}
