// File: /public/js/main.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";
import { injectNav } from "./inject.js"; // ✅ Modular nav injection

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("✅ Firebase initialized");

// DOM elements
const loginBox = document.querySelector(".login-box");
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Login handler
loginBtn?.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Login successful:", userCredential.user.email);
  } catch (error) {
    console.error("❌ Login failed:", error.message);
    alert("Login failed: " + error.message);
  }
});

// Auth state listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("👤 Authenticated as:", user.email);

    // Hide login box
    if (loginBox) loginBox.style.display = "none";

    // Inject nav bar using modular function
    injectNav(user.email);
  } else {
    console.log("👤 No user authenticated");
    if (loginBox) loginBox.style.display = "block";
  }
});
