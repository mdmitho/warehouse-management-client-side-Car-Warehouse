// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxYAIOt83bQ3mR7wDngGxMkOQeL3yNIlQ",
  authDomain: "car-warehouse-2291c.firebaseapp.com",
  projectId: "car-warehouse-2291c",
  storageBucket: "car-warehouse-2291c.appspot.com",
  messagingSenderId: "973375197552",
  appId: "1:973375197552:web:cd720d8d085e3b05737fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth