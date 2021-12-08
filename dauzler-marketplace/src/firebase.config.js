import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA7_hhh8C66aiDkVV3v4nXd7-7QPCOgIEw",
  authDomain: "dauzler-market-app.firebaseapp.com",
  projectId: "dauzler-market-app",
  storageBucket: "dauzler-market-app.appspot.com",
  messagingSenderId: "42870833043",
  appId: "1:42870833043:web:313dfa37dfcdaef14f3266"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()