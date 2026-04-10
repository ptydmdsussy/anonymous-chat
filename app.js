<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot,
  query,
  orderBy 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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

// RANDOM USER
function getUser() {
  return "User_" + Math.floor(Math.random() * 9999);
}

// SEND MESSAGE
window.sendMessage = async function () {
  const input = document.getElementById("messageInput");

  if (!input.value.trim()) return;

  await addDoc(collection(db, "messages"), {
    text: input.value,
    user: getUser(),
    time: Date.now()
  });

  input.value = "";
};

// REAL TIME LOAD
const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, (snapshot) => {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();

    const msg = document.createElement("div");
    msg.classList.add("msg");

    msg.innerHTML = `
      <div class="user">${data.user}</div>
      ${data.text}
    `;

    chatBox.appendChild(msg);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
});
</script>
