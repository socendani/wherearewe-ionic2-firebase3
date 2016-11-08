
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


//Pages
import { MapPage } from '../pages/map/map';
import { ChatPage } from '../pages/chat/chat';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginModalPage } from '../pages/login-modal/login-modal';

//Import extendeds:
// import  ColorPickerModule  from 'ColorPickerModule';
// import ColorPickerModule  from 'angular2-color-picker';
// import {ColorPickerModule}  from 'angular2-color-picker';
import { FormsModule  } from "@angular/forms";

//Common services
import { Storage } from '@ionic/storage';
import { LoggerService } from '../services/logger.service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage, MapPage, ChatPage, TabsPage, LoginModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    // ColorPickerModule
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage, MapPage, ChatPage, TabsPage, LoginModalPage
  ],
  providers: [LoggerService, Storage]
})
export class AppModule { }
