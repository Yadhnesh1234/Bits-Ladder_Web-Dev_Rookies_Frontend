// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe4cHhEFIJqMB4dGLK8PrKNAfJLFjCdUE",
  authDomain: "unscript-rookie.firebaseapp.com",
  projectId: "unscript-rookie",
  storageBucket: "unscript-rookie.appspot.com",
  messagingSenderId: "116303641914",
  appId: "1:116303641914:web:5cbb5c9bc258668e542403",
  measurementId: "G-2MQYJ275T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app