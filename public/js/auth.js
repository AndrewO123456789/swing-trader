import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtrZRTIKiN_6UasKzkemvEbRkSCMow6Qo",
  authDomain: "swing-trader-6431c.firebaseapp.com",
  projectId: "swing-trader-6431c",
  storageBucket: "swing-trader-6431c.firebasestorage.app",
  messagingSenderId: "255789637374",
  appId: "1:255789637374:web:1c12a2f513e98559e64faf"
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
