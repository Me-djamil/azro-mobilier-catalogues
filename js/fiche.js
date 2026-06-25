/* ============================================
   Azro Mobilier — Fiche de présentation (native, animated, trilingual)
   Content from Fiche_Azro_Mobilier_{fr,en,ar}.pdf
   ============================================ */

/* Shared finish colours (names/descriptions live per-language below) */
const FICHE_COLORS = [
  { color: '#6b3a26' },
  { color: '#8e2f24' },
  { color: '#f5f3ee', light: true },
  { color: '#d8b489', light: true },
  { color: '#b8895a' },
  { color: '#5a3b27' },
  { color: '#c9ccce', light: true },
  { color: '#2b2b2b' },
  { color: '#2f5b8e' },
];

const RANGE_ICONS = [
  '<path d="M10 22h44M14 22v26M50 22v26M20 48v8M44 48v8M18 30h28M18 38h28"/>',
  '<rect x="16" y="10" width="32" height="44" rx="2"/><line x1="16" y1="24" x2="48" y2="24"/><line x1="16" y1="38" x2="48" y2="38"/><circle cx="40" cy="17" r="1.6"/><circle cx="40" cy="31" r="1.6"/><circle cx="40" cy="45" r="1.6"/>',
  '<rect x="10" y="14" width="44" height="30" rx="2"/><line x1="10" y1="44" x2="14" y2="52"/><line x1="54" y1="44" x2="50" y2="52"/><line x1="20" y1="22" x2="44" y2="22"/>',
  '<path d="M16 30v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V30"/><path d="M12 30c0-6 5-10 12-10h16c7 0 12 4 12 10v2H12z"/><line x1="20" y1="50" x2="20" y2="56"/><line x1="44" y1="50" x2="44" y2="56"/>',
];

