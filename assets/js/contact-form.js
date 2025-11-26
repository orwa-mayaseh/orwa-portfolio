// ==========================================
// contact-form.js
// Handles contact form validation + sending via EmailJS
// Uses global window.emailjs loaded via HTML <script>
// ==========================================

/**
 * Initialize contact form with validation and EmailJS
 * @param {string} formSelector - CSS selector for the contact form
 * @param {string} feedbackSelector - CSS selector for the feedback element
 */
export function initContactForm(
  formSelector = "#contactForm",
  feedbackSelector = "#formFeedback"
) {
  // 1️⃣ Select the form and feedback element
  const form = document.querySelector(formSelector);
  const feedback = document.querySelector(feedbackSelector);

  // Check if form and feedback exist
  if (!form || !feedback) {
    console.warn("Contact form or feedback element not found!");
    return;
  }

  // 2️⃣ Initialize EmailJS with public key
  // This must match the key from your EmailJS dashboard
  window.emailjs.init("h0t45pdbZHNb8WNOL");

  // 3️⃣ Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // -------------------------------
    // Validation: check all fields
    // -------------------------------
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const subject = form.querySelector("#subject").value.trim();
    const message = form.querySelector("#message").value.trim();

    // Check for empty fields
    if (!name || !email || !subject || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";

      // Hide feedback after 4 seconds
      setTimeout(() => {
        feedback.textContent = "";
      }, 4000);
      return;
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Please enter a valid email.";
      feedback.style.color = "red";

      setTimeout(() => {
        feedback.textContent = "";
      }, 4000);
      return;
    }

    // -------------------------------
    // Send form via EmailJS
    // -------------------------------
    const serviceID = "service_knert8g";
    const templateID = "template_ppvh7cn";

    // sendForm automatically reads values from input fields
    window.emailjs
      .sendForm(serviceID, templateID, form)
      .then(() => {
        // Success: show message
        feedback.textContent = "Message sent successfully!";
        feedback.style.color = "green";

        // Reset the form fields
        form.reset();

        // Hide feedback after 4 seconds
        setTimeout(() => {
          feedback.textContent = "";
        }, 4000);
      })
      .catch((err) => {
        // Error: show message and log details
        console.error("EmailJS Error:", err);
        feedback.textContent =
          "Failed to send message. Please try again later.";
        feedback.style.color = "red";

        // Hide feedback after 4 seconds
        setTimeout(() => {
          feedback.textContent = "";
        }, 4000);
      });
  });
}
