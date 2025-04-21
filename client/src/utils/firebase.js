import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-2f095.firebaseapp.com",
  projectId: "task-manager-2f095",
  storageBucket: "task-manager-2f095.firebasestorage.app",
  messagingSenderId: "281281753972",
  appId: "1:281281753972:web:e2b7a36ed849a1c983b221",
};

export const app = initializeApp(firebaseConfig);
