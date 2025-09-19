import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Remplacez cet objet de configuration par celui de votre projet Firebase.
// Vous pouvez le trouver dans les paramètres de votre projet sur la console Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAaaHEStvRGo04C5OzEjYdmDRwc8sAwwME",
  authDomain: "activites-4791c.firebaseapp.com",
  projectId: "activites-4791c",
  storageBucket: "activites-4791c.firebasestorage.app",
  messagingSenderId: "242132434172",
  appId: "1:242132434172:web:8fbe08b3212badd65cab79",
  measurementId: "G-3XD1M5WR7J"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Cloud Firestore et exporte la référence
export const db = getFirestore(app);
