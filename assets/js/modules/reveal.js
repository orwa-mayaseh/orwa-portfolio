// ===============================
// Basic Staggered Reveal (One-Time)
// ===============================

export function initRevealStagger({
  selector = ".reveal",
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  delay = 120,
} = {}) {
  const revealElements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Real index based on NodeList order
        const index = [...revealElements].indexOf(entry.target);

        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("active");
          }, index * delay);

          // === Prevent reveal from triggering again ===
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root,
      rootMargin,
      threshold,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
