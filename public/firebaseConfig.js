// public/js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtrZRTIKiN_6UasKzkemvEbRkSCMow6Qo",
  authDomain: "swing-trader-6431c.firebaseapp.com",
  projectId: "swing-trader-6431c",
  storageBucket: "swing-trader-6431c.appspot.com", // ✅ corrected domain
  messagingSenderId: "255789637374",
  appId: "YOUR_APP_ID" // 🔧 replace with actual App ID
};

export const app = initializeApp(firebaseConfig);

// ✅ Force session persistence
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("[Firebase] 🧠 Session persistence set to local"))
  .catch((err) => console.error("[Firebase] ❌ Failed to set persistence:", err));
