import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const loginBox = document.getElementById("loginBox");
  const logoutNav = document.getElementById("logoutNav");

  if (user && user.emailVerified !== false) {
    if (loginBox) loginBox.style.display = "none";
    if (logoutNav) logoutNav.style.display = "inline-block";
  } else {
    if (loginBox) loginBox.style.display = "block";
    if (logoutNav) logoutNav.style.display = "none";
  }
});
