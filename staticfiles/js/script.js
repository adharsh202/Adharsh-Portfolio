// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form submission alert (temporary for now)
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been sent.");
    contactForm.reset();
  });
}
