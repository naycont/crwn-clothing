
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

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return; //user doesn't exist?

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user...',error.message);
            
        }
    }
   
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
