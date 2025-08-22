export async function injectNav(uid = null) {
  const container = document.getElementById("navContainer");
  if (!container) return console.warn("[SwingTrader] ⚠️ navContainer not found");

  try {
    const response = await fetch("/nav.html");
    const html = await response.text();
    container.innerHTML = html;
    console.log(`[SwingTrader] ✅ Nav injected from nav.html${uid ? " for UID: " + uid : ""}`);

    if (uid) {
      document.querySelectorAll(".uid-only").forEach(el => el.style.display = "inline-block");

      const logoutLink = document.getElementById("logoutLink");
      if (logoutLink) {
        logoutLink.addEventListener("click", (e) => {
          e.preventDefault();
          import("https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js").then(({ getAuth, signOut }) => {
            const auth = getAuth();
            signOut(auth).then(() => {
              console.log("[SwingTrader] 🔒 User logged out");
              window.location.href = "/index.html";
            });
          });
        });
      }
    }
  } catch (err) {
    console.error("[SwingTrader] ❌ Failed to inject NAV:", err);
  }
}
