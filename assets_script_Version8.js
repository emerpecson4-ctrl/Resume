// Minimal JS for mobile menu behavior and simple progressive enhancement for the "Watch Intro" button.
// Save as assets/script.js

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('primary-nav');

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? '' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '0.5rem';
      nav.focus();
    });

    // Close menu on outside click (small)
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target) && window.innerWidth < 900) {
        nav.style.display = '';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Watch Intro button (demo)
  const watchBtn = document.getElementById('watch-intro');
  if (watchBtn) {
    watchBtn.addEventListener('click', function () {
      // Example behaviour: open a simple modal or link to a hosted intro.
      // For now we just toggle a basic alert for demonstration.
      alert('Intro video placeholder — replace with embedded video or link.');
    });
  }

  // Simple progressive enhancement: If `#contact-form` action is default placeholder,
  // intercept and fallback to mailto (so the form still works without server).
  const form = document.getElementById('contact-form');
  if (form && form.action && form.action.includes('formspree.io/f/your-id')) {
    form.addEventListener('submit', function (e) {
      // if user hasn't configured Formspree, allow submission but warn user
      if (!form.action || form.action.includes('your-id')) {
        // fallback behaviour: open mailto with subject and body
        e.preventDefault();
        const name = encodeURIComponent(form.name.value || '');
        const email = encodeURIComponent(form.email.value || '');
        const message = encodeURIComponent(form.message.value || '');
        const href = `mailto:emer.pecson4@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + (form.name.value || 'Website'))}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
        window.location.href = href;
      }
    });
  }
});