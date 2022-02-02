import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBP3avv34HExit9IMtvLo2FrCXhcMoYrRo",
    authDomain: "elearn-dfe88.firebaseapp.com",
    projectId: "elearn-dfe88",
    storageBucket: "elearn-dfe88.appspot.com",
    messagingSenderId: "370909286054",
    appId: "1:370909286054:web:ad7f2b2a17ba612b96ae67",
    measurementId: "G-DSNXVDB2GQ"
}; //this is where your firebase app values you copied will go

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore =  firebase.firestore();




