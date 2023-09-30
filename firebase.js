// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIntLWGCuri4t4cUEv8fPvNu2fztfsjk4",
  authDomain: "uber-next-clone-780d0.firebaseapp.com",
  projectId: "uber-next-clone-780d0",
  storageBucket: "uber-next-clone-780d0.appspot.com",
  messagingSenderId: "620713685524",
  appId: "1:620713685524:web:f8d20e80451cb1e8ccad01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}