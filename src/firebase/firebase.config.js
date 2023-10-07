// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuMNbajI0dRtPOKXscue-_ZJkNOSoJoHo",
  authDomain: "social-events-b301c.firebaseapp.com",
  projectId: "social-events-b301c",
  storageBucket: "social-events-b301c.appspot.com",
  messagingSenderId: "28003241020",
  appId: "1:28003241020:web:cafbfc44ecdda24f024739",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
