// ResumeSmartBuild - site interactivity
document.addEventListener('DOMContentLoaded', () => {
  console.log('[ResumeSmartBuild] DOM is ready and JS is running');

  // 1. ScrollReveal animations (if ScrollReveal is loaded)
  if (window.ScrollReveal) {
    ScrollReveal().reveal('.reveal', {
      distance: '30px',
      duration: 800,
      easing: 'ease-out',
      origin: 'bottom',
      interval: 100,
    });
    console.log('[ResumeSmartBuild] ScrollReveal initialized');
  }

  // 2. Sticky Header Behavior
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Back to Top Button
  const backToTop = document.querySelector('#backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Newsletter Form Validation
  const newsletterForm = document.querySelector('#newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  }

  // 5. Smooth Scrolling for Anchor Links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 6. Search Filter (for featured articles)
  const searchInput = document.querySelector('#searchInput');
  const articles = document.querySelectorAll('.article-card');

  if (searchInput && articles.length > 0) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      articles.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
      });
    });
  }
});
