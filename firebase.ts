// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase-secret";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
