// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVvNrgTXRHvWY0gHbNqdwXgNRp10rL5EU",
  authDomain: "diplom-4b1bf.firebaseapp.com",
  projectId: "diplom-4b1bf",
  storageBucket: "diplom-4b1bf.appspot.com",
  messagingSenderId: "1067047665850",
  appId: "1:1067047665850:web:09abc9e2d37381fd208283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
