// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpdHDTFDHphXkgqJ5pV1g2lvd1s9fFJA",
  authDomain: "dragon-news-react-auth-56aca.firebaseapp.com",
  projectId: "dragon-news-react-auth-56aca",
  storageBucket: "dragon-news-react-auth-56aca.appspot.com",
  messagingSenderId: "805989080875",
  appId: "1:805989080875:web:ef5595dc53334b98616f6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;