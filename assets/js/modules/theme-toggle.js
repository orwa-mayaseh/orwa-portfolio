// ===============================
// Theme Toggle (Light / Dark)
// ===============================

export function initThemeToggle() {
  // Select the theme toggle button
  const themeToggleBtn = document.querySelector(".site__theme-toggle");

  // Select the icon inside the button
  const themeIcon = themeToggleBtn.querySelector("i");

  // Get saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme to the document
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateIcon(savedTheme);

  // Listen for user clicks to toggle theme
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Apply the new theme
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  // Helper function to switch icon between sun/moon
  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }
}
