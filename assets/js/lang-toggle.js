// ===============================
// Language Toggle (English / Arabic)
// ===============================
export function initLangToggle({ translations, defaultLang = "en" } = {}) {
  // Get saved language from localStorage or use default
  const savedLang = localStorage.getItem("lang");
  const currentLang = savedLang || defaultLang;

  // Update the document language and direction
  document.documentElement.setAttribute("lang", currentLang);
  document.documentElement.setAttribute(
    "dir",
    currentLang === "ar" ? "rtl" : "ltr"
  );

  // select all elements with data-i18n attribute
  const i18nElements = document.querySelectorAll("[data-i18n]");

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][currentLang]) {
      const text = translations[key][currentLang];
      el.textContent = text;
      if (element.hasAttribute("data-text")) {
        element.setAttribute("data-text", text);
      }
    }
  });

  // Handle language toggle button click
  const langToggleBtn = document.querySelector(".site__lang-toggle");

  if (!langToggleBtn) return; // Exit if button not found

  // Add click event listener to toggle language
  langToggleBtn.addEventListener("click", () => {
    // Read the current language directly from <html>
    const currentLang = document.documentElement.getAttribute("lang");
    const newLang = currentLang === "ar" ? "en" : "ar";

    // Save new language
    localStorage.setItem("lang", newLang);

    // Apply new language and direction
    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.setAttribute(
      "dir",
      newLang === "ar" ? "rtl" : "ltr"
    );

    // Update all i18n elements
    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[newLang] && translations[newLang][key]) {
        const text = translations[newLang][key];
        element.textContent = text;
        if (element.hasAttribute("data-text")) {
          element.setAttribute("data-text", text);
        }
      }
    });

    // i18nElements.forEach((element) => {
    //   const key = element.dataset.i18n;
    //   if (translations[newLang] && translations[newLang][key]) {
    //     element.textContent = translations[newLang][key];
    //   }
    // });
  });
}
