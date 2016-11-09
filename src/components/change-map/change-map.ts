import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { LoginModalPage } from '../../pages/login-modal/login-modal';


@Component({
  selector: 'change-map',
  templateUrl: 'change-map.html'
})
export class ChangeMapComponent {


  constructor( private modalCtrl: ModalController) {
    console.log('Hello ChangeMap Component');
  }

  openModalLogin() {
    let modal = this.modalCtrl.create(LoginModalPage, {openMode:'edition'}, { enableBackdropDismiss: true });
    modal.present();
    modal.onDidDismiss(data => {
      let hoy = new Date().toLocaleString()
      // this.user = new UserModel(uuid, data.username, data.color, data.roomname, {
      //   lat: 0, lng: 0, lastMessage: "New user", updateAt: null, createdAt: hoy
      // });
      // //Guardamos a local
      // this._saveUserLocally();

      // //Actualizamos en Firebase
      // let firebaseService = new FirebaseService();
      // firebaseService.mapsNode.child(this.user.roomname).child(this.user.username).update(this.user);

    });
  }

}
