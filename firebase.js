// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-UVxjR4HMSNfIj7pR-TLezYF9Ps0rCq8",
    authDomain: "job-portal-aa5bd.firebaseapp.com",
    projectId: "job-portal-aa5bd",
    storageBucket: "job-portal-aa5bd.firebasestorage.app",
    messagingSenderId: "697378811979",
    appId: "1:697378811979:web:58e7dee77a94096e895dce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);