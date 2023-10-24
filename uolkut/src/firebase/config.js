import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjm9gKuuYXjHNK_T2d3vXF1a9RaIPxpxQ",
  authDomain: "uolkut-1f316.firebaseapp.com",
  projectId: "uolkut-1f316",
  storageBucket: "uolkut-1f316.appspot.com",
  messagingSenderId: "342158632958",
  appId: "1:342158632958:web:9e63af28453558c75702af",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
