/**
 * Bindala Tech - Interactive Scripts
 * Handles mobile sidebar, navigation, and smooth scroll behavior.
 */

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  function openSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  if (overlay) overlay.addEventListener("click", closeSidebar);

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
});
