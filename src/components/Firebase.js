// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3XpOwzaRl0Z9ToBpoXFf7C4Cbfafl5k8",
  authDomain: "sellpurchase-a18af.firebaseapp.com",
  projectId: "sellpurchase-a18af",
  storageBucket: "sellpurchase-a18af.appspot.com",
  messagingSenderId: "261740897055",
  appId: "1:261740897055:web:9b42a465f0846cdb77462a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
