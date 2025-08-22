export function injectNav(uid = null) {
  const container = document.getElementById("navContainer");
  if (!container) return console.warn("[SwingTrader] ⚠️ navContainer not found");

  const navHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="userpage1.html">User Page 1</a>
      <a href="watchlist.html">Watchlist</a>
      <div class="dropdown">
        <a class="dropdown-trigger" href="#">Alerts</a>
        <div class="dropdown-content">
          <a href="newalert.html">New Alert</a>
          <a href="setalerts.html">Set Alerts</a>
          <a href="triggeredalerts.html">Triggered Alerts</a>
        </div>
      </div>
      ${uid ? `
        <a href="settings.html">Settings</a>
        <a href="#" id="logoutLink">Logout</a>
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
