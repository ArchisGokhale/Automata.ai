// Simple Firebase connection test
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9_BZBpc9si50r7r13hHtRrWdQLuXhYC8",
  authDomain: "automata-waitlist.firebaseapp.com",
  projectId: "automata-waitlist",
  storageBucket: "automata-waitlist.firebasestorage.app",
  messagingSenderId: "683150881176",
  appId: "1:683150881176:web:0a1896db1694b3ca2fbbed"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test function
async function testFirebase() {
  try {
    console.log("Testing Firebase connection...");
    const docRef = await addDoc(collection(db, "test"), {
      message: "Hello from test",
      timestamp: new Date()
    });
    console.log("✅ Firebase test successful! Document ID:", docRef.id);
  } catch (error) {
    console.error("❌ Firebase test failed:", error);
  }
}

// Run test when this file is loaded
testFirebase();