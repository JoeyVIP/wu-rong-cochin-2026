// Smooth scroll to section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.classList.contains('active')) {
      toggleMobileMenu();
    }
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    menuIcon.textContent = '☰';
  } else {
    mobileNav.classList.add('active');
    menuIcon.textContent = '×';
  }
}

// Scroll Reveal Animation - 1000ms slow fade-in
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
});
