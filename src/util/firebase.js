// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm0feA1PEWpkd_c0bDARXE8PshTv3X9GM",
  authDomain: "xtream-database.firebaseapp.com",
  databaseURL: "https://xtream-database-default-rtdb.firebaseio.com",
  projectId: "xtream-database",
  storageBucket: "xtream-database.appspot.com",
  messagingSenderId: "270436781223",
  appId: "1:270436781223:web:7e5b1c46f9544f89f0df82",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// firebase.initializeApp(firebaseConfig);

// export default firebase;
