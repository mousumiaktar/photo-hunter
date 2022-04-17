// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNObZRADouv-ve6bkDzsdO0AJUdP7lwN0",
  authDomain: "wedding-photography-faa30.firebaseapp.com",
  projectId: "wedding-photography-faa30",
  storageBucket: "wedding-photography-faa30.appspot.com",
  messagingSenderId: "276132577319",
  appId: "1:276132577319:web:e8241aed26eab236ad0e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;