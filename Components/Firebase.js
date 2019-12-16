import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_BKJg1GrOJh81LBBvWRxSQJ4oy1RyauA",
  authDomain: "rez-app.firebaseapp.com",
  databaseURL: "https://rez-app.firebaseio.com",
  storageBucket: "rez-app.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
