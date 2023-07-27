// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzqwK140vYlrNv-2RcWsEniseod_z1RGc",
  authDomain: "omfurniture-cb19d.firebaseapp.com",
  projectId: "omfurniture-cb19d",
  storageBucket: "omfurniture-cb19d.appspot.com",
  messagingSenderId: "202483512953",
  appId: "1:202483512953:web:abb4c16ddd17678e0506a8",
  measurementId: "G-FWV5WEBHG2"
};

// Initialize Firebase
const fireConfig = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireConfig);
export const auth = getAuth(fireConfig)
export default fireConfig