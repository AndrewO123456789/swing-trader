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

  // ✅ Attach login listener
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = prompt("Enter your email:");
      const password = prompt("Enter your password:");

      if (!email || !password) {
        alert("Email and password are required.");
        return;
      }

      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => userCredential.user.getIdToken())
        .then((idToken) => {
          console.log('✅ ID Token:', idToken);
          // TODO: Send token to backend for verification
        })
        .catch((error) => {
          console.error('❌ Login failed:', error.message);
          alert("Login failed: " + error.message);
        });
    });
  } else {
    console.warn("⚠️ Login button not found in DOM.");
  }
});
