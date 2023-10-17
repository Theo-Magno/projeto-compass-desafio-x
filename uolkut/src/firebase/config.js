import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAveI2yFCKk3AxuNtFKPS9zjcKbMcjHOXU",
  authDomain: "week10mockupdb.firebaseapp.com",
  projectId: "week10mockupdb",
  storageBucket: "week10mockupdb.appspot.com",
  messagingSenderId: "60287645485",
  appId: "1:60287645485:web:21b80afa029c608bfe45a4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
