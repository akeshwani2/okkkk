import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyDK760igRX4vneah5az960LY6v0oDaFARA",
  authDomain: "omni-e2869.firebaseapp.com",
  projectId: "omni-e2869",
  storageBucket: "omni-e2869.firebasestorage.app",
  messagingSenderId: "147138400247",
  appId: "1:147138400247:web:9117f673c0a5bd45a268f2",
  measurementId: "G-XBWZ5L8F3P"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
