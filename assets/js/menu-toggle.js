// ===============================
// Sidebar Menu Toggle
// ===============================

export function initMenuToggle() {
  // Select the toggle button (hamburger icon)
  const openMenuBtn = document.querySelector(".site__menu-toggle");

  // Select the icon inside the button
  const icon = openMenuBtn.querySelector("i");

  // Select the sidebar (navigation)
  const asideBar = document.querySelector(".site__aside");

  // Select all sidebar navigation links
  const navLinks = document.querySelectorAll(".site__aside-link");

  let isAsideOpen = false; // Track sidebar open/close state

  // Function to toggle sidebar visibility
  const toggleMenu = () => {
    asideBar.classList.toggle("asideIsOpen");

    // Switch between hamburger (bars) and close (xmark) icons
    if (isAsideOpen) {
      icon.classList.replace("fa-xmark", "fa-bars");
    } else {
      icon.classList.replace("fa-bars", "fa-xmark");
    }

    isAsideOpen = !isAsideOpen;
  };

  // Toggle sidebar on button click
  openMenuBtn.addEventListener("click", toggleMenu);

  // Close sidebar when any navigation link is clicked
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      asideBar.classList.remove("asideIsOpen");
      icon.classList.replace("fa-xmark", "fa-bars");
      isAsideOpen = false;
    })
  );
}
