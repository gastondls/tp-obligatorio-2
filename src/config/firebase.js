
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARTKctavbKrnMxDPKPFZ9aj18wjtT8psE",
  authDomain: "productos-utn-curso.firebaseapp.com",
  projectId: "productos-utn-curso",
  storageBucket: "productos-utn-curso.firebasestorage.app",
  messagingSenderId: "122011441859",
  appId: "1:122011441859:web:455c61e7954758a189a076"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};