// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRy4bcNwj1yTJijty9pWdrSfPT9Gf1SKY",
  authDomain: "dev-skills-frontend.firebaseapp.com",
  projectId: "dev-skills-frontend",
  storageBucket: "dev-skills-frontend.appspot.com",
  messagingSenderId: "631605948028",
  appId: "1:631605948028:web:72ae5217cf962841c663f9",
  measurementId: "G-DV8R796CTS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
