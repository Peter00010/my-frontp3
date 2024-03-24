import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLfRFcEa2RrUkYhKZAynQle2GszFkmHe8",
  authDomain: "quizzwizz-44d3e.firebaseapp.com",
  projectId: "quizzwizz-44d3e",
  storageBucket: "quizzwizz-44d3e.appspot.com",
  messagingSenderId: "38304462207",
  appId: "1:38304462207:web:d5305adf253110d405564a"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);