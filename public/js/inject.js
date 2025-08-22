// public/js/inject.js
import { injectNav } from "./injectNav.js";

function loadComponent(file, targetId, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
      if (callback) callback(); // 🔁 Run callback after injection
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header.html", "header-container", () => {
    injectNav(); // ✅ Inject nav after header loads
  });
  loadComponent("footer.html", "footer-container");
});
