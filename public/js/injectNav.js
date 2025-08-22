export function injectNav(uid = null) {
  const container = document.getElementById("navContainer");
  if (!container) return console.warn("[SwingTrader] ⚠️ navContainer not found");

  let navHTML = `
    <nav>
      <ul id="navMenu">
        <li><a href="index.html">Home</a></li>
        <li><a href="userpage1.html">User Page 1</a></li>
        <li><a href="watchlist.html">Watchlist</a></li>
  `;

  if (uid) {
    navHTML += `
        <li><a href="settings.html">Settings</a></li>
        <li><a href="#" id="logoutLink">Logout</a></li>
    `;
  }

  navHTML += `</ul></nav>`;
  container.innerHTML = navHTML;

  if (uid) {
    document.getElementById("logoutLink").addEventListener("click", (e) => {
      e.preventDefault();
      firebase.auth().signOut().then(() => {
        console.log("[SwingTrader] 🔒 User logged out");
        window.location.href = "/index.html";
      });
    });
  }

  console.log(`[SwingTrader] ✅ Nav injected${uid ? " for UID: " + uid : ""}`);
}
