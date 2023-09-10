// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD37n5D2BN9RAA-C-n5CzVmWKInYs-kmFE",
  authDomain: "netflixgpt-ec900.firebaseapp.com",
  projectId: "netflixgpt-ec900",
  storageBucket: "netflixgpt-ec900.appspot.com",
  messagingSenderId: "446822873976",
  appId: "1:446822873976:web:0f6d00f7745aa7b9b6268d",
  measurementId: "G-LPPTVYH5RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
