// public/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
  console.log("[SwingTrader] 🚀 DOM fully loaded — initializing Firebase");

  // ✅ Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtrZRTIKiN_6UasKzkemvEbRkSCMow6Qo",
    authDomain: "swing-trader-6431c.firebaseapp.com",
    projectId: "swing-trader-6431c",
    storageBucket: "swing-trader-6431c.firebasestorage.app",
    messagingSenderId: "255789637374",
    appId: "1:255789637374:web:1c12a2f513e98559e64faf"
  };

  // ✅ Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("[SwingTrader] ✅ Firebase initialized");
  } else {
    console.log("[SwingTrader] ℹ️ Firebase already initialized");
  }

  // ✅ Stage 2: Safe onAuthStateChanged logic
  firebase.auth().onAuthStateChanged(user => {
    const loginBox = document.querySelector(".login-box");

    if (user) {
      console.log(`[SwingTrader] 👤 User logged in: ${user.email}`);
      if (loginBox) {
        loginBox.style.display = "none";
        console.log("[SwingTrader] 🧼 Hiding login box");
      }
      document.body.style.visibility = "visible";
    } else {
      console.warn("[SwingTrader] ⛔ No user detected — login required");
      document.body.style.visibility = "visible"; // Fail-safe: show page even if loginBox missing
    }
  });
});
