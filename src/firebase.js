import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAeipGrWiV-joaRrq5Y_0XQWuD8t6yneCw",
    authDomain: "capitalgamesig.firebaseapp.com",
    databaseURL: "https://capitalgamesig.firebaseio.com",
    projectId: "capitalgamesig",
    storageBucket: "capitalgamesig.appspot.com",
    messagingSenderId: "856679458466",
    appId: "1:856679458466:web:cc17a3efde5469d11419fb"
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();