const FICHE = {
  fr: {
    back: 'Retour', pdf: 'PDF original',
    tagline: 'Pensez Grand · Meublez Pro',
    edition: 'Édition Juin 2026',
    title1: 'Fiche de', title2: 'présentation',
    subtitle: 'SARL Azro Mobilier — Mobilier de bureau professionnel, bureautique et scolaire.',
    who: {
      eyebrow: 'Qui sommes-nous ?',
      title: 'Un fabricant algérien, de A à Z',
      body: "SARL Azro Mobilier est un fabricant algérien de mobilier de bureau professionnel, bureautique et scolaire, implanté à Beni Ourtilane (Wilaya de Sétif). Nous concevons, fabriquons et équipons les espaces de travail de A à Z — postes de travail, salles de réunion, espaces d'accueil, solutions de rangement et d'archivage, ainsi que mobilier scolaire. Notre force : une offre complète qui va du modèle standard à la fabrication sur-mesure, avec une maîtrise locale de la production et des finitions.",
    },
    figuresTitle: 'Azro en chiffres',
    figures: [
      { num: 161, label: 'Références produits' },
      { num: 31, label: 'Familles de produits' },
      { num: 3, label: 'Matières principales' },
      { num: 39, label: 'Modèles de bureaux' },
    ],
    ranges: {
      eyebrow: 'Nos gammes', title: 'Nos gammes de produits',
      intro: 'Nous organisons notre catalogue autour de trois grandes gammes de matières, complétées par une ligne de sièges et salons :',
      items: [
        { name: 'Gamme MDF', desc: 'Notre ligne haute de gamme, finition peinture acajou & jaune cerise : bureaux, tables de réunion modulaires, podiums de conférence, armoires vitrées et tables de travail.' },
        { name: 'Gamme Métallique', desc: 'Acier épaisseur 55 à 150 nm, peinture époxy : armoires de rangement, vestiaires, classeurs et armoires blindées (combinaison mécanique ou digitale). Robustesse et sécurité.' },
        { name: 'Gamme Mélamine', desc: 'Le bon rapport qualité-prix pour équiper en volume : bureaux, tables de réunion et de lecture, armoires.' },
        { name: 'Sièges & salons', desc: 'Chaises de bureau PDG, opérateur et visiteurs, canapés et salons de bureau en skaï (cuir similaire) pour compléter chaque espace.' },
      ],
    },
    materials: {
      eyebrow: 'Matières premières', title: 'Nos matières premières',
      intro: "Notre mobilier est fabriqué à partir de matériaux sélectionnés et d'une quincaillerie de qualité :",
      groups: [
        { name: 'Panneaux', items: ['MDF 17 mm (1 et 2 faces)', 'MDF 14 mm', 'MDF 8 mm et 7 mm (et brut)', 'Mélamine', 'Fond de meuble en contre-plaqué'] },
        { name: 'Revêtements & finitions', items: ['Peinture acajou et jaune cerise (MDF)', 'Peinture époxy (métal)', 'Film PVC', 'Chants PVC', 'Revêtement skaï'] },
        { name: 'Quincaillerie', items: ['Glissières', 'Charnières', 'Pieds', "Supports d'étagères", 'Poignées', 'Serrures', 'Roulettes', 'Passe-câbles', 'Ferrures', 'Pattes', 'Boulons', 'Vis de montage', 'Clous'] },
        { name: 'Colles & adhésifs', items: ['Colle bois', 'Colle à chants', 'Colle rapide', 'Pattex'] },
        { name: 'Emballage', items: ['Carton', 'Scotch de fermeture'] },
      ],
    },
    service: {
      eyebrow: 'Service', title: 'SAV, livraison & délais',
      items: [
        { name: 'Service après-vente', desc: 'Pièces détachées et réparations assurées par nos équipes.' },
        { name: 'Livraison', desc: 'Assurée sur tout le territoire national.' },
        { name: 'Installation & montage', desc: 'Montage sur site, sur demande, réalisé par nos monteurs.' },
        { name: 'Délais — produits standard', desc: 'Disponibles sous 24 h à 3 jours selon stock.' },
        { name: 'Délais — sur-mesure', desc: 'Fabrication sous 1 à 3 semaines selon le projet.' },
        { name: 'Zone de couverture', desc: 'Tout le territoire national.' },
      ],
    },
    nuancier: {
      eyebrow: 'Finitions', title: 'Nuancier des finitions',
      intro: 'Une large palette de teintes selon la matière :',
      note: "Teintes indicatives à l'écran et à l'impression — référez-vous toujours à vos échantillons physiques.",
      items: [
        { name: 'Acajou', app: 'Peinture MDF — bois rouge-brun, chaleureux.' },
        { name: 'Jaune cerise', app: 'Peinture MDF — teinte cerisier, rouge profond.' },
        { name: 'Blanc', app: 'Mélamine — épuré, lumineux.' },
        { name: 'Hêtre', app: 'Mélamine — bois clair, classique.' },
        { name: 'Chêne', app: 'Mélamine — bois moyen, naturel.' },
        { name: 'Noyer', app: 'Mélamine — bois foncé, élégant.' },
        { name: 'Gris clair', app: 'Époxy métal — neutre, polyvalent.' },
        { name: 'Noir', app: 'Époxy métal — sobre, contemporain.' },
        { name: 'Bleu', app: 'Époxy métal — affirmé.' },
      ],
    },
    forwhom: {
      eyebrow: 'Pour qui ?', title: 'Pour qui ?',
      intro: 'Nous équipons aussi bien les professionnels que les particuliers :',
      items: [
        'Administrations, collectivités et institutions publiques',
        'Écoles, universités et établissements de formation',
        'Entreprises, bureaux et espaces de coworking',
        'Banques et institutions nécessitant des armoires blindées sécurisées',
        'Particuliers aménageant un bureau à domicile',
      ],
    },
    why: {
      eyebrow: 'Nos atouts', title: 'Pourquoi choisir Azro Mobilier ?',
      items: [
        'Fabrication 100 % locale et maîtrise de toute la chaîne de production',
        'Large gamme : 161 références réparties sur 3 matières',
        'Sur-mesure et modularité (tables de réunion jusqu’à 48 places)',
        'Finitions soignées et matériaux durables',
        'Conseil et accompagnement dans le choix de votre mobilier',
      ],
    },
    contact: {
      title: 'Contactez-nous',
      cta: 'Demandez votre devis personnalisé — venez nous rencontrer sur notre stand !',
      address: 'Beni Ourtilane, Wilaya de Sétif 19082',
    },
  },

  en: {
    back: 'Back', pdf: 'Original PDF',
    tagline: 'Think Big · Furnish Pro',
    edition: 'June 2026 Edition',
    title1: 'Presentation', title2: 'sheet',
    subtitle: 'SARL Azro Mobilier — Professional, office and school furniture.',
    who: {
      eyebrow: 'Who are we?',
      title: 'An Algerian manufacturer, from A to Z',
      body: 'SARL Azro Mobilier is an Algerian manufacturer of professional office and school furniture, located in Beni Ourtilane (Wilaya of Sétif). We design, manufacture and equip workspaces from A to Z — workstations, meeting rooms, reception areas, storage and archiving solutions, as well as school furniture. Our strength: a complete offer ranging from standard models to custom-made manufacturing, with local mastery of production and finishes.',
    },
    figuresTitle: 'Azro in figures',
    figures: [
      { num: 161, label: 'Product references' },
      { num: 31, label: 'Product families' },
      { num: 3, label: 'Main materials' },
      { num: 39, label: 'Desk models' },
    ],
    ranges: {
      eyebrow: 'Our ranges', title: 'Our product ranges',
      intro: 'We organise our catalogue around three main ranges of materials, complemented by a line of seats and lounges:',
      items: [
        { name: 'MDF Range', desc: 'Our high-end line, mahogany & cherry-yellow paint finish: desks, modular meeting tables, conference podiums, glass cabinets and work tables.' },
        { name: 'Metal Range', desc: 'Steel thickness 55 to 150 nm, epoxy paint: storage cabinets, lockers, filing cabinets and armoured cabinets (mechanical or digital combination). Robustness and safety.' },
        { name: 'Melamine Range', desc: 'The right value for money to equip in volume: desks, meeting and reading tables, cabinets.' },
        { name: 'Seats & Lounges', desc: 'CEO, operator and visitor office chairs, sofas and office lounges in skaï (faux leather) to complete each space.' },
      ],
    },
    materials: {
      eyebrow: 'Raw materials', title: 'Our raw materials',
      intro: 'Our furniture is made from selected materials and quality hardware:',
      groups: [
        { name: 'Panels', items: ['MDF 17 mm (1 & 2 sides)', 'MDF 14 mm', 'MDF 8 mm & 7 mm (and raw)', 'Melamine', 'Plywood furniture base'] },
        { name: 'Coatings & finishes', items: ['Mahogany & cherry-yellow paint (MDF)', 'Epoxy paint (metal)', 'PVC film', 'PVC edges', 'Skaï coating'] },
        { name: 'Hardware', items: ['Slides', 'Hinges', 'Legs', 'Shelf supports', 'Handles', 'Locks', 'Casters', 'Cable grommets', 'Fittings', 'Brackets', 'Bolts', 'Mounting screws', 'Nails'] },
        { name: 'Glues & adhesives', items: ['Wood glue', 'Edge glue', 'Fast glue', 'Pattex'] },
        { name: 'Packaging', items: ['Carton', 'Closure tape'] },
      ],
    },
    service: {
      eyebrow: 'Service', title: 'After-sales, delivery & lead times',
      items: [
        { name: 'After-sales service', desc: 'Spare parts and repairs carried out by our teams.' },
        { name: 'Delivery', desc: 'Covered throughout the national territory.' },
        { name: 'Installation & assembly', desc: 'On-site assembly, on request, carried out by our assemblers.' },
        { name: 'Lead times — standard products', desc: 'Available within 24 h to 3 days depending on stock.' },
        { name: 'Lead times — custom-made', desc: 'Manufacturing within 1 to 3 weeks depending on the project.' },
        { name: 'Coverage area', desc: 'The entire national territory.' },
      ],
    },
    nuancier: {
      eyebrow: 'Finishes', title: 'Colour chart of finishes',
      intro: 'A wide range of shades depending on the material:',
      note: 'Indicative tints on screen and in print — always refer to your physical samples.',
      items: [
        { name: 'Mahogany', app: 'MDF paint — red-brown wood, warm.' },
        { name: 'Cherry yellow', app: 'MDF paint — cherry tone, deep red.' },
        { name: 'White', app: 'Melamine — refined, luminous.' },
        { name: 'Beech', app: 'Melamine — light wood, classic.' },
        { name: 'Oak', app: 'Melamine — medium wood, natural.' },
        { name: 'Walnut', app: 'Melamine — dark wood, elegant.' },
        { name: 'Light grey', app: 'Metal epoxy — neutral, versatile.' },
        { name: 'Black', app: 'Metal epoxy — sober, contemporary.' },
        { name: 'Blue', app: 'Metal epoxy — assertive.' },
      ],
    },
    forwhom: {
      eyebrow: 'For whom?', title: 'For whom?',
      intro: 'We equip both professionals and individuals:',
      items: [
        'Administrations, communities and public institutions',
        'Schools, universities and training institutions',
        'Companies, offices and coworking spaces',
        'Banks and institutions requiring secure armoured cabinets',
        'Individuals setting up a home office',
      ],
    },
    why: {
      eyebrow: 'Our strengths', title: 'Why choose Azro Mobilier?',
      items: [
        '100% local manufacturing and control of the entire production chain',
        'Wide range: 161 references across 3 materials',
        'Custom-made and modular (meeting tables up to 48 seats)',
        'Neat finishes and durable materials',
        'Advice and support in choosing your furniture',
      ],
    },
    contact: {
      title: 'Contact us',
      cta: 'Ask for your personalised quote — come and meet us at our booth!',
      address: 'Beni Ourtilane, Wilaya of Sétif 19082',
    },
  },

  ar: {
    back: 'رجوع', pdf: 'PDF الأصلي',
    tagline: 'فكّر كبيرًا · جهّز باحتراف',
    edition: 'طبعة يونيو 2026',
    title1: 'ورقة', title2: 'العرض التقديمي',
    subtitle: 'ش.ذ.م.م أزرو موبيلييي — أثاث مكتبي احترافي ومدرسي.',
    who: {
      eyebrow: 'من نحن؟',
      title: 'مُصنّع جزائري، من الألف إلى الياء',
      body: 'ش.ذ.م.م أزرو موبيلييي هي شركة جزائرية مصنّعة لأثاث المكاتب الاحترافي والمدرسي، تقع في بني أورتيلان (ولاية سطيف). نقوم بتصميم وتصنيع وتجهيز مساحات العمل من الألف إلى الياء — محطات العمل، وقاعات الاجتماعات، ومناطق الاستقبال، وحلول التخزين والأرشفة، بالإضافة إلى الأثاث المدرسي. قوتنا: عرض كامل يتراوح بين الطُرز القياسية والتصنيع حسب الطلب، مع إتقان محلي للإنتاج والتشطيبات.',
    },
    figuresTitle: 'أزرو بالأرقام',
    figures: [
      { num: 161, label: 'مراجع المنتجات' },
      { num: 31, label: 'مجموعات المنتجات' },
      { num: 3, label: 'المواد الرئيسية' },
      { num: 39, label: 'نماذج المكاتب' },
    ],
    ranges: {
      eyebrow: 'مجموعاتنا', title: 'مجموعات منتجاتنا',
      intro: 'ننظّم الكتالوج الخاص بنا حول ثلاث مجموعات رئيسية من المواد، يكمّلها خط من المقاعد والصالونات:',
      items: [
        { name: 'مجموعة MDF', desc: 'خطنا المتطوّر بطلاء الماهوجني والأصفر الكرزي: مكاتب، طاولات اجتماعات قابلة للتعديل، منصّات مؤتمرات، خزائن زجاجية وطاولات عمل.' },
        { name: 'المجموعة المعدنية', desc: 'فولاذ بسماكة 55 إلى 150 نانومتر، طلاء إيبوكسي: خزائن تخزين، غرف تغيير الملابس، خزائن حفظ الملفات والخزائن المدرّعة (تركيبة ميكانيكية أو رقمية). المتانة والسلامة.' },
        { name: 'مجموعة الميلامين', desc: 'القيمة المناسبة مقابل المال للتجهيز بكميات: مكاتب، طاولات اجتماعات ومطالعة، وخزائن.' },
        { name: 'المقاعد والصالونات', desc: 'كراسي مكتب للرئيس التنفيذي والمشغّل والزوار، أرائك وصالونات مكتبية من السكاي (جلد صناعي) لإكمال كل مساحة.' },
      ],
    },
    materials: {
      eyebrow: 'المواد الأولية', title: 'موادنا الأولية',
      intro: 'أثاثنا مصنوع من مواد مختارة وأجهزة عالية الجودة:',
      groups: [
        { name: 'الألواح', items: ['MDF 17 مم (وجه و وجهين)', 'MDF 14 مم', 'MDF 8 مم و7 مم (والخام)', 'ميلامين', 'قاعدة أثاث من الخشب الرقائقي'] },
        { name: 'الطلاء والتشطيبات', items: ['طلاء ماهوجني وأصفر كرزي (MDF)', 'طلاء إيبوكسي (معدني)', 'فيلم PVC', 'حواف PVC', 'تغطية سكاي'] },
        { name: 'الأجهزة', items: ['مزالق', 'مفصلات', 'أرجل', 'حوامل رفوف', 'مقابض', 'أقفال', 'عجلات', 'ممرات كابلات', 'تركيبات', 'كتائف', 'براغي', 'مسامير تثبيت', 'مسامير'] },
        { name: 'اللواصق', items: ['غراء الخشب', 'غراء الحواف', 'غراء سريع', 'باتكس'] },
        { name: 'التغليف', items: ['كرتون', 'شريط إغلاق'] },
      ],
    },
    service: {
      eyebrow: 'الخدمة', title: 'خدمة ما بعد البيع والتسليم والمواعيد',
      items: [
        { name: 'خدمة ما بعد البيع', desc: 'قطع غيار وإصلاحات تقوم بها فرقنا.' },
        { name: 'التسليم', desc: 'مؤمّن في جميع أنحاء الإقليم الوطني.' },
        { name: 'التركيب والتجميع', desc: 'تجميع في الموقع عند الطلب، يقوم به مجمّعونا.' },
        { name: 'المواعيد — المنتجات القياسية', desc: 'متوفرة خلال 24 ساعة إلى 3 أيام حسب المخزون.' },
        { name: 'المواعيد — حسب الطلب', desc: 'التصنيع خلال 1 إلى 3 أسابيع حسب المشروع.' },
        { name: 'منطقة التغطية', desc: 'كامل الإقليم الوطني.' },
      ],
    },
    nuancier: {
      eyebrow: 'التشطيبات', title: 'مخطط ألوان التشطيبات',
      intro: 'مجموعة واسعة من الألوان حسب المادة:',
      note: 'ألوان إرشادية على الشاشة وعند الطباعة — ارجع دائمًا إلى العيّنات المادية.',
      items: [
        { name: 'ماهوجني', app: 'طلاء MDF — خشب أحمر بنّي، دافئ.' },
        { name: 'أصفر كرزي', app: 'طلاء MDF — لون الكرز، أحمر عميق.' },
        { name: 'أبيض', app: 'ميلامين — مكرّر، مضيء.' },
        { name: 'زان', app: 'ميلامين — خشب فاتح، كلاسيكي.' },
        { name: 'بلوط', app: 'ميلامين — خشب متوسط، طبيعي.' },
        { name: 'جوز', app: 'ميلامين — خشب داكن، أنيق.' },
        { name: 'رمادي فاتح', app: 'إيبوكسي معدني — محايد، متعدد الاستخدامات.' },
        { name: 'أسود', app: 'إيبوكسي معدني — رصين، معاصر.' },
        { name: 'أزرق', app: 'إيبوكسي معدني — جريء.' },
      ],
    },
    forwhom: {
      eyebrow: 'لمن؟', title: 'لمن؟',
      intro: 'نجهّز المحترفين والأفراد على حدّ سواء:',
      items: [
        'الإدارات والجماعات والمؤسسات العامة',
        'المدارس والجامعات ومؤسسات التكوين',
        'الشركات والمكاتب ومساحات العمل المشترك',
        'البنوك والمؤسسات التي تحتاج إلى خزائن مدرّعة آمنة',
        'الأفراد الذين يجهّزون مكتبًا منزليًا',
      ],
    },
    why: {
      eyebrow: 'مزايانا', title: 'لماذا تختار أزرو موبيلييي؟',
      items: [
        'تصنيع محلي 100٪ وتحكّم في سلسلة الإنتاج بأكملها',
        'مجموعة واسعة: 161 مرجعًا موزّعة على 3 مواد',
        'حسب الطلب وقابل للتعديل (طاولات اجتماعات تتسع لغاية 48 مقعدًا)',
        'تشطيبات أنيقة ومواد متينة',
        'المشورة والمرافقة في اختيار أثاثك',
      ],
    },
    contact: {
      title: 'اتصل بنا',
      cta: 'اطلب عرض أسعارك الشخصي — تعال للقائنا في جناحنا!',
      address: 'بني أورتيلان، ولاية سطيف 19082',
    },
  },
};

