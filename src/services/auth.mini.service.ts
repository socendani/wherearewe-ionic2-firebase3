// import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginModalPage } from '../pages/login-modal/login-modal';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { UUID } from 'angular2-uuid';
import { FirebaseService } from './firebase.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthMiniService {

  public user: UserModel;

  constructor(
    private modalCtrl: ModalController,
    public storage: Storage
  ) { }



  openModalLogin() {
    let modal = this.modalCtrl.create(LoginModalPage, {}, { enableBackdropDismiss: false });
    modal.present();
    modal.onDidDismiss(data => {
      let uuid = UUID.UUID();
      let hoy = new Date().toLocaleString()
      this.user = new UserModel(uuid, data.username, data.color, data.roomname, {
        lat: 0, lng: 0, lastMessage: "New user", updateAt: null, createdAt: hoy
      });
      //Guardamos a local
      this._saveUserLocally();

      //Actualizamos en Firebase
      let firebaseService = new FirebaseService();
      firebaseService.mapsNode.child(this.user.roomname).child(this.user.username).update(this.user);

    });


  }

  checkCredentials() {

    this._getUserLocally().then(() => {
      //Si no tengo credenciales => popUP para login/color/etc..
      
      // this.user=null; //SIMULACROOOO

      if (!this.user) {
        console.log("ABRIR MODAL PARA PONER CREDENCIALES");
        this.openModalLogin();
      } else {
        console.log("USER IDENTIFICADO ... OK => " + this.user.username);
      }
    });



  }

  logout() {

  }

  /******************** PRIVATE Functions ************/
  public _saveUserLocally() {
    console.log("saveLocally");
    this.storage.set("waw_user", JSON.stringify(this.user));
  }

  public _getUserLocally(): Promise<UserModel> {
    return this.storage.get('waw_user').then((data: any) => {
      if (data) {

        console.log("_getUserLocally");
        console.log(data);
        let userObject = JSON.parse(data);
        console.log(userObject);
        this.user = userObject;
      } else {
        this.user = null;
        return;
      }
    });
  }
}


//http://4dev.tech/2016/03/login-screen-and-authentication-with-angular2/
// http://www.gajotres.net/ionic-2-handling-a-simple-user-authorization/2/

// import {Injectable} from 'angular2/core';
// import {Router} from 'angular2/router';

// export class User {
//   constructor(
//     public email: string,
//     public password: string) { }
// }

// var users = [
//   new User('admin@admin.com','adm9'),
//   new User('user1@gmail.com','a23')
// ];

// @Injectable()
// export class AuthenticationService {

//   constructor(
//     private _router: Router){}

//   logout() {
//     localStorage.removeItem("user");
//     this._router.navigate(['Login']);
//   }

//   login(user){
//     var authenticatedUser = users.find(u => u.email === user.email);
//     if (authenticatedUser && authenticatedUser.password === user.password){
//       localStorage.setItem("user", authenticatedUser);
//       this._router.navigate(['Home']);      
//       return true;
//     }
//     return false;

//   }

//    checkCredentials(){
//     if (localStorage.getItem("user") === null){
//         this._router.navigate(['Login']);
//     }
//   } 
// }