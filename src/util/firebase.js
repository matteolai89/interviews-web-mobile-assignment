import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTWb8p8AKCBkhcbqVLPa6ETSxDdZAvtN4",
  authDomain: "xtream-project-ccf49.firebaseapp.com",
  projectId: "xtream-project-ccf49",
  storageBucket: "xtream-project-ccf49.appspot.com",
  messagingSenderId: "665477820657",
  appId: "1:665477820657:web:e341d26b2e1fb9e38a3950",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
