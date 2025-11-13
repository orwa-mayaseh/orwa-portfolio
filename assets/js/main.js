// ===============================
// Main JS Entry Point
// ===============================

// Import all feature modules
import { initMenuToggle } from "./menu-toggle.js";
import { initSnowflakes } from "./snowflakes.js";
import { initThemeToggle } from "./theme-toggle.js";
import { translations } from "./lang.js";
import { initLangToggle } from "./lang-toggle.js";

// Wait for the DOM to fully load before initializing
document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle(); // Sidebar toggle feature
  initSnowflakes(); // Falling snow animation
  initThemeToggle(); // Light/Dark theme toggle
  initLangToggle({ translations, defaultLang: "en" }); // Language toggle feature
});
