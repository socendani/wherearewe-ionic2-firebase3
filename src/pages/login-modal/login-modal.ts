import { RoomModel } from '../../models/room.model';
import { UserModel } from '../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { RoomsListComponent } from '../../components/rooms-list/rooms-list';

// import { ColorPickerService } from 'angular2-color-picker';
// import { ColorPickerModule } from 'ColorPickerModule';



@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
  providers: [RoomsListComponent]
})
export class LoginModalPage implements OnInit {

  public user: UserModel;
  public editionMode:string="";
  public buttonText: string = "";

  public username: string="";
  public color: string = "#127bdc";
  public roomname: string ="";
  // public roomsList: RoomsList;

  constructor(
    private viewCtrl: ViewController,
    public roomsList: RoomsListComponent
  ) {
    console.log("constructor");
    //  this.roomsList.text="11111";
  }
  ngOnInit() {
      this.buttonText=(this.editionMode=="")?"Nuevo":"Actualizar";
  }
 
  roomSelectedHistoric(roomSelected: RoomModel){
    this.roomname=roomSelected.name;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit() {
    //TODO: Control de CARACTERES!!! y ESPACIOS
    this.viewCtrl.dismiss( {
      username: this.username, 
      color: this.color, 
      roomname: this.roomname 
    });
  }


}
