// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5vgmUQBjup_d1aqkSar7VKaDe5kuH_Fg",
    authDomain: "assignment-a3d40.firebaseapp.com",
    projectId: "assignment-a3d40",
    storageBucket: "assignment-a3d40.appspot.com",
    messagingSenderId: "534292386918",
    appId: "534292386918:web:b502d125b45f87492a49a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;