// ===============================
// Skills Progress Bar Reveal
// ===============================

export function initSkillsReveal({
  selector = ".skill__card",
  barSelector = ".skill__bar span",
  root = null,
  rootMargin = "0px 0px -100px 0px",
  threshold = 0.3,
} = {}) {
  // Select all skill cards
  const cards = document.querySelectorAll(selector);

  // Create observer for progress bars
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const card = entry.target; // current skill card
        const bar = card.querySelector(barSelector); // progress bar span

        // Save the real width we want (ex: 90%)
        const finalWidth = bar.dataset.width;

        // When element enters viewport
        if (entry.isIntersecting) {
          bar.style.width = finalWidth; // animate bar to real width
        } else {
          bar.style.width = "0%"; // reset bar when leaving (for re-enter animation)
        }
      });
    },
    { root, rootMargin, threshold }
  );

  // Prepare each bar
  cards.forEach((card) => {
    const bar = card.querySelector(barSelector);

    // Save original width from inline style
    bar.dataset.width = bar.style.width;

    // Make bar start from zero
    bar.style.width = "0%";

    // Observe each card
    observer.observe(card);
  });
}
