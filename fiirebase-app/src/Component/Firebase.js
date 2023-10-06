// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqxxf-KKLnm-VdNelc8DR5I7tyrw6yvBQ",
  authDomain: "react-firebase-app-99990.firebaseapp.com",
  projectId: "react-firebase-app-99990",
  storageBucket: "react-firebase-app-99990.appspot.com",
  messagingSenderId: "1082136846907",
  appId: "1:1082136846907:web:ad6c221319e2b356beb21e",
  measurementId: "G-S8CJMVRHZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);