const PHONE = '+213 5 49 88 05 19';
const EMAIL = 'azro.mobilier@gmail.com';
const PDF_BY_LANG = {
  fr: 'Fiche_Azro_Mobilier_fr.PDF',
  en: 'Fiche_Azro_Mobilier_en.pdf',
  ar: 'Fiche_Azro_Mobilier_ar.pdf',
};

/* ---------- helpers ---------- */
const fEl = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

function rangeIcon(i) {
  return `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${RANGE_ICONS[i] || ''}</svg>`;
}

/* ---------- render ---------- */
function renderFiche(lang) {
  const d = FICHE[lang] || FICHE.fr;
  const main = document.getElementById('fiche-main');
  main.innerHTML = '';

  // static bits
  document.getElementById('f-back').textContent = d.back;
  document.getElementById('f-tagline').textContent = d.tagline;
  document.getElementById('f-edition').textContent = d.edition;
  document.getElementById('f-title1').textContent = d.title1;
  document.getElementById('f-title2').textContent = d.title2;
  document.getElementById('f-subtitle').textContent = d.subtitle;
  const pdfBtn = document.getElementById('f-pdf');
  pdfBtn.querySelector('span').textContent = d.pdf;
  pdfBtn.href = PDF_BY_LANG[lang] || PDF_BY_LANG.fr;

  // 1. Who
  const who = fEl('section', 'fiche-block');
  const whoHead = fEl('div', 'section-head reveal');
  whoHead.appendChild(fEl('p', 'gamme-eyebrow', d.who.eyebrow));
  whoHead.appendChild(fEl('h2', 'gamme-title', d.who.title));
  who.appendChild(whoHead);
  who.appendChild(fEl('p', 'lead reveal', d.who.body));
  main.appendChild(who);

  // 2. Figures
  const fig = fEl('section', 'stats-section reveal');
  fig.appendChild(fEl('h2', 'gamme-title fig-title', d.figuresTitle));
  const fgrid = fEl('div', 'stats-grid');
  d.figures.forEach((f) => {
    const s = fEl('div', 'stat');
    s.appendChild(fEl('span', 'stat-num', '0')).dataset.count = f.num;
    s.appendChild(fEl('span', 'stat-label', f.label));
    fgrid.appendChild(s);
  });
  fig.appendChild(fgrid);
  main.appendChild(fig);

  // 3. Ranges
  main.appendChild(blockHead(d.ranges.eyebrow, d.ranges.title, d.ranges.intro));
  const rgrid = fEl('div', 'ranges-grid');
  d.ranges.items.forEach((r, i) => {
    const c = fEl('div', 'pad-card range-card reveal');
    c.style.setProperty('--i', i % 4);
    c.appendChild(fEl('div', 'range-icon', rangeIcon(i)));
    c.appendChild(fEl('h3', 'pad-card-title', r.name));
    c.appendChild(fEl('p', 'pad-card-text', r.desc));
    rgrid.appendChild(c);
  });
  main.appendChild(rgrid);

  // 4. Materials
  main.appendChild(blockHead(d.materials.eyebrow, d.materials.title, d.materials.intro));
  const mgrid = fEl('div', 'mat-grid');
  d.materials.groups.forEach((g, i) => {
    const c = fEl('div', 'pad-card reveal');
    c.style.setProperty('--i', i % 3);
    c.appendChild(fEl('h3', 'pad-card-title', g.name));
    const chips = fEl('div', 'chips');
    g.items.forEach((it) => chips.appendChild(fEl('span', 'chip', it)));
    c.appendChild(chips);
    mgrid.appendChild(c);
  });
  main.appendChild(mgrid);

  // 5. Service & delays
  main.appendChild(blockHead(d.service.eyebrow, d.service.title));
  const sgrid = fEl('div', 'info-grid');
  d.service.items.forEach((it, i) => {
    const c = fEl('div', 'pad-card info-card reveal');
    c.style.setProperty('--i', i % 3);
    c.appendChild(fEl('h3', 'pad-card-title sm', it.name));
    c.appendChild(fEl('p', 'pad-card-text', it.desc));
    sgrid.appendChild(c);
  });
  main.appendChild(sgrid);

  // 6. Nuancier
  main.appendChild(blockHead(d.nuancier.eyebrow, d.nuancier.title, d.nuancier.intro));
  const ngrid = fEl('div', 'nuancier-grid');
  d.nuancier.items.forEach((t, i) => {
    const sw = fEl('div', 'swatch reveal');
    sw.style.setProperty('--i', i % 3);
    const chip = fEl('div', 'swatch-color' + (FICHE_COLORS[i].light ? ' light' : ''));
    chip.style.background = FICHE_COLORS[i].color;
    sw.appendChild(chip);
    const body = fEl('div', 'swatch-body');
    body.appendChild(fEl('span', 'swatch-name', t.name));
    body.appendChild(fEl('span', 'swatch-app', t.app));
    sw.appendChild(body);
    ngrid.appendChild(sw);
  });
  main.appendChild(ngrid);
  const noteP = fEl('p', 'nuancier-note reveal', d.nuancier.note);
  main.appendChild(noteP);

  // 7. For whom + Why (two columns)
  const cols = fEl('div', 'lists-2col');
  cols.appendChild(checkCard(d.forwhom, 0));
  cols.appendChild(checkCard(d.why, 1));
  main.appendChild(cols);

  // 8. Contact
  const contact = fEl('section', 'cat-contact reveal');
  contact.innerHTML = `
    <div class="cat-contact-inner">
      <h2 class="cat-contact-title">${d.contact.title}</h2>
      <p class="cat-contact-sub">${d.contact.cta}</p>
      <div class="contact-rows">
        <a class="contact-pill" href="tel:${PHONE.replace(/\s/g, '')}">📞 ${PHONE}</a>
        <a class="contact-pill" href="mailto:${EMAIL}">✉ ${EMAIL}</a>
        <span class="contact-pill">📍 ${d.contact.address}</span>
      </div>
    </div>`;
  main.appendChild(contact);

  // re-arm animations for freshly rendered nodes
  initFicheReveal();
  initFicheCounters();
}

