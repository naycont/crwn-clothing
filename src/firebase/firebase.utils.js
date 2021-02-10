
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_G03G5zf0ht3Btalh1CGKVwQCnUf63VQ",
    authDomain: "crwn-db-5d14c.firebaseapp.com",
    projectId: "crwn-db-5d14c",
    storageBucket: "crwn-db-5d14c.appspot.com",
    messagingSenderId: "374305648701",
    appId: "1:374305648701:web:602e3732c0186824de7a54",
    measurementId: "G-NVK487ZEBG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
