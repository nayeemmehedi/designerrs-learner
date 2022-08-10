
// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBW8qgbLBZuX70AhFWtG5gPoCQOHgt3cO8",

  authDomain: "designerrs-b7148.firebaseapp.com",

  databaseURL: "https://designerrs-b7148-default-rtdb.firebaseio.com",

  projectId: "designerrs-b7148",

  storageBucket: "designerrs-b7148.appspot.com",

  messagingSenderId: "130122024404",

  appId: "1:130122024404:web:a7cd6b3e3fd71a074ec241",

  measurementId: "G-WRHXQRYNGF"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
export const database = getDatabase(app);
