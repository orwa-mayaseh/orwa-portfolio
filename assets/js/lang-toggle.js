// ===============================
// Language Toggle (English / Arabic)
// ===============================
export function initLangToggle({ translations, defaultLang = "en" } = {}) {
  // Load saved language from localStorage, or use default
  const savedLang = localStorage.getItem("lang");
  const currentLang = savedLang || defaultLang;

  // -------------------------------
  // APPLY LANGUAGE FUNCTION
  // -------------------------------
  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // ---- 1) NORMAL TEXT TRANSLATIONS ----
    const i18nElements = document.querySelectorAll("[data-i18n]");

    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      const text = translations[lang][key];

      if (text) {
        element.textContent = text;

        // If element has data-text (typing/reveal)
        if (element.hasAttribute("data-text")) {
          element.setAttribute("data-text", text);
        }
      }
    });

    // ---- 2) PLACEHOLDER TRANSLATIONS ----
    const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const text = translations[lang][key];

      if (text) {
        element.setAttribute("placeholder", text);
      }
    });
  }

  // Apply language on first load
  applyLanguage(currentLang);

  // -------------------------------
  // LANGUAGE SWITCH BUTTON
  // -------------------------------
  const langToggleBtn = document.querySelector(".site__lang-toggle");
  if (!langToggleBtn) return;

  langToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("lang");
    const newLang = current === "ar" ? "en" : "ar";

    localStorage.setItem("lang", newLang);
    applyLanguage(newLang);
  });
}
