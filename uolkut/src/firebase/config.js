import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAveI2yFCKk3AxuNtFKPS9zjcKbMcjHOXU",
  authDomain: "week10mockupdb.firebaseapp.com",
  projectId: "week10mockupdb",
  storageBucket: "week10mockupdb.appspot.com",
  messagingSenderId: "60287645485",
  appId: "1:60287645485:web:21b80afa029c608bfe45a4",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;
