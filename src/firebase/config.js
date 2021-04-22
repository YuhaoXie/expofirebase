import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBbsmPAEWQb8DxR9qWxNc81_HoNVwtoOew",
    authDomain: "mobile-app-9c89b.firebaseapp.com",
    projectId: "mobile-app-9c89b",
    storageBucket: "mobile-app-9c89b.appspot.com",
    messagingSenderId: "57837637908",
    appId: "1:57837637908:web:3feea6e346d65e4c4bf201",
    measurementId: "G-MPJ7NDBLDB"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };