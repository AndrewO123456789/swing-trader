export function injectNav(uid = null) {
  const container = document.getElementById("navContainer");
  if (!container) return console.warn("[SwingTrader] ⚠️ navContainer not found");

  const navHTML = `
    <nav class="main-nav">
      <a class="nav-link" href="index.html">Home</a>
      <a class="nav-link" href="watchlist.html">Watchlist</a>
      <div class="dropdown">
        <a href="#" class="nav-link dropdown-trigger">Alerts</a>
        <div class="dropdown-content">
          <a class="dropdown-item" href="newalert.html">New Alert</a>
          <a class="dropdown-item" href="setalerts.html">Set Alerts</a>
          <a class="dropdown-item" href="triggeredalerts.html">Triggered Alerts</a>
        </div>
      </div>
      ${uid ? `
        <a class="nav-link" href="settings.html">Settings</a>
        <a class="nav-link" href="#" id="logoutLink">Logout</a>
      ` : ''}
    </nav>
  `;

  container.innerHTML = navHTML;

  if (uid) {
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

  console.log(`[SwingTrader] ✅ Nav injected${uid ? " for UID: " + uid : ""}`);
}
