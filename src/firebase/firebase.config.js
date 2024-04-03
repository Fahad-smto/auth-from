// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhIEXgq79wr19EKQPTD0g58LaHz_nOhg0",
  authDomain: "react-from-7079b.firebaseapp.com",
  projectId: "react-from-7079b",
  storageBucket: "react-from-7079b.appspot.com",
  messagingSenderId: "259850006705",
  appId: "1:259850006705:web:5d68eb974c1eac41fab290"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth;