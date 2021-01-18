import firebase from 'firebase/app'
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDyuwPcKY0J4i-G8EyV2y6uggSr8OOdoCI",
    authDomain: "frikicueva-eaf78.firebaseapp.com",
    projectId: "frikicueva-eaf78",
    storageBucket: "frikicueva-eaf78.appspot.com",
    messagingSenderId: "623893233767",
    appId: "1:623893233767:web:c5395fe9809e2c766654c2"
  }
);

export function getFireBase(){
    return app;
}

export function getFireStore(){
    return firebase.firestore(app);
}