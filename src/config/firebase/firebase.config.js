// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAagiiwtvhFY4PT5CzxE6CWG3MNwUs4DGY",
    authDomain: "tumbass-shop.firebaseapp.com",
    projectId: "tumbass-shop",
    storageBucket: "tumbass-shop.appspot.com",
    messagingSenderId: "700297384621",
    appId: "1:700297384621:web:a46bbe0f4555ccc6de2c24",
    measurementId: "G-Y9NHMK1M5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)