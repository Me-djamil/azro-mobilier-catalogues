/* ============================================
   Azro Mobilier — Carte de visite (flip card)
   ============================================ */

const CARTE_I18N = {
  fr: {
    tagline: 'Pensez Grand · Meublez Pro',
    back: 'Retour',
    eyebrow: 'Carte de visite',
    title: 'Azro Mobilier',
    sub: 'Survolez ou cliquez la carte pour la retourner',
    flip: 'Retourner la carte',
    img: "Image JPEG",
    pdf: 'PDF original',
  },
  en: {
    tagline: 'Think Big · Furnish Pro',
    back: 'Back',
    eyebrow: 'Business card',
    title: 'Azro Mobilier',
    sub: 'Hover or tap the card to flip it',
    flip: 'Flip the card',
    img: 'JPEG image',
    pdf: 'Original PDF',
  },
  ar: {
    tagline: 'فكّر كبيرًا · جهّز باحتراف',
    back: 'رجوع',
    eyebrow: 'بطاقة العمل',
    title: 'ش.ذ.م.م أزرو موبيلييي',
    sub: 'مرّر أو انقر على البطاقة لقلبها',
    flip: 'اقلب البطاقة',
    img: 'صورة JPEG',
    pdf: 'PDF الأصلي',
  },
};

function applyCarteLabels(lang) {
  const d = CARTE_I18N[lang] || CARTE_I18N.fr;
  document.getElementById('c-tagline').textContent = d.tagline;
  document.getElementById('c-back').textContent = d.back;
  document.getElementById('c-eyebrow').textContent = d.eyebrow;
  document.getElementById('c-title').textContent = d.title;
  document.getElementById('c-sub').textContent = d.sub;
  document.getElementById('c-flip-label').textContent = d.flip;
  document.getElementById('c-img-label').textContent = d.img;
  document.getElementById('c-pdf-label').textContent = d.pdf;
}

(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // sync with site language (dir + active button), then localise labels
  const lang = getStoredLang();
  applyLang(lang);
  applyCarteLabels(lang);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  document.addEventListener('langchange', (e) => applyCarteLabels(e.detail.lang));

  // Flip interactions (optional, only if the old flip card exists)
  const card = document.getElementById('bizcard');
  const flipBtn = document.getElementById('c-flip');
  if (card) {
    const toggle = () => card.classList.toggle('flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    if (flipBtn) flipBtn.addEventListener('click', toggle);
  }

  const qs = new URLSearchParams(location.search);

  // Clean export mode: card only, centered (used to render the downloadable image)
  if (qs.has('export')) document.body.classList.add('carte-export');

  // Start on the back face if requested (used for image export)
  if (qs.get('face') === 'back') {
    card.style.transition = 'none';
    card.classList.add('flipped');
    requestAnimationFrame(() => { card.style.transition = ''; });
  }

  // Subtle 3D tilt following the pointer (disabled once flipped via class state)
  const stage = card.parentElement;
  stage.addEventListener('mousemove', (e) => {
    const r = stage.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.setProperty('--tiltX', (py * -7).toFixed(2) + 'deg');
    card.style.setProperty('--tiltY', (px * 9).toFixed(2) + 'deg');
  });
  stage.addEventListener('mouseleave', () => {
    card.style.setProperty('--tiltX', '0deg');
    card.style.setProperty('--tiltY', '0deg');
  });
})();
