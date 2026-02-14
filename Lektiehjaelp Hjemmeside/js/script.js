// Marker aktiv menu-knap ud fra sidens filnavn
document.addEventListener("DOMContentLoaded", () => {
  const current = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === current) link.classList.add("active");
  });
});
