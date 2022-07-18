// Import the functions you need from the SDKs you need
import "firebase/auth"; // for authentication
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNKOXehTK5TJIPBroTdhX6IpMOXdkGDNU",
  authDomain: "linkdin-clone-7125f.firebaseapp.com",
  projectId: "linkdin-clone-7125f",
  storageBucket: "linkdin-clone-7125f.appspot.com",
  messagingSenderId: "591161491054",
  appId: "1:591161491054:web:3ac20acd670e10865a707f",
  measurementId: "G-CPE1ZNKFT7",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { storage, auth, provider };

export default db;
