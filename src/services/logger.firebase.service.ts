import { LoggerService } from './logger.service';
import { Injectable } from "@angular/core";

import { FirebaseService } from './firebase.service';


@Injectable()
export class LoggerFirebaseService extends LoggerService {

  constructor() {
    super();
  }

  log(message, ...args) {
    console.log("Estoy en Logger Firebaseeeee");
    this._check();
    
    if (this.enabled) {
      let obj = {
        accion: (args[0])?args[0]:"LOG",
        descripcion: message,
        fecha: new Date().getTime()
      }
      let firebaseService = new FirebaseService();
      firebaseService.logNode.push(obj);
      console.log(message, args);
    }
  }


  clean() {
    let firebaseService = new FirebaseService();
    firebaseService.logNode.remove();
  }


}