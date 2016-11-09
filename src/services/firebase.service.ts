//https://github.com/aaronksaunders/ionic2firebase3/blob/master/app/lib/firebaseService.ts

import { Injectable } from '@angular/core';

// import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import * as firebase from "firebase";

import { UserModel } from '../models/user.model';


// declare var firebase: any;

@Injectable()
export class FirebaseService {

  authCallback: any;
  
  public db: any;
  public logNode: any;
  public configNode: any;
  public usersNode: any;
  public mapsNode: any;

  constructor() {
    this.db = firebase.database().ref('/');
    this.logNode = firebase.database().ref('/logs/');
    this.configNode = firebase.database().ref('/config/');
    this.usersNode = firebase.database().ref('/users/');
    this.mapsNode = firebase.database().ref('/maps/');
  }

  addUserIntoMap(user:UserModel) {
    //actaulizamos el datos del usuario

  }





// {
//     "_id": "kBhPZjXFVuTfsPk4sSZ6D1cjTtD79fR2",
//     "lat": "38.9979067",
//     "room": "daol",
//     "color": "4b60cd",
//     "nickname": "ona",
//     "updatedAt": {
//         "$date": "2016-10-30T08:40:48.290Z"
//     },
//     "__v": 0,
//     "createdAt": {
//         "$date": "2016-10-30T08:06:48.498Z"
//     },
//     "lng": "-1.8573967",
//     "lastmessage": "A la cafeteria"
// }


  // onAuthStateChanged(_function) {
  //   return firebase.auth().onAuthStateChanged((_currentUser) => {
  //     if (_currentUser) {
  //       console.log("User " + _currentUser.uid + " is logged in with " + _currentUser.provider);
  //       _function(_currentUser);
  //     } else {
  //       console.log("User is logged out");
  //       _function(null)
  //     }
  //   })
  // }

  // currentUser() {
  //   return firebase.auth().currentUser
  // }

  // logout() {
  //   return firebase.auth().signOut()
  // }

  // createEmailUser(credentials) {

  //   return new Observable(observer => {
  //     return firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
  //       .then((authData) => {
  //         console.log("User created successfully with payload-", authData);
  //         observer.next(authData)
  //       }).catch((_error) => {
  //         console.log("Login Failed!", _error);
  //         observer.error(_error)
  //       })
  //   });
  // }
  // login(credentials) {
  //   var that = this

  //   return new Observable(observer => {
  //     return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
  //       .then(function (authData) {
  //         console.log("Authenticated successfully with payload-", authData);
  //         observer.next(authData)
  //       }).catch(function (_error) {
  //         console.log("Login Failed!", _error);
  //         observer.error(_error)
  //       })
  //   });
  // }

  // uploadPhotoFromFile(_imageData, _progress) {


  //   return new Observable(observer => {
  //     var _time = new Date().getTime()
  //     var fileRef = firebase.storage().ref('images/sample-' + _time + '.jpg')
  //     var uploadTask = fileRef.put(_imageData['blob']);

  //     uploadTask.on('state_changed', function (snapshot) {
  //       console.log('state_changed', snapshot);
  //       _progress && _progress(snapshot)
  //     }, function (error) {
  //       console.log(JSON.stringify(error));
  //       observer.error(error)
  //     }, function () {
  //       // Handle successful uploads on complete
  //       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  //       var downloadURL = uploadTask.snapshot.downloadURL;

  //       // Metadata now contains the metadata for file
  //       fileRef.getMetadata().then(function (_metadata) {

  //         // save a reference to the image for listing purposes
  //         var ref = firebase.database().ref('images');
  //         ref.push({
  //           'imageURL': downloadURL,
  //           'thumb': _imageData['thumb'],
  //           'owner': firebase.auth().currentUser.uid,
  //           'when': new Date().getTime(),
  //           //'meta': _metadata
  //         });
  //         observer.next(uploadTask)
  //       }).catch(function (error) {
  //         // Uh-oh, an error occurred!
  //         observer.error(error)
  //       });

  //     });
  //   });
  // }

  // getDataObs() {
  //   var ref = firebase.database().ref('images')
  //   var that = this

  //   return new Observable(observer => {
  //     ref.on('value',
  //       (snapshot) => {
  //         var arr = []

  //         snapshot.forEach(function (childSnapshot) {
  //           var data = childSnapshot.val()
  //           data['id'] = childSnapshot.key
  //           arr.push(data);
  //         });
  //         observer.next(arr)
  //       },
  //       (error) => {
  //         console.log("ERROR:", error)
  //         observer.error(error)
  //       });
  //   });
  // }


}