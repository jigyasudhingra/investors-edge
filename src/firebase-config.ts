import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQhZ-oTWdgGIyn1BUWk_tdyz0kSgqhYxE",
  authDomain: "quiz-app-33e0f.firebaseapp.com",
  projectId: "quiz-app-33e0f",
  storageBucket: "quiz-app-33e0f.appspot.com",
  messagingSenderId: "617559243563",
  appId: "1:617559243563:web:81b5d0bf9c0b6ac078a36e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const a = async () => {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angelesecdwfrq",
    state: "CA",
    country: "USA",
  });
};
