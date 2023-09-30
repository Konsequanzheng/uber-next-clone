// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx1GZIXFWSkwhpkWsTqmhLOF4WZlIYOgQ",
  authDomain: "uber-next-clone-f951f.firebaseapp.com",
  projectId: "uber-next-clone-f951f",
  storageBucket: "uber-next-clone-f951f.appspot.com",
  messagingSenderId: "351086272201",
  appId: "1:351086272201:web:35ae39e4efc69d3ec37718"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}