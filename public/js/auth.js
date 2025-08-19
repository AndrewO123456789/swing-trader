// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCtrZRTIKiN_6UasKzkemvEbRkSCMow6Qo",
  authDomain: "swing-trader-6431c.firebaseapp.com",
  projectId: "swing-trader-6431c",
  storageBucket: "swing-trader-6431c.firebasestorage.app",
  messagingSenderId: "255789637374",
  appId: "1:255789637374:web:1c12a2f513e98559e64faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOMContentLoaded ensures elements are ready
window.addEventListener("DOMContentLoaded", () => {
  const loginBox = document.getElementById("loginBox");
  const logoutNav = document.getElementById("logoutNav");
  const loginBtn = document.getElementById("loginBtn");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("passwordInput");

  // Toggle UI based on auth state
  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified === true) {
      console.log("✅ Auth state: Verified user logged in:", user.email);
      if (loginBox) loginBox.style.display = "none";
      if (logoutNav) logoutNav.style.display = "inline-block";
    } else {
      console.log("🔒 Auth state: No user or email not verified");
      if (loginBox) loginBox.style.display = "block";
      if (logoutNav) logoutNav.style.display = "none";
    }
  });

  // Handle login
  if (loginBtn) {
    loginBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent form reload if inside <form>
      const email = emailInput.value;
      const password = passwordInput.value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("✅ Logged in:", user.email);
          alert("✅ Logged in successfully");
        })
        .catch((error) => {
          console.error("❌ Login error:", error.code, error.message);
          alert("❌ Login failed: " + error.message);
        });
    });
  }

  // Handle logout
  if (logoutNav) {
    logoutNav.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          console.log("✅ Logged out");
          alert("✅ Successfully logged out");
        })
        .catch((error) => {
          console.error("❌ Logout error:", error.code, error.message);
          alert("❌ Logout failed: " + error.message);
        });
    });
  }
});

