import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDmBqLSAoI16BQHnxX6sUThOawaLlFSV7c",
  authDomain: "netflix-clone-b749b.firebaseapp.com",
  databaseURL: "https://netflix-clone-b749b.firebaseio.com",
  projectId: "netflix-clone-b749b",
  storageBucket: "netflix-clone-b749b.appspot.com",
  messagingSenderId: "605270299902",
  appId: "1:605270299902:web:eb1e65a127e5aa2a3c81af",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
