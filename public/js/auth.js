// public/js/authGuard.js
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/**
 * Atomic page protection logic for SwingTrader
 * @param {FirebaseApp} app - Firebase app instance
 * @param {string} redirectPath - Path to redirect if user is not authenticated
 */
export function protectPage(app, redirectPath = "/index.html") {
  console.log("[AuthGuard] 🔐 protectPage() invoked — checking auth state...");

  const auth = getAuth(app); // ✅ Modular SDK requires explicit app instance

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`[AuthGuard] ✅ User is logged in: ${user.email}`);
      document.body.style.visibility = "visible";
    } else {
      console.warn(`[AuthGuard] ⛔ No user detected — redirecting to: ${redirectPath}`);
      window.location.href = redirectPath;
    }
  });
}
