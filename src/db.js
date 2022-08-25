import firebase from 'firebase/app'
import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyCYsv-7ft8ujiGaKGr6fdbH1q-BFuRTjpk",
//     authDomain: "kdr2-windows.firebaseapp.com",
//     databaseURL: "https://kdr2-windows-default-rtdb.firebaseio.com",
//     projectId: "kdr2-windows",
//     storageBucket: "kdr2-windows.appspot.com",
//     messagingSenderId: "255057664152",
//     appId: "1:255057664152:web:3f5e70a8d4dc2d399618ed"
// };

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: 'kdr2-windows' })
    .firestore()

