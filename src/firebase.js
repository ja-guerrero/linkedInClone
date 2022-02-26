import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAadojKLuBlTeOlix23jEFYBiN02s0jpJs",
  authDomain: "linkedinclone-a0e9f.firebaseapp.com",
  projectId: "linkedinclone-a0e9f",
  storageBucket: "linkedinclone-a0e9f.appspot.com",
  messagingSenderId: "853560412193",
  appId: "1:853560412193:web:ee55ce020dc26f46027b60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

const API_KEY = "574bf6a42dd44ba7bd6d06fd77e5e5cf"

export {db, auth, API_KEY}