// public/js/authGuard.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/**
 * Atomic page protection logic for SwingTrader
 * @param {FirebaseApp} app - Firebase app instance
 * @param {string} redirectPath - Path to redirect if user is not authenticated
 */
export function protectPage(app, redirectPath = "/index.html") {
  console.log("[AuthGuard] 🔐 protectPage() invoked — checking auth state...");

  const auth = getAuth(app);

  // ⏱️ Heartbeat log every 2 seconds
  const heartbeat = setInterval(() => {
    console.log("[AuthGuard] ❤️ heartbeat — still waiting for auth state...");
  }, 2000);

  onAuthStateChanged(auth, (user) => {
    clearInterval(heartbeat); // 🛑 Stop heartbeat once state is known

    if (user) {
      console.log(`[AuthGuard] ✅ User is logged in: ${user.email}`);
      document.body.style.visibility = "visible";
    } else {
      console.warn(`[AuthGuard] ⛔ No user detected — redirecting to: ${redirectPath}`);
      setTimeout(() => {
        window.location.href = redirectPath;
      }, 1000); // ⏳ 1-second delay before redirect
    }
  });
}
