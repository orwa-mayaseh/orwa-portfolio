// ===============================
// Animated Snowflakes Effect
// ===============================

export function initSnowflakes() {
  // Select the main site container
  const site = document.querySelector(".site");

  // Function to create a single snowflake
  const createSnowflake = () => {
    // Create snowflake container
    const snowFlake = document.createElement("span");
    snowFlake.classList.add("snowflake");

    // Create inner element for styling/animation
    const inner = document.createElement("span");
    inner.classList.add("inner");

    // Random size between 2px and 7px
    const size = Math.random() * 5 + 2;
    inner.style.width = `${size}px`;
    inner.style.height = `${size}px`;

    // Random horizontal position
    snowFlake.style.left = Math.random() * window.innerWidth + "px";

    // Random falling duration between 5s and 10s
    const duration = Math.random() * 5 + 5;
    snowFlake.style.animationDuration = `${duration}s`;

    // Random rotation duration
    inner.style.animationDuration = `${Math.random() * 3 + 2}s`;

    // Append and add to the DOM
    snowFlake.appendChild(inner);
    site.appendChild(snowFlake);

    // Remove the snowflake after it finishes falling
    setTimeout(() => {
      snowFlake.remove();
    }, duration * 1000);
  };

  // Create a new snowflake every 200ms
  setInterval(createSnowflake, 200);
}
