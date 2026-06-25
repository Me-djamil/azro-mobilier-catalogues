/* ============================================
   Azro Mobilier — Catalogue détaillé (native, animated)
   Data extracted from "Catalogue détaillé des produits.pdf"
   + "Fiche_Azro_Mobilier_fr.PDF"
   ============================================ */

const CATALOGUE = [
  {
    id: 'mdf',
    eyebrow: 'Gamme haute de gamme',
    title: 'Gamme MDF',
    note: 'Finition peinture acajou & jaune cerise — bureaux, tables de réunion modulaires, podiums de conférence, armoires vitrées et tables de travail.',
    categories: [
      {
        name: 'Bureaux fixes',
        rows: [
          ['Bureau 1,20 m – 3 tiroirs', '120×65×75'],
          ['Bureau 1,40 m – 3 tiroirs', '140×70×75'],
          ['Bureau 1,60 m – 3 tiroirs', '160×70×75'],
        ],
      },
      {
        name: 'Bureaux avec caisson + retour',
        rows: [
          ['Bureau 1,40 m', '140×75×75'],
          ['Bureau 1,60 m', '160×80×75'],
          ['Bureau 1,80 m', '180×85×76'],
          ['Bureau 2,00 m', '200×95×76'],
          ['Bureau 2,20 m', '220×100×76'],
          ['Bureau 2,40 m', '240×105×76'],
          ['Bureau 2,60 m', '260×105×76'],
          ['Bureau 2,80 m', '280×105×76'],
        ],
      },
      {
        name: 'Bureaux socle métallique + caisson mobile',
        rows: [
          ['Bureau 1,20 m', '120×65×76'],
          ['Bureau 1,40 m', '140×70×76'],
          ['Bureau 1,60 m', '160×75×76'],
          ['Bureau 1,80 m', '180×80×76'],
        ],
      },
      {
        name: 'Bureaux de réception',
        rows: [
          ['Réception 1,20 m', '120×110×60'],
          ['Réception 1,40 m', '140×110×60'],
          ['Réception 1,60 m', '160×110×60'],
          ['Réception 1,80 m', '180×110×60'],
          ['Réception 2,00 m', '200×110×60'],
        ],
      },
      {
        name: 'Caissons & retours',
        rows: [
          ['Caisson mobile 3 tiroirs', '57×42×42'],
          ['Retour 0,80 m', '80×52×40'],
          ['Retour 1,00 m', '100×52×40'],
          ['Retour 1,20 m', '120×52×40'],
        ],
      },
      {
        name: 'Tables de réunion modulaires',
        rows: [
          ['3,60 m – 12 places', '360×180×78'],
          ['4,80 m – 16 places', '480×180×78'],
          ['6,00 m – 20 places', '600×180×78'],
          ['7,20 m – 24 places', '720×180×78'],
          ['8,40 m – 28 places', '840×180×78'],
          ['9,60 m – 32 places', '960×180×78'],
          ['10,80 m – 36 places', '1080×180×78'],
          ['12,00 m – 40 places', '1200×180×78'],
          ['13,20 m – 44 places', '1320×180×78'],
          ['14,40 m – 48 places', '1440×180×78'],
        ],
      },
      {
        name: 'Tables de réunion fixes',
        rows: [
          ['2,00 m – 6 places', '200×105×78'],
          ['2,40 m – 8 places', '240×105×78'],
          ['2,80 m – 10 places', '280×105×78'],
        ],
      },
      {
        name: 'Podiums de conférence',
        rows: [
          ['2 m – 3 places', '200×60×76'],
          ['4 m – 6 places', '400×60×76'],
          ['6 m – 9 places', '600×65×76'],
        ],
      },
      {
        name: 'Tables de travail',
        rows: [
          ['1,20 m – 4 places (sans skaï)', '120×70×76'],
          ['1,20 m – 4 places (avec skaï)', '120×70×76'],
          ['1,60 m – 6 places (sans skaï)', '160×75×76'],
          ['1,60 m – 6 places (avec skaï)', '160×75×76'],
        ],
      },
      {
        name: 'Armoires vitrées',
        rows: [
          ['2 portes', '200×80×42'],
          ['3 portes', '200×120×42'],
          ['4 portes', '200×160×42'],
          ['5 portes', '200×200×42'],
          ['6 portes', '200×240×42'],
        ],
      },
      {
        name: 'Tables basses',
        rows: [
          ['60×60', '60×60×42'],
          ['1,20 m × 60', '120×60×42'],
        ],
      },
      {
        name: 'Divers',
        rows: [
          ['Baillon 1,20 m – 3 portes', '120×90×40'],
          ['Table téléphone', '90×40×35'],
          ['Pupitre orateur', '130×65×45'],
          ['Table informatique 1,40 m', '140×75×96'],
          ['Table micro-ordinateur', '70×60×96'],
        ],
      },
    ],
  },
  {
    id: 'sieges',
    eyebrow: 'Confort & accueil',
    title: 'Sièges & salons',
    note: 'Chaises de bureau PDG, opérateur et visiteurs, canapés et salons de bureau en skaï (cuir similaire) pour compléter chaque espace.',
    categories: [
      {
        name: 'Chaises de bureau',
        rows: [
          ['Chaise PDG en bois', '—'],
          ['Chaise directeur chromé', '—'],
          ['Chaise opérateur accoudoir simple', '—'],
          ['Chaise opérateur 5013', '—'],
          ['Chaise opérateur 613-B', '—'],
          ['Chaise visiteur simple K-02', '—'],
          ['Chaise visiteur 613-C', '—'],
          ['Chaise visiteur en bois', '—'],
          ['Chaise triplette 3 places (skaï)', '—'],
        ],
      },
      {
        name: 'Canapés & salons (skaï)',
        rows: [
          ['Canapé 1 place', '—'],
          ['Canapé 2 places', '—'],
          ['Canapé 3 places', '—'],
          ['Salon de bureau 5 places', '—'],
          ['Salon de bureau 7 places', '—'],
        ],
      },
    ],
  },
  {
    id: 'metallique',
    eyebrow: 'Robustesse & sécurité',
    title: 'Gamme Métallique',
    note: 'Acier épaisseur 55 à 150 nm, peinture époxy — armoires de rangement, vestiaires, classeurs et armoires blindées (combinaison mécanique ou digitale).',
    categories: [
      {
        name: 'Armoires métalliques',
        rows: [
          ['Armoire pleine', '190×90×40'],
          ['Armoire vitrée', '190×90×40'],
          ['Armoire semi-vitrée', '190×90×40'],
          ['Armoire semi-vitrée 2 tiroirs', '190×90×40'],
          ['Armoire basse', '100×90×40'],
          ['Armoire de rangement', '200×100×40'],
          ['Rangement 1 face lourde (côtés bois)', '220×200×40'],
          ['Rangement double face lourde (côtés bois)', '220×200×70'],
          ['Armoire poste 76 portes', '165×120×42'],
        ],
      },
      {
        name: 'Vestiaires (casiers métal)',
        rows: [
          ['Vestiaire 4 portes', '180×80×40'],
          ['Vestiaire 6 portes', '180×98×40'],
          ['Vestiaire 8 portes', '190×95×40'],
          ['Vestiaire 9 portes', '190×98×40'],
          ['Vestiaire 10 portes', '190×98×40'],
          ['Vestiaire 12 portes', '190×98×40'],
          ['Vestiaire 15 portes', '190×98×40'],
        ],
      },
      {
        name: 'Armoires scolaires (casiers)',
        rows: [
          ['5 casiers', '120×40×35'],
          ['8 casiers', '100×80×35'],
          ['10 casiers', '120×80×35'],
          ['12 casiers', '100×120×35'],
          ['15 casiers', '120×120×35'],
          ['20 casiers', '120×160×35'],
          ['25 casiers', '120×200×35'],
        ],
      },
      {
        name: 'Classeurs & caissons',
        rows: [
          ['Classeur C4 tiroirs', '130×41×55'],
          ['Classeur C5 tiroirs', '130×41×55'],
          ['Caisson 3 tiroirs', '60×41×52'],
        ],
      },
      {
        name: 'Vestiaires fins (porte étroite)',
        rows: [
          ['1 porte vitrée', '185×40×40'],
          ['1 porte', '185×40×40'],
          ['2 portes', '185×40×40'],
          ['3 portes', '185×40×40'],
          ['4 portes', '185×40×40'],
        ],
      },
      {
        name: 'Clapets & bac à fiches',
        rows: [
          ['Clapet C5', '100×40×29'],
          ['Clapet C10', '190×40×29'],
          ['Clapet C20', '190×86×29'],
          ['Bac fichier mobile', '85×45×60'],
        ],
      },
      {
        name: 'Armoires blindées (sécurité)',
        rows: [
          ['2 portes – combinaison', '190×95×41'],
          ['2 portes – digital', '190×95×41'],
          ['2 portes – sans combinaison', '190×95×41'],
          ['Basse 2 portes – combinaison', '100×95×40'],
          ['Basse 2 portes – digital', '100×95×40'],
          ['Basse 2 portes – sans combinaison', '100×95×40'],
        ],
      },
    ],
  },
  {
    id: 'melamine',
    eyebrow: 'Le bon rapport qualité-prix',
    title: 'Gamme Mélamine',
    note: 'Pour équiper en volume — bureaux, tables de réunion et de lecture, armoires. Finitions blanc, hêtre, chêne et noyer.',
    categories: [
      {
        name: 'Armoires mélamine',
        rows: [
          ['2 portes', '185×80×40'],
          ['3 portes', '185×120×40'],
          ['4 portes', '185×160×40'],
          ['5 portes', '185×200×40'],
          ['6 portes', '185×240×40'],
        ],
      },
      {
        name: 'Bureaux fixes',
        rows: [
          ['Bureau 1,20 m', '120×70×76'],
          ['Bureau 1,40 m', '140×70×76'],
          ['Bureau 1,60 m', '160×70×76'],
        ],
      },
      {
        name: 'Bureaux caisson + retour (haut de gamme)',
        rows: [
          ['Bureau 1,40 m', '140×70×76'],
          ['Bureau 1,60 m', '160×70×76'],
          ['Bureau 1,80 m', '180×80×76'],
          ['Bureau 2,00 m', '200×90×76'],
          ['Bureau 2,20 m', '220×90×76'],
          ['Bureau 2,40 m', '240×90×76'],
          ['Bureau 2,60 m', '260×90×76'],
        ],
      },
      {
        name: 'Bureaux de réception',
        rows: [
          ['Réception 1,20 m', '120×70×110'],
          ['Réception 1,40 m', '140×70×110'],
          ['Réception 1,60 m', '160×70×110'],
          ['Réception 1,80 m', '180×80×110'],
          ['Réception 2,00 m', '200×80×110'],
        ],
      },
      {
        name: 'Bureaux socle métallique',
        rows: [
          ['Bureau 1,20 m', '120×70×76'],
          ['Bureau 1,40 m', '140×70×76'],
          ['Bureau 1,60 m', '160×70×76'],
          ['Bureau 1,80 m', '180×80×76'],
        ],
      },
      {
        name: 'Bahut, caissons & retours',
        rows: [
          ['Bahut', '105×80×42'],
          ['Caisson mobile 3 tiroirs', '57×42×42'],
          ['Retour 0,80 m', '80×52×40'],
          ['Retour 1,00 m', '100×52×40'],
          ['Retour 1,20 m', '120×52×40'],
        ],
      },
      {
        name: 'Tables basses & téléphone',
        rows: [
          ['Table basse 60×60', '60×60×42'],
          ['Table basse 120×60', '120×60×42'],
          ['Table téléphone', '76×35×35'],
        ],
      },
      {
        name: 'Tables de réunion',
        rows: [
          ['2,00 m – 6 places (fixe)', '200×105×78'],
          ['2,40 m – 8 places (fixe)', '240×105×78'],
          ['2,80 m – 10 places (fixe)', '280×105×78'],
          ['3,60 m – 12 places', '360×180×78'],
          ['4,80 m – 16 places', '480×180×78'],
          ['6,00 m – 20 places', '600×180×78'],
          ['7,20 m – 24 places', '720×180×78'],
          ['8,40 m – 28 places', '840×180×78'],
          ['9,60 m – 32 places', '960×180×78'],
          ['10,80 m – 36 places', '1080×180×78'],
          ['12,00 m – 40 places', '1200×180×78'],
          ['13,20 m – 44 places', '1320×180×78'],
          ['14,40 m – 48 places', '1440×180×78'],
        ],
      },
      {
        name: 'Tables de lecture',
        rows: [
          ['1,20 m', '120×80×76'],
          ['1,40 m', '140×80×76'],
          ['1,60 m', '160×80×76'],
          ['1,80 m', '180×80×76'],
          ['2,00 m', '200×80×76'],
        ],
      },
    ],
  },
];

