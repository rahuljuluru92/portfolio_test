// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZGcUUtLYgTDlWYoPt4qrAtL30Bb6v01o",
  authDomain: "portfolio-afafe.firebaseapp.com",
  projectId: "portfolio-afafe",
  storageBucket: "portfolio-afafe.firebasestorage.app",
  messagingSenderId: "155191439647",
  appId: "1:155191439647:web:38fd7815fa127f3b19802a",
  measurementId: "G-6C6KBC11WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
