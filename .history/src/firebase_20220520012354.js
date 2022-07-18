import firebase from "firebase/compat/app";
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

const firebaseConfig = {
  apiKey: "AIzaSyBNKOXehTK5TJIPBroTdhX6IpMOXdkGDNU",
  authDomain: "linkdin-clone-7125f.firebaseapp.com",
  projectId: "linkdin-clone-7125f",
  storageBucket: "linkdin-clone-7125f.appspot.com",
  messagingSenderId: "591161491054",
  appId: "1:591161491054:web:3ac20acd670e10865a707f",
  measurementId: "G-CPE1ZNKFT7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, auth, provider, db };
