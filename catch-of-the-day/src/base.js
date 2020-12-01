import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxP-KFTx65s7RtGcc3xovLbKa_0mZrXkI",
  authDomain: "catch-of-the-day-brandt.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-brandt.firebaseio.com",
  // projectId: "catch-of-the-day-brandt",
  // storageBucket: "catch-of-the-day-brandt.appspot.com",
  // messagingSenderId: "1097595874223",
  // appId: "1:1097595874223:web:98e103c4490cbb43b45d5a",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
