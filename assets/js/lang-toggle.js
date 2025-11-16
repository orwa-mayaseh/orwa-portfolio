// ===============================
// Language Toggle (English / Arabic)
// ===============================
export function initLangToggle({ translations, defaultLang = "en" } = {}) {
  // Load saved language from localStorage, or use default
  const savedLang = localStorage.getItem("lang");
  const currentLang = savedLang || defaultLang;

  // -------------------------------
  // Helper Function:
  // Apply a given language to the document
  // -------------------------------
  function applyLanguage(lang) {
    // Set HTML language attribute
    document.documentElement.setAttribute("lang", lang);

    // Set direction based on the language
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // Select all elements that contain data-i18n (translatable elements)
    const i18nElements = document.querySelectorAll("[data-i18n]");

    // Update all translation-enabled elements
    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      const text = translations[lang][key];

      // If translation exists → apply it
      if (text) {
        element.textContent = text;

        // If the element uses data-text (for glowing/typing animation)
        if (element.hasAttribute("data-text")) {
          element.setAttribute("data-text", text);
        }
      }
    });
  }

  // -------------------------------
  // Apply language on first page load
  // -------------------------------
  applyLanguage(currentLang);

  // -------------------------------
  // Handle language switch button
  // -------------------------------
  const langToggleBtn = document.querySelector(".site__lang-toggle");
  if (!langToggleBtn) return; // Exit if button not found

  langToggleBtn.addEventListener("click", () => {
    // Get the currently applied language from <html>
    const current = document.documentElement.getAttribute("lang");

    // Toggle between Arabic and English
    const newLang = current === "ar" ? "en" : "ar";

    // Save new language to localStorage
    localStorage.setItem("lang", newLang);

    // Apply the new language
    applyLanguage(newLang);
  });
}
