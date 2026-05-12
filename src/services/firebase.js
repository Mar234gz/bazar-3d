import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBEuMX2uv7a8p3GCP_LNSwoosv9TQuMuRs",
  authDomain: "bazar-3d.firebaseapp.com",
  projectId: "bazar-3d",
  storageBucket: "bazar-3d.firebasestorage.app",
  messagingSenderId: "367726108406",
  appId: "1:367726108406:web:cc80dac3e20997083616d7"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);