// File: /public/js/main.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log("✅ Firebase initialized");

// DOM elements
const loginBox = document.querySelector(".login-box");
const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const navContainer = document.getElementById("navContainer");

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

    // Inject nav bar
    injectNav(user);
  } else {
    console.log("👤 No user authenticated");
    if (loginBox) loginBox.style.display = "block";
  }
});

// Inject UID-scoped nav bar
function injectNav(user) {
  const nav = document.createElement("nav");

  nav.innerHTML = `
    <a href="/dashboard.html">Dashboard</a>
    <a href="/watchlist.html">Watchlist</a>
    <a href="/settings.html">Settings</a>
    <div id="user-info">${user.email}</div>
  `;

  navContainer.innerHTML = "";
  navContainer.appendChild(nav);
  console.log("✅ Nav injected for:", user.email);
}
