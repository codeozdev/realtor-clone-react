// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJkjUf64WzEvkC1oZc9qR3rJDgY8W4xk",
  authDomain: "realtor-clone-react-7bdd8.firebaseapp.com",
  projectId: "realtor-clone-react-7bdd8",
  storageBucket: "realtor-clone-react-7bdd8.appspot.com",
  messagingSenderId: "982412937489",
  appId: "1:982412937489:web:22c9fa538e9b686c03a4b0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

