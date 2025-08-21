// public/js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtrZRTIKiN_6UasKzkemvEbRkSCMow6Qo",
  authDomain: "swing-trader-6431c.firebaseapp.com",
  projectId: "swing-trader-6431c",
  storageBucket: "swing-trader-6431c.appspot.com", // ✅ corrected domain
  messagingSenderId: "255789637374",
  appId: "1:255789637374:web:1c12a2f513e98559e64faf"
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("[Firebase] 🧠 Session persistence set to local"))
  .catch((err) => console.error("[Firebase] ❌ Failed to set persistence:", err));
