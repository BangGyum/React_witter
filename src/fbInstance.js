// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as firebase from "firebase/app";
// import "firebase/auth"
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
import firebase,{ initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import "firebase/database"

//https://firebase.google.com/docs/reference/js/auth

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  //env 파일을 git에 안올라가기에 보안을 위해 이렇게 하지만.
  //값을 치환하여 빌드하기 때문에 결국 보임.

  //const app = initializeApp(firebaseConfig);
  //export default firebase.initializeApp(firebaseConfig);

  //firebase.initializeApp(firebaseConfig);
 // const authService =firebase.auth();
  const app = initializeApp(firebaseConfig);
  export const authService = getAuth(app);
 // export const firebaseInstance = firebase;
  export default authService;
  //const app = initializeApp(firebaseConfig);
  //export const authService = getAuth(app);
  /*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
          request.time < timestamp.date(2023, 2, 8);
    }
  }
  */ 