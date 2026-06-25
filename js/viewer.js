/* Viewer page — renders PDF pages natively with PDF.js */
(function () {
  const params = new URLSearchParams(window.location.search);
  const file = params.get('file');
  const titleKey = params.get('t');
  const descKey = params.get('d');
  const variants = {
    fr: params.get('pdf_fr'),
    en: params.get('pdf_en'),
    ar: params.get('pdf_ar'),
  };
  const hasVariants = !!(variants.fr || variants.en || variants.ar);

  if (!file) { window.location.href = 'index.html'; return; }

  // Configure PDF.js worker
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  // DOM refs
  const pagesEl = document.getElementById('pdfPages');
  const nativeEl = document.getElementById('pdfNative');
  const loaderEl = document.getElementById('pdfLoader');
  const errorEl = document.getElementById('pdfError');
  const progressWrap = document.getElementById('progressWrap');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const titleEl = document.getElementById('viewerTitle');
  const subEl = document.getElementById('viewerSub');
  const downloadLink = document.getElementById('downloadLink');
  const openLink = document.getElementById('openLink');
  const errorOpenLink = document.getElementById('errorOpenLink');
  const fab = document.getElementById('fabDownload');
  const zoomIn = document.getElementById('zoomIn');
  const zoomOut = document.getElementById('zoomOut');
  const zoomLevel = document.getElementById('zoomLevel');

  // Zoom state
  let baseScale = 1.4;       // initial rendering scale (HiDPI handled separately)
  let userScale = 1.0;       // zoom multiplier
  let currentPdfDoc = null;
  let currentFileName = file;

  const pdfUrl = (name) => encodeURIComponent(name).replace(/%2F/g, '/');

  function updateDownloadTargets(name) {
    const url = pdfUrl(name);
    [downloadLink, fab, errorOpenLink].forEach(el => {
      if (!el) return;
      el.href = url;
      el.setAttribute('download', name);
    });
    if (openLink) openLink.href = url;
  }

  function updateTitleFromI18n() {
    const lang = getStoredLang();
    const dict = I18N[lang] || I18N.fr;
    if (titleKey && dict[titleKey]) {
      titleEl.textContent = dict[titleKey];
      document.title = `Azro Mobilier — ${dict[titleKey]}`;
    } else {
      const pretty = decodeURIComponent(currentFileName).replace(/\.(pdf|PDF)$/i, '');
      titleEl.textContent = pretty;
      document.title = `Azro Mobilier — ${pretty}`;
    }
    if (descKey && dict[descKey]) subEl.textContent = dict[descKey];
  }

  function clearPages() {
    pagesEl.innerHTML = '';
  }

  function showError() {
    loaderEl.style.display = 'none';
    errorEl.hidden = false;
  }

  let fallbackToastEl = null;
  function showFallbackNotice(missing, used) {
    const lang = getStoredLang();
    const dict = I18N[lang] || I18N.fr;
    const msg = (dict.fallback_msg || 'Version indisponible — version par défaut affichée.');
    if (!fallbackToastEl) {
      fallbackToastEl = document.createElement('div');
      fallbackToastEl.className = 'fallback-toast';
      document.body.appendChild(fallbackToastEl);
    }
    fallbackToastEl.textContent = msg;
    fallbackToastEl.classList.add('show');
    clearTimeout(showFallbackNotice._t);
    showFallbackNotice._t = setTimeout(() => {
      fallbackToastEl.classList.remove('show');
    }, 4000);
  }

  // Arabic PDFs render incorrectly in PDF.js (font shaping). Route them to
  // the browser's built-in PDF renderer for faithful display.
  function shouldUseNative(name) {
    return /_ar\.pdf$/i.test(name);
  }

  async function renderNative(name, opts = {}) {
    // Verify the file exists before swapping to iframe (iframe has no 404 event)
    try {
      const resp = await fetch(pdfUrl(name), { method: 'HEAD' });
      if (!resp.ok) throw new Error('not found');
    } catch {
      const tried = opts.tried || new Set();
      tried.add(name);
      const fallback = [variants.fr, file].find(c => c && !tried.has(c));
      if (fallback) {
        showFallbackNotice(name, fallback);
        return renderPdf(fallback, { tried });
      }
      showError();
      return;
    }

    currentFileName = name;
    currentPdfDoc = null;
    updateDownloadTargets(name);

    // Hide PDF.js UI
    errorEl.hidden = true;
    loaderEl.style.display = 'none';
    progressWrap.hidden = true;
    clearPages();

    // Hide zoom controls (native viewer has its own)
    const zc = document.querySelector('.zoom-controls');
    if (zc) zc.style.display = 'none';

    // Show iframe with native PDF viewer
    nativeEl.hidden = false;
    nativeEl.src = pdfUrl(name) + '#view=FitH&toolbar=1&navpanes=0';
  }

  async function renderPdf(name, opts = {}) {
    // Route Arabic PDFs through the browser's native viewer
    if (shouldUseNative(name)) {
      return renderNative(name, opts);
    }

    if (!window.pdfjsLib) { showError(); return; }
    currentFileName = name;
    updateDownloadTargets(name);

    // Hide native iframe + restore PDF.js UI
    nativeEl.hidden = true;
    nativeEl.src = '';
    const zc = document.querySelector('.zoom-controls');
    if (zc) zc.style.display = '';

    // Reset UI
    errorEl.hidden = true;
    loaderEl.style.display = 'flex';
    loaderEl.classList.remove('hidden');
    progressWrap.hidden = true;
    clearPages();

    const url = pdfUrl(name);
    let pdf;
    try {
      pdf = await pdfjsLib.getDocument({
        url,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true,
        standardFontDataUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/standard_fonts/',
      }).promise;
    } catch (err) {
      console.warn('PDF load failed for', name, err && err.message);
      // Fallback chain: try FR variant → original file → error screen
      const tried = opts.tried || new Set();
      tried.add(name);
      const candidates = [variants.fr, file].filter(c => c && !tried.has(c));
      if (candidates.length) {
        showFallbackNotice(name, candidates[0]);
        return renderPdf(candidates[0], { tried });
      }
      showError();
      return;
    }
    currentPdfDoc = pdf;

    progressWrap.hidden = false;
    progressFill.style.width = '0%';
    progressText.textContent = `0 / ${pdf.numPages}`;

    // Render pages sequentially for smooth progress
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      // Stop if user navigated to a different PDF mid-render
      if (currentPdfDoc !== pdf) return;
      await renderPage(pdf, pageNum);
      const pct = (pageNum / pdf.numPages) * 100;
      progressFill.style.width = pct + '%';
      progressText.textContent = `${pageNum} / ${pdf.numPages}`;
      if (pageNum === 1) {
        // Hide loader as soon as first page is visible
        loaderEl.classList.add('hidden');
        setTimeout(() => { loaderEl.style.display = 'none'; }, 500);
      }
    }
  }

  async function renderPage(pdf, pageNum) {
    const page = await pdf.getPage(pageNum);
    const dpr = window.devicePixelRatio || 1;
    const scale = baseScale * userScale;
    const viewport = page.getViewport({ scale: scale * dpr });

    const card = document.createElement('div');
    card.className = 'pdf-page-card';
    card.style.animationDelay = `${Math.min((pageNum - 1) * 0.05, 0.4)}s`;
    card.dataset.page = String(pageNum);

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    canvas.style.width = (viewport.width / dpr) + 'px';
    canvas.style.height = (viewport.height / dpr) + 'px';

    const label = document.createElement('div');
    label.className = 'page-label';
    label.textContent = `${pageNum} / ${pdf.numPages}`;

    card.appendChild(canvas);
    card.appendChild(label);
    pagesEl.appendChild(card);

    const ctx = canvas.getContext('2d', { alpha: false });
    await page.render({ canvasContext: ctx, viewport }).promise;
  }

  // Re-render at new zoom
  async function rerender() {
    if (!currentPdfDoc) return;
    zoomLevel.textContent = Math.round(userScale * 100) + '%';
    clearPages();
    for (let i = 1; i <= currentPdfDoc.numPages; i++) {
      await renderPage(currentPdfDoc, i);
    }
  }

  zoomIn.addEventListener('click', () => {
    userScale = Math.min(userScale + 0.15, 2.5);
    rerender();
  });
  zoomOut.addEventListener('click', () => {
    userScale = Math.max(userScale - 0.15, 0.5);
    rerender();
  });

  // Floating FAB visibility on scroll
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    fab.classList.toggle('compact', y > 120);
    lastY = y;
  }, { passive: true });

  // Language switcher: inject if not present
  if (!document.querySelector('.lang-switch')) {
    const sw = document.createElement('nav');
    sw.className = 'lang-switch viewer-lang';
    sw.setAttribute('aria-label', 'Language');
    ['fr','en','ar'].forEach(l => {
      const b = document.createElement('button');
      b.className = 'lang-btn' + (l === getStoredLang() ? ' active' : '');
      b.dataset.lang = l;
      b.textContent = l.toUpperCase();
      b.addEventListener('click', () => applyLang(l));
      sw.appendChild(b);
    });
    const actions = document.querySelector('.viewer-actions');
    actions.parentNode.insertBefore(sw, actions);
  }

  // Initial language + title
  applyLang(getStoredLang());
  updateTitleFromI18n();

  // Initial PDF: prefer language variant if available
  const initialLang = getStoredLang();
  const initialFile = hasVariants ? (variants[initialLang] || file) : file;
  renderPdf(initialFile);

  // React to language changes: update title + swap PDF to the matching language variant
  document.addEventListener('langchange', (e) => {
    updateTitleFromI18n();
    const target = variants[e.detail.lang] || file;
    if (target && target !== currentFileName) {
      renderPdf(target);
    }
  });
})();
