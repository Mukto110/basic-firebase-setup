// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbq1t-9wSgO1P4-DbBHzSgMkaz2JwEJ2w",
  authDomain: "fir-auth-setup-20ef5.firebaseapp.com",
  projectId: "fir-auth-setup-20ef5",
  storageBucket: "fir-auth-setup-20ef5.firebasestorage.app",
  messagingSenderId: "838976156288",
  appId: "1:838976156288:web:bcebe373cee19c91ba2c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;