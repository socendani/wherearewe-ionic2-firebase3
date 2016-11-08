import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LoginModalPage } from '../pages/login-modal/login-modal';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthMiniService {

  public user: UserModel;
  
  constructor(
    private modalCtrl: ModalController,
    public storage: Storage
    ) { }



  login() {
    //Llamar a la MODAL
    let modal = this.modalCtrl.create(LoginModalPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data);
        // this.addTodo(data);
      }
    });

  }

  checkCredentials() {
    //Si no tengo credenciales => popUP para login/color/etc..
    this.user = new UserModel(1, "socendani", "red", null);

    this.login();
    
    if (!this.user) {
      console.log("ABRIR MODAL PARA PONER CREDENCIALES");
    } else {
      console.log("USER IDENTIFICADO ... OK => " + this.user.nickname);
    }

  }

  logout() {

  }

  /******************** PRIVATE Functions ************/
  public _saveLocally() {
    console.log("saveLocally");
    // console.log(this.lists);
    this.storage.set("user", JSON.stringify(this.user));
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