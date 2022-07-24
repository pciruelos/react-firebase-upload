// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import {v4} from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzLCZCwOHa4sZ2u-MQle6qbhesN--wpF4",
  authDomain: "react-firebase-upload-fi-6f18e.firebaseapp.com",
  projectId: "react-firebase-upload-fi-6f18e",
  storageBucket: "react-firebase-upload-fi-6f18e.appspot.com",
  messagingSenderId: "286366924236",
  appId: "1:286366924236:web:d4cfeeb478009f6914b169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export function uploadFile(file) {
const storageRef = ref(storage, v4() )
uploadBytes(storageRef, file).then((snapshot) => {
  console.log(snapshot)
})
}