import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAR7Qtt2cz3UN_H2Tayxf02w6EhEQTH6DE",
    authDomain: "thoughtwave-47a20.firebaseapp.com",
    projectId: "thoughtwave-47a20",
    storageBucket: "thoughtwave-47a20.firebasestorage.app",
    messagingSenderId: "401702286697",
    appId: "1:401702286697:web:101fe9c99eed0a68a939f8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app