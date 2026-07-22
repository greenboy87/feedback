import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase, ref, push, set, remove, onValue, get
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_rm0YvirjRs2n8fh0N83Q9ZtQAla5ks4",
  authDomain: "schueler-feedback.firebaseapp.com",
  databaseURL: "https://schueler-feedback-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "schueler-feedback",
  storageBucket: "schueler-feedback.firebasestorage.app",
  messagingSenderId: "1028079382711",
  appId: "1:1028079382711:web:e81ec1daad7783a2349d32"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

window.fbDb = db;
window.fbRef = ref;
window.fbPush = push;
window.fbSet = set;
window.fbRemove = remove;
window.fbOnValue = onValue;
window.fbGet = get;

window.dispatchEvent(new Event("firebase-ready"));
