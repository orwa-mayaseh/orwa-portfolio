
// Select the "site__menu-toggle" button
const openMenuBtn = document.querySelector(".site__menu-toggle");

// Select the hamburger icon inside the button
const icon = openMenuBtn.querySelector("i");

// Select the navigation menu (aside)
const asideBar = document.querySelector(".site__aside");

// Select all sidebar links
const navLinks = document.querySelectorAll(".site__aside-link");

let isAsideOpen = false; // Track sidebar state

// Function to show/hide sidebar
const toggleMenu = () => {
  asideBar.classList.toggle("asideIsOpen");

  // Switch icon safely (bars ↔ xmark)
  if (isAsideOpen) {
    icon.classList.replace("fa-xmark", "fa-bars");
  } else {
    icon.classList.replace("fa-bars", "fa-xmark");
  }

  isAsideOpen = !isAsideOpen;
};

// Toggle on button click
openMenuBtn.addEventListener("click", toggleMenu);

// Close sidebar when any link is clicked (optional but nice UX)
navLinks.forEach(link => link.addEventListener("click", () => {
  asideBar.classList.remove("asideIsOpen");
  icon.classList.replace("fa-xmark", "fa-bars");
  isAsideOpen = false;
}));
/*################################################################## */
//Snow flake

//  Select the 
const site = document.querySelector(".site");

const createSnowflake = () => {
  const snowFlake = document.createElement("span");
  snowFlake.classList.add("snowflake");

  const inner = document.createElement("span");
  inner.classList.add("inner");

  // حجم عشوائي
  const size = Math.random() * 5 + 2;
  inner.style.width = `${size}px`;
  inner.style.height = `${size}px`;

  // موقع أفقي عشوائي
  snowFlake.style.left = Math.random() * window.innerWidth + "px";

  // مدة الحركة
  const duration = Math.random() * 5 + 5;
  snowFlake.style.animationDuration = `${duration}s`;

  inner.style.animationDuration = `${Math.random() * 3 + 2}s`;

  snowFlake.appendChild(inner);
  site.appendChild(snowFlake);

  setTimeout(() => {
    snowFlake.remove();
  }, duration * 1000);
};

setInterval(createSnowflake, 200);


// ===============================
// Theme Toggle with Local Storage
// ===============================
const themeToggleBtn = document.querySelector('.site__theme-toggle');
const themeIcon = themeToggleBtn.querySelector('.site__theme-toggle i');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
}
