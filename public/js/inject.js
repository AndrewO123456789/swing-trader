export function injectNav(uid) {
  const navHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="watchlist.html">Watchlist</a>
      <a href="setalerts.html">Set Alerts</a>
      <a href="triggeredalerts.html">Triggered Alerts</a>
      <div id="user-info">Logged in as ${uid}</div>
    </nav>
  `;
  document.getElementById("navContainer").innerHTML = navHTML;
  console.log("[SwingTrader] ✅ Nav injected for UID:", uid);
}

