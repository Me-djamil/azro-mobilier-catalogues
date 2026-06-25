/* Shared translations + language helpers */
const I18N = {
  fr: {
    tagline: "Pensez Grand Meublez Pro",
    eyebrow: "Bienvenue",
    title_l1: "Découvrez notre",
    title_l2: "univers",
    subtitle: "Explorez nos catalogues et documents — chaque pièce raconte une histoire de bois, de savoir-faire et d'élégance.",
    scroll: "Faites défiler pour explorer",
    section_title: "Nos catalogues",
    section_sub: "Cliquez sur une carte pour ouvrir le document",
    cat1_title: "Catalogue détaillé",
    cat1_desc: "Collection complète — version web interactive",
    cat2_title: "Fiche entreprise",
    cat2_desc: "Présentation Azro Mobilier — version web interactive",
    cat3_title: "Carte de visite",
    cat3_desc: "SARL Azro Mobilier — Coordonnées",
    cat4_title: "Fiche contact",
    cat4_desc: "Formulaire de contact visiteur",
    cta_open: "Ouvrir →",
    footer: "Tous droits réservés",
    back: "Retour",
    download: "Télécharger",
    new_tab: "Nouvel onglet",
    loading: "Chargement du document…",
    err_title: "Impossible de charger le document",
    err_msg: "Veuillez ouvrir le site via un serveur local (http://localhost) plutôt qu'en double-cliquant le fichier.",
    fallback_msg: "Version traduite indisponible — version française affichée.",
  },
  en: {
    tagline: "Think Big, Furnish Pro",
    eyebrow: "Welcome",
    title_l1: "Discover our",
    title_l2: "universe",
    subtitle: "Explore our catalogues and documents — each piece tells a story of wood, craftsmanship and elegance.",
    scroll: "Scroll to explore",
    section_title: "Our catalogues",
    section_sub: "Click a card to open the document",
    cat1_title: "Product Catalogue",
    cat1_desc: "Complete collection — interactive web version",
    cat2_title: "Company Sheet",
    cat2_desc: "Azro Mobilier presentation — interactive web version",
    cat3_title: "Business Card",
    cat3_desc: "SARL Azro Mobilier — Contact details",
    cat4_title: "Visitor Contact",
    cat4_desc: "Visitor contact form",
    cta_open: "Open →",
    footer: "All rights reserved",
    back: "Back",
    download: "Download",
    new_tab: "New tab",
    loading: "Loading document…",
    err_title: "Unable to load the document",
    err_msg: "Please open the site through a local server (http://localhost) rather than double-clicking the file.",
    fallback_msg: "Translated version not available — showing the French version.",
  },
  ar: {
    tagline: "فنّ الأثاث",
    eyebrow: "مرحباً بك",
    title_l1: "اكتشف",
    title_l2: "عالمنا",
    subtitle: "تصفّح كتالوجاتنا ووثائقنا — كل قطعة تروي قصة من الخشب والحرفية والأناقة.",
    scroll: "اسحب للأسفل للاستكشاف",
    section_title: "كتالوجاتنا",
    section_sub: "انقر على بطاقة لفتح المستند",
    cat1_title: "كتالوج المنتجات",
    cat1_desc: "المجموعة الكاملة — نسخة ويب تفاعلية",
    cat2_title: "بطاقة الشركة",
    cat2_desc: "تقديم Azro Mobilier — نسخة ويب تفاعلية",
    cat3_title: "بطاقة عمل",
    cat3_desc: "SARL Azro Mobilier — معلومات التواصل",
    cat4_title: "بطاقة اتصال",
    cat4_desc: "نموذج اتصال الزائر",
    cta_open: "← فتح",
    footer: "جميع الحقوق محفوظة",
    back: "رجوع",
    download: "تحميل",
    new_tab: "علامة تبويب جديدة",
    loading: "جارٍ تحميل المستند…",
    err_title: "تعذّر تحميل المستند",
    err_msg: "يرجى فتح الموقع عبر خادم محلي (http://localhost) بدلاً من النقر المزدوج على الملف.",
    fallback_msg: "النسخة المترجمة غير متوفرة — يتم عرض النسخة الفرنسية.",
  },
};

function getStoredLang() {
  try { return localStorage.getItem('azro_lang') || 'fr'; } catch { return 'fr'; }
}

function setStoredLang(lang) {
  try { localStorage.setItem('azro_lang', lang); } catch {}
}

function applyLang(lang) {
  if (!I18N[lang]) lang = 'fr';
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  setStoredLang(lang);
  // Custom event so pages can react (e.g., viewer swaps PDF)
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}
