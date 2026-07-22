import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase, ref, push, set, remove, onValue, get
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "FIREBASE_API_KEY",
  authDomain: "FIREBASE_AUTH_DOMAIN",
  databaseURL: "FIREBASE_DATABASE_URL",
  projectId: "FIREBASE_PROJECT_ID",
  storageBucket: "FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
  appId: "FIREBASE_APP_ID"
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
