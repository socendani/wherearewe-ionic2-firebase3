import { RoomModel } from '../../models/room.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rooms-list',
  templateUrl: 'rooms-list.html'

})
export class RoomsListComponent {
  @Output() roomnameSelected = new EventEmitter();

  public rooms: RoomModel[] = [];

  constructor() {
    console.log('Hello RoomsList Component');
    // this.rooms=[];
    this.getFromLocal();

  }



  getFromLocal() {
    //Cogemos las últimas Rooms de storage

    //En caso de no tener.. ficticioas
    let localRooms: RoomModel[] = [];
    localRooms.push(new RoomModel(1, "habitación1"));
    localRooms.push(new RoomModel(2, "habitación2"));
    this.rooms = localRooms;

    //  private getFromLocal() {
    // return this.storage.get("lists").then(
    //   data => {
    //     let localLists: ListModel[] = [];
    //     if (data) {
    //       data = JSON.parse(data);  //lo convertimos en objetos
    //       for (let list of data) {
    //         localLists.push(new ListModel(list.name, list.id));
    //       }
    //     }
    //     this.lists = localLists;
    //   });
  }

  setRoomName(item: RoomModel) {
    this.roomnameSelected.emit({
      id: item.id,
      name:item.name
    })

  }

}




