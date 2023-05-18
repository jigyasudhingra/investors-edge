import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { userDetails } from "./Contexts/UserContext";

const firebaseConfig = {
  apiKey: "AIzaSyBPd6AYE4G7b4xB_AVQb1mqZJH0XaE-sF8",
  authDomain: "investor-s-edge.firebaseapp.com",
  projectId: "investor-s-edge",
  storageBucket: "investor-s-edge.appspot.com",
  messagingSenderId: "1047650332600",
  appId: "1:1047650332600:web:cb4eacbb4fc76a9571294d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export const a = async () => {
  await setDoc(doc(db, "users", "jigyasudhingra@gmail.com"), {
    ...userDetails,
    date: new Date(),
  });
};
