// environment variable
require('dotenv').config({ path: 'custom.env' });


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBFWUcIej7EzIA2N2AyEmEYgyvO74rU54U",
    authDomain: "travel-india-8e5eb.firebaseapp.com",
    projectId: "travel-india-8e5eb",
    storageBucket: "travel-india-8e5eb.appspot.com",
    messagingSenderId: "256024156522",
    appId: "1:256024156522:web:db6b5a46a6d1266bfdad13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;