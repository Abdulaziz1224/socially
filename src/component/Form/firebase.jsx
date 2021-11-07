import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB31tElDya1HcgI16Gz0v0J7YtAmGep9ME",
  authDomain: "socially-a8491.firebaseapp.com",
  databaseURL: "https://socially-a8491.firebaseio.com",
  projectId: "socially-a8491",
  storageBucket: "socially-a8491.appspot.com",
  messagingSenderId: "1029655166653",
  appId: "1:1029655166653:web:702c20ce6e9c4ef8f581d4",
  measurementId: "G-SY4WN275M4",
};

let app = initializeApp(firebaseConfig);

let auth = getAuth(app)

export default auth