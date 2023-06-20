import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb6DvmsnhZ6wzogbd8tifXDhj5r_glWTU",
  authDomain: "electrosale-f2c2f.firebaseapp.com",
  projectId: "electrosale-f2c2f",
  storageBucket: "electrosale-f2c2f.appspot.com",
  messagingSenderId: "784756613880",
  appId: "1:784756613880:web:a333aebfab75d73fd5510d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App  />);

