// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDZOUrCZNP8LTDP1TedkY-J_jKTfLUfOyI',
  authDomain: 'react-social-medial-app.firebaseapp.com',
  projectId: 'react-social-medial-app',
  storageBucket: 'react-social-medial-app.appspot.com',
  messagingSenderId: '452483113486',
  appId: '1:452483113486:web:086a35c2460cf39034d25f',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
