// public/js/inject.js
function loadComponent(file, targetId) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  loadComponent("header.html", "header-container");
  loadComponent("footer.html", "footer-container");
});