const NUANCIER = [
  { name: 'Acajou', color: '#6b3a26', app: 'Peinture MDF — bois rouge-brun, chaleureux.' },
  { name: 'Jaune cerise', color: '#8e2f24', app: 'Peinture MDF — teinte cerisier, rouge profond.' },
  { name: 'Blanc', color: '#f5f3ee', app: 'Mélamine — épuré, lumineux.', light: true },
  { name: 'Hêtre', color: '#d8b489', app: 'Mélamine — bois clair, classique.', light: true },
  { name: 'Chêne', color: '#b8895a', app: 'Mélamine — bois moyen, naturel.' },
  { name: 'Noyer', color: '#5a3b27', app: 'Mélamine — bois foncé, élégant.' },
  { name: 'Gris clair', color: '#c9ccce', app: 'Époxy métal — neutre, polyvalent.', light: true },
  { name: 'Noir', color: '#2b2b2b', app: 'Époxy métal — sobre, contemporain.' },
  { name: 'Bleu', color: '#2f5b8e', app: 'Époxy métal — affirmé.' },
];

/* ---------- helpers ---------- */
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
};

function countTotal(g) {
  return g.categories.reduce((s, c) => s + c.rows.length, 0);
}

/* ---------- render catalogue ---------- */
function renderCatalogue() {
  const main = document.getElementById('cat-main');

  CATALOGUE.forEach((gamme) => {
    const section = el('section', 'gamme');
    section.id = gamme.id;

    const head = el('div', 'section-head gamme-head reveal');
    head.appendChild(el('p', 'gamme-eyebrow', gamme.eyebrow));
    head.appendChild(el('h2', 'gamme-title', gamme.title));
    head.appendChild(el('p', 'gamme-note', gamme.note));
    head.appendChild(el('span', 'gamme-count', `${countTotal(gamme)} références · ${gamme.categories.length} familles`));
    section.appendChild(head);

    const grid = el('div', 'cat-grid');
    gamme.categories.forEach((cat, i) => {
      const card = el('div', 'table-card reveal');
      card.style.setProperty('--i', i % 3);

      const ch = el('div', 'table-card-head');
      ch.appendChild(el('h3', 'table-card-title', cat.name));
      ch.appendChild(el('span', 'table-card-badge', `${cat.rows.length}`));
      card.appendChild(ch);

      const table = el('table', 'dim-table');
      const thead = el('thead', null, '<tr><th>Désignation</th><th>Dimensions (cm)</th></tr>');
      table.appendChild(thead);
      const tbody = el('tbody');
      cat.rows.forEach(([name, dim]) => {
        const tr = el('tr');
        tr.appendChild(el('td', 'd-name', name));
        tr.appendChild(el('td', 'd-dim', dim === '—' ? '<span class="dim-dash">—</span>' : dim));
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      card.appendChild(table);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    main.appendChild(section);
  });
}

/* ---------- render nuancier ---------- */
function renderNuancier() {
  const grid = document.getElementById('nuancier-grid');
  NUANCIER.forEach((t, i) => {
    const sw = el('div', 'swatch reveal');
    sw.style.setProperty('--i', i % 3);
    const chip = el('div', 'swatch-color' + (t.light ? ' light' : ''));
    chip.style.background = t.color;
    sw.appendChild(chip);
    const body = el('div', 'swatch-body');
    body.appendChild(el('span', 'swatch-name', t.name));
    body.appendChild(el('span', 'swatch-app', t.app));
    sw.appendChild(body);
    grid.appendChild(sw);
  });
}

/* ---------- scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
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

/* ---------- animated counters ---------- */
function initCounters() {
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

/* ---------- sticky subnav active state ---------- */
function initSubnav() {
  const links = [...document.querySelectorAll('.subnav-link')];
  const map = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
  const targets = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (!('IntersectionObserver' in window) || !targets.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const link = map.get(entry.target.id);
          if (link) link.classList.add('active');
        }
      });
    },
    { threshold: 0.15, rootMargin: '-40% 0px -55% 0px' }
  );
  targets.forEach((t) => io.observe(t));
}

/* ---------- init ---------- */
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderCatalogue();
  renderNuancier();
  initReveal();
  initCounters();
  initSubnav();
})();
