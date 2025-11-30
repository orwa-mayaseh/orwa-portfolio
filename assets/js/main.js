// ===============================
// Main JS Entry Point
// ===============================

// Import all feature modules
import { initMenuToggle } from "./modules/menu-toggle.js";
import { initSnowflakes } from "./modules/snowflakes.js";
import { initThemeToggle } from "./modules/theme-toggle.js";
import { translations } from "./modules/lang.js";
import { initLangToggle } from "./modules/lang-toggle.js";
import { initRevealStagger } from "./modules/reveal.js";
import { initSkillsReveal } from "./modules/progress-bar-reveal.js";
import { initContactForm } from "./modules/contact-form.js";

// Wait for the DOM to fully load before initializing features
document.addEventListener("DOMContentLoaded", () => {
  initMenuToggle(); // Sidebar toggle feature
  initSnowflakes(); // Falling snow animation
  initThemeToggle(); // Light/Dark theme toggle
  initLangToggle({ translations, defaultLang: "en" }); // Language toggle feature

  // Start stagger reveal animation
  initRevealStagger({
    selector: ".reveal",
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.1,
    delay: 50,
  });

  // Initialize Skills Progress Bar Reveal
  initSkillsReveal({
    selector: ".skill__card",
    barSelector: ".skill__bar span",
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.3,
  });

  // Initialize contact form
  initContactForm("#contactForm", "#formFeedback");
});
