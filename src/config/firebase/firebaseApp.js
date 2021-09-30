// npm install firebase --save
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_LzVGtHWHSmJQxRhRk-WItfQPunb716s",
  authDomain: "reactjs-firebase-21638.firebaseapp.com",
  projectId: "reactjs-firebase-21638",
  storageBucket: "reactjs-firebase-21638.appspot.com",
  messagingSenderId: "987813808526",
  appId: "1:987813808526:web:0ccc21f3d14acf5d437cdf",
  measurementId: "G-NVT4EJECX4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;