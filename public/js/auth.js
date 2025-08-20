// public/js/auth.js

document.addEventListener('DOMContentLoaded', () => {
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
    console.log("✅ Firebase initialized");
  } else {
    console.log("ℹ️ Firebase already initialized");
  }

  // ✅ Stage 2: Safe onAuthStateChanged logic
  firebase.auth().onAuthStateChanged(user => {
    const loginBox = document.querySelector(".login-box");
    if (user && loginBox) {
      loginBox.style.display = "none";
      console.log("👤 User logged in — hiding login box");
    }
  });
});

