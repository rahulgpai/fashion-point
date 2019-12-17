import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEn9-bOmWQHaXKAJdNrct-lZYUV-oddEk",
  authDomain: "fashion-point-eeac1.firebaseapp.com",
  databaseURL: "https://fashion-point-eeac1.firebaseio.com",
  projectId: "fashion-point-eeac1",
  storageBucket: "fashion-point-eeac1.appspot.com",
  messagingSenderId: "197651214932",
  appId: "1:197651214932:web:511ec43d89df71ec4773c1",
  measurementId: "G-VYP5CZMTPD"
};

export const createUserProfileDocument = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