function blockHead(eyebrow, title, intro) {
  const head = fEl('div', 'section-head reveal');
  head.appendChild(fEl('p', 'gamme-eyebrow', eyebrow));
  head.appendChild(fEl('h2', 'gamme-title', title));
  if (intro) head.appendChild(fEl('p', 'gamme-note', intro));
  return head;
}

function checkCard(group, idx) {
  const c = fEl('div', 'pad-card check-card reveal');
  c.style.setProperty('--i', idx);
  c.appendChild(fEl('p', 'gamme-eyebrow', group.eyebrow));
  c.appendChild(fEl('h3', 'pad-card-title', group.title));
  if (group.intro) c.appendChild(fEl('p', 'pad-card-text', group.intro));
  const ul = fEl('ul', 'check-list');
  group.items.forEach((it) => ul.appendChild(fEl('li', null, it)));
  c.appendChild(ul);
  return c;
}

/* ---------- animations ---------- */
function initFicheReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    els.forEach((e) => e.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((e) => io.observe(e));
}

function initFicheCounters() {
  const nums = document.querySelectorAll('.stat-num');
  const run = (node) => {
    const target = +node.dataset.count;
    const dur = 1400;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(step);
      else node.textContent = target;
    };
    requestAnimationFrame(step);
  };
  if (!('IntersectionObserver' in window)) {
    nums.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ---------- init ---------- */
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Allow deep-linking a language via ?lang=fr|en|ar, else use stored preference
  const qsLang = new URLSearchParams(location.search).get('lang');
  const lang = (qsLang && FICHE[qsLang]) ? qsLang : getStoredLang();
  applyLang(lang);          // sets dir + lang-btn active states (shared with site)
  renderFiche(lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  document.addEventListener('langchange', (e) => renderFiche(e.detail.lang));
})();
