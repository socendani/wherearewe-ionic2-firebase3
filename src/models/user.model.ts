// import { DateTime } from 'ionic-angular/es2015';



export class UserModel {
  constructor ( 
      public id: string="",
      public username: string="",
      public color: string="",
      public roomname: string="",
      public status: UserStatusModel
  ) {    

  }

  //  static fromJson(data: any) {
  //   if (!data.name || !data.id) {
  //     // return null;
  //     console.log("ERRRORRR6");
  //     // console.log(data);
  //     throw (new Error("Invalid argument: argument structure do not match with model"));
  //   }
  //   console.info("data.name=" + data.name);
  //   return new ListModel(data.name, data.id);

  // }
}


export class UserStatusModel {
  public lat: number;
  public lng: number;
  public lastMessage: string;
  public updateAt: string;
  public createdAt: string;
}


