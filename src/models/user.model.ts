import { RoomModel } from './room.model';
import { DateTime } from 'ionic-angular/es2015';



export class UserModel {
  constructor ( 
      public id: number,
      public nickname: string="",
      public color: string="",
      public status: UserStatusModel
  ) {    

  }
}


export class UserStatusModel {
  public lat: number;
  public lng: number;
  public lastMessage: string;
  public updateAt: DateTime;
  public createdAt: DateTime;
  public room: RoomModel;
}

