
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEGwstwy5CCl9Mw6I2tdc1Bg9z6vEZnzw",
    authDomain: "react-netflix-eac7a.firebaseapp.com",
    projectId: "react-netflix-eac7a",
    storageBucket: "react-netflix-eac7a.appspot.com",
    messagingSenderId: "816921461173",
    appId: "1:816921461173:web:7153c64a628584790359fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


// apiKey: "AIzaSyAEGwstwy5CCl9Mw6I2tdc1Bg9z6vEZnzw",
//     authDomain: "react-netflix-eac7a.firebaseapp.com",
//         projectId: "react-netflix-eac7a",
//             storageBucket: "react-netflix-eac7a.appspot.com",
//                 messagingSenderId: "816921461173",
//                     appId: "1:816921461173:web:7153c64a628584790359fc"



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'
// import { getFirestore } from 'firebase/firestore'

// const {
//     VITE_FIREBASE_API_KEY,
//     VITE_FIREBASE_AUTH_DOMAIN,
//     VITE_FIREBASE_PROJECTID,
//     VITE_FIREBASE_STORAGE_BUCKET,
//     VITE_FIREBASE_MESSAGING_SENDERID,
//     VITE_FIREBASE_APPID,
// } = import.meta.env;
// console.log("VITE_FIREBASE_APIKEY", VITE_FIREBASE_API_KEY);
// const firebaseConfig = {
//     apiKey: VITE_FIREBASE_API_KEY,
//     authDomain: VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: VITE_FIREBASE_PROJECTID,
//     storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: VITE_FIREBASE_MESSAGING_SENDERID,
//     appId: VITE_FIREBASE_APPID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);


