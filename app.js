import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzST41AXEo7yL8EPR6rkFAWU9zFBe3evM",
  authDomain: "trendfeed-database.firebaseapp.com",
  databaseURL: "https://trendfeed-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "trendfeed-database",
  storageBucket: "trendfeed-database.firebasestorage.app",
  messagingSenderId: "68960237028",
  appId: "1:68960237028:web:c6534d204ed9f9c3b143f1",
  measurementId: "G-RW4KF17GXV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function sendMsg() {
  await addDoc(collection(db, "messages"), {
    text: "Hello world",
    time: Date.now()
  });
}
