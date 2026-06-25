/* Home page interactions */
(function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Init language
  applyLang(getStoredLang());

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Card click → navigate to viewer
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();

      // Internal page (e.g. native catalogue) takes priority over PDF viewer
      const href = card.dataset.href;
      if (href) {
        document.body.style.transition = 'opacity 0.4s ease, filter 0.4s ease';
        document.body.style.opacity = '0';
        document.body.style.filter = 'blur(6px)';
        setTimeout(() => { window.location.href = href; }, 350);
        return;
      }

      const lang = getStoredLang();
      let pdf = card.dataset.pdf;
      // Language-aware PDF (Company Sheet)
      if (!pdf) {
        pdf = card.getAttribute(`data-pdf-${lang}`)
            || card.getAttribute('data-pdf-fr')
            || card.getAttribute('data-pdf-en')
            || card.getAttribute('data-pdf-ar');
      }
      if (!pdf) return;

      const titleKey = card.dataset.titleI18n;
      const descKey = card.dataset.descI18n;
      const params = new URLSearchParams();
      params.set('file', pdf);
      if (titleKey) params.set('t', titleKey);
      if (descKey) params.set('d', descKey);
      // Forward language-variant info so viewer can swap on language change
      ['fr', 'en', 'ar'].forEach(l => {
        const v = card.getAttribute(`data-pdf-${l}`);
        if (v) params.set(`pdf_${l}`, v);
      });

      // Exit transition
      document.body.style.transition = 'opacity 0.4s ease, filter 0.4s ease';
      document.body.style.opacity = '0';
      document.body.style.filter = 'blur(6px)';
      setTimeout(() => {
        window.location.href = 'viewer.html?' + params.toString();
      }, 350);
    });
  });

  // Card mouse-spotlight effect
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 100;
      const my = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    });
  });

  // Subtle parallax on hero on mouse move
  const hero = document.querySelector('.hero-inner');
  if (hero) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      hero.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // Reveal cards on scroll if user scrolls early (cards animate via CSS otherwise)
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.card').forEach(c => io.observe(c));
  }

  // Page entry transition
  window.addEventListener('pageshow', () => {
    document.body.style.opacity = '1';
    document.body.style.filter = 'none';
  });
})();
