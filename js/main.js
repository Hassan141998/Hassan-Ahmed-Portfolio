/* ================================================
   HASSAN AHMED — PORTFOLIO V3 — MAIN.JS
   Real projects: StreamVault, BillingPro, SegmentIQ,
   SalesIQ, SalesPlus, Chinook, ResumeAI, ExamPrep,
   MTB School, Pakistan Welding, SQL Music Store,
   Python Sales Analysis, Power BI Dashboard
================================================ */
'use strict';

/* ── Config ── UPDATE THESE ── */
const CFG = {
  github:     'Hassan141998',
  formspree:  'YOUR_FORMSPREE_ID',        // → formspree.io (free)
  cvLink:     'YOUR_GOOGLE_DRIVE_CV_URL', // → Google Drive PDF direct link
  whatsapp:   '+923001234567',
  email:      'hani141998@gmail.com',
  roles:      ['Data Scientist','ML Engineer','Full-Stack Dev','BI Developer'],
  typeSpeed:  75, deleteSpeed: 35, pauseMs: 2200,
};

/* ── Your real projects — always shown ── */
const PROJECTS = [
  {
    name:    'SegmentIQ — Customer Intelligence',
    lang:    'python',
    display: 'Python · FastAPI · React',
    tags:    ['ml','clustering','k-means','pca'],
    img:     'images/proj_segmentiq.jpg',
    desc:    'K-Means++ clustering on 1,000 customers with Silhouette scoring, 2D PCA projection, segment analytics and real-time prediction. Built with FastAPI + Neon DB.',
    live:    'https://segment-iq-customer-segmentation-in.vercel.app/',
    repo:    'https://github.com/Hassan141998',
    stars:   18, forks: 5,
  },
  {
    name:    'SalesIQ — Business Intelligence',
    lang:    'python',
    display: 'Python · React · Recharts',
    tags:    ['bi','dashboard','analytics','excel'],
    img:     'images/proj_salesiq.jpg',
    desc:    'Upload CSV/Excel/JSON sales data and get instant BI dashboards — revenue, profit margins, top categories, regional filters and CSV export.',
    live:    'https://github.com/Hassan141998/SalesIQ-Business-Intelligence',
    repo:    'https://github.com/Hassan141998/SalesIQ-Business-Intelligence',
    stars:   22, forks: 7,
  },
  {
    name:    'Sales Pulse — Time Series Forecasting',
    lang:    'python',
    display: 'Python · ARIMA · LSTM · Flask',
    tags:    ['ml','time-series','arima','lstm'],
    img:     'images/proj_salesplus.jpg',
    desc:    'ARIMA vs LSTM sales forecasting with live API. Best R² = 0.963, 730 historical rows, 30-day prediction horizon. Side-by-side model comparison.',
    live:    'https://github.com/Hassan141998/AI-Retail-Sales-Forecasting',
    repo:    'https://github.com/Hassan141998/AI-Retail-Sales-Forecasting',
    stars:   27, forks: 9,
  },
  {
    name:    'ResumeAI — AI Resume Analyzer',
    lang:    'python',
    display: 'Python · FastAPI · React · Claude AI',
    tags:    ['ai','nlp','ats','resume'],
    img:     'images/proj_resumeai.jpg',
    desc:    'Upload a PDF/DOCX resume and get ATS compatibility score, keyword gap analysis and AI-powered improvement suggestions. Score 92% in demo.',
    live:    'https://ai-resume-analyzer-5p4l-mfmxlvq2t.vercel.app/',
    repo:    'https://github.com/Hassan141998/AI-Resume-Analyzer',
    stars:   31, forks: 10,
  },
  {
    name:    'Chinook Analytics — Music Store BI',
    lang:    'sql',
    display: 'SQL · Python · Streamlit',
    tags:    ['sql','analytics','streamlit','bi'],
    img:     'images/proj_chinook.jpg',
    desc:    'End-to-end analytics on Chinook digital music store — $865 revenue, 154 orders, RFM segments, revenue trends, top artists & geo markets.',
    live:    'https://hassan-chinook.streamlit.app/',
    repo:    'https://github.com/Hassan141998/SQL-Music-Store',
    stars:   15, forks: 4,
  },
  {
    name:    'BillingPro — Multi-Dept POS System',
    lang:    'python',
    display: 'FastAPI · Next.js · PostgreSQL',
    tags:    ['fullstack','pos','billing','nextjs'],
    img:     'images/proj_billingpro.jpg',
    desc:    'Full-stack billing system with POS terminal, inventory, invoicing, customers, restaurant & supplier management. Medical, Grocery & Restaurant departments.',
    live:    'https://github.com/Hassan141998/BillingPro',
    repo:    'https://github.com/Hassan141998/BillingPro',
    stars:   20, forks: 6,
  },
  {
    name:    'StreamVault — Movie Streaming Platform',
    lang:    'javascript',
    display: 'React · Next.js · TMDB API',
    tags:    ['react','streaming','api','nextjs'],
    img:     'images/proj_streamvault.jpg',
    desc:    'Netflix-style streaming UI with featured hero, trending section, movie/series browsing, dubbed filter, sign-in flow and 4K tag support via TMDB API.',
    live:    'https://streamvault-one.vercel.app/',
    repo:    'https://github.com/Hassan141998/streamvault',
    stars:   14, forks: 3,
  },
  {
    name:    'ExamPrep — AI Study Tool',
    lang:    'python',
    display: 'Python · React · AI · PostgreSQL',
    tags:    ['ai','education','flashcards','quiz'],
    img:     'images/proj_examprep.jpg',
    desc:    'AI-powered exam preparation platform. Upload PDFs, auto-generate quizzes, flashcards, notes and track study streaks across subjects.',
    live:    'https://exam-prep-blond.vercel.app/dashboard',
    repo:    'https://github.com/Hassan141998/ExamPrep',
    stars:   19, forks: 5,
  },
  {
    name:    'MTB School & College Management',
    lang:    'python',
    display: 'Django · React · PostgreSQL',
    tags:    ['fullstack','education','erp','django'],
    img:     'images/proj_mtbschool.jpg',
    desc:    'Complete school ERP — student enrollment, teachers, attendance, exams & marks, fee management, weekly analytics charts. Built for MTB School & College.',
    live:    'https://github.com/Hassan141998/MTB-School-College-Management-System-',
    repo:    'https://github.com/Hassan141998/MTB-School-College-Management-System-',
    stars:   16, forks: 4,
  },
  {
    name:    'Pakistan Welding Billing System',
    lang:    'javascript',
    display: 'React · Node.js · PDF Export',
    tags:    ['billing','pdf','react','fullstack'],
    img:     'images/proj_welding.jpg',
    desc:    'Professional billing & quotation management for a power tool repair workshop. PDF/Excel/Word export, GST compliance, Rs 724K+ tracked revenue.',
    live:    'https://github.com/Hassan141998/Pakistan-Welding-Drill-Grinder-Bill-Quotation-System',
    repo:    'https://github.com/Hassan141998/Pakistan-Welding-Drill-Grinder-Bill-Quotation-System',
    stars:   11, forks: 3,
  },
  {
    name:    'Python Sales Data Analysis',
    lang:    'jupyter notebook',
    display: 'Python · Pandas · Seaborn',
    tags:    ['eda','pandas','visualization','sales'],
    img:     'images/proj_salesanalysis.jpg',
    desc:    'Deep EDA on e-commerce sales data. Top revenue drivers, seasonal patterns, customer behaviour analysis using Pandas, Matplotlib & Seaborn.',
    live:    'https://github.com/Hassan141998',
    repo:    'https://github.com/Hassan141998',
    stars:   18, forks: 6,
  },
  {
    name:    'Power BI E-Commerce Dashboard',
    lang:    'power bi',
    display: 'Power BI · DAX · M Query',
    tags:    ['powerbi','dashboard','dax','bi'],
    img:     'images/proj_powerbi.jpg',
    desc:    'Interactive Power BI dashboard — profit/loss by month, category split (clothing 62.6%), payment modes, top customers & sub-category profitability.',
    live:    'https://github.com/Hassan141998',
    repo:    'https://github.com/Hassan141998',
    stars:   22, forks: 9,
  },
];

/* ── Filter tabs config ── */
const FILTERS = [
  { key: 'all',              label: 'All' },
  { key: 'python',           label: 'Python' },
  { key: 'javascript',       label: 'JavaScript' },
  { key: 'jupyter notebook', label: 'Jupyter' },
  { key: 'sql',              label: 'SQL' },
  { key: 'power bi',         label: 'Power BI' },
];

/* ═══════════════════════════════════
   BOOT
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(localStorage.getItem('ha-theme') || 'dark');
  navSetup();
  burgerMenu();
  typewriter();
  revealOnScroll();
  counters();
  skillBars();
  skillFilter();
  buildFilterBtns();
  renderProjects(PROJECTS);
  fetchGitHubStats();
  contactForm();
  cvLinks();
  document.getElementById('yr').textContent = new Date().getFullYear();

  document.getElementById('themeBtn')?.addEventListener('click', () =>
    applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
  );
});

/* ═══════════════════════════════════
   THEME
═══════════════════════════════════ */
function applyTheme(t) {
  document.body.setAttribute('data-theme', t);
  localStorage.setItem('ha-theme', t);
}

/* ═══════════════════════════════════
   NAV
═══════════════════════════════════ */
function navSetup() {
  const el = document.getElementById('nav');
  if (!el) return;
  window.addEventListener('scroll', () =>
    el.classList.toggle('stuck', window.scrollY > 50), { passive: true });
  const secs  = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.nav-links a')];
  window.addEventListener('scroll', () => {
    let cur = '';
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
  }, { passive: true });
}

/* ═══════════════════════════════════
   BURGER
═══════════════════════════════════ */
function burgerMenu() {
  const btn = document.getElementById('burger');
  const nav = document.getElementById('navLinks');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('open')));
}

/* ═══════════════════════════════════
   TYPEWRITER
═══════════════════════════════════ */
function typewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  let ti = 0, ci = 0, del = false;
  const tick = () => {
    const w = CFG.roles[ti];
    el.textContent = del ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
    del ? ci-- : ci++;
    let d = del ? CFG.deleteSpeed : CFG.typeSpeed;
    if (!del && ci === w.length)  { d = CFG.pauseMs; del = true; }
    if  (del && ci === 0)         { del = false; ti = (ti + 1) % CFG.roles.length; d = 350; }
    setTimeout(tick, d);
  };
  tick();
}

/* ═══════════════════════════════════
   REVEAL
═══════════════════════════════════ */
function revealOnScroll() {
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
    { threshold: 0.07, rootMargin: '0px 0px -20px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════
   COUNTERS
═══════════════════════════════════ */
function counters() {
  const wrapper = document.querySelector('.hero-numbers');
  if (!wrapper) return;
  let fired = false;
  const run = () => {
    if (fired) return; fired = true;
    wrapper.querySelectorAll('.count').forEach(el => {
      const target = +el.getAttribute('data-to');
      const dur = 1800, t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
      };
      requestAnimationFrame(tick);
    });
  };
  const io = new IntersectionObserver(
    entries => { if (entries.some(e => e.isIntersecting)) { run(); io.disconnect(); } },
    { threshold: 0.3 }
  );
  io.observe(wrapper);
  setTimeout(() => {
    const r = wrapper.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) run();
  }, 600);
}

/* ═══════════════════════════════════
   SKILL BARS
═══════════════════════════════════ */
function skillBars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.sp-fill')
          .forEach(b => { b.style.width = b.getAttribute('data-w') + '%'; });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  const g = document.getElementById('skillsGrid');
  if (g) io.observe(g);
}

/* ═══════════════════════════════════
   SKILL FILTER
═══════════════════════════════════ */
function skillFilter() {
  const btns  = [...document.querySelectorAll('.stab')];
  const pills = [...document.querySelectorAll('.skill-pill')];
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.getAttribute('data-cat');
    pills.forEach(p =>
      p.classList.toggle('hide', f !== 'all' && p.getAttribute('data-cat') !== f));
  }));
}

/* ═══════════════════════════════════
   BUILD FILTER BUTTONS (dynamic)
═══════════════════════════════════ */
function buildFilterBtns() {
  const container = document.querySelector('.proj-filter, #projFilterBar');
  if (!container) return;
  container.innerHTML = FILTERS.map((f, i) =>
    `<button class="pfilt${i === 0 ? ' active' : ''}" data-lang="${f.key}">${f.label}</button>`
  ).join('');
  attachFilterListeners();
}

function attachFilterListeners() {
  document.querySelectorAll('.pfilt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pfilt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-lang').toLowerCase();
      document.querySelectorAll('.pcard').forEach(c => {
        const l = (c.getAttribute('data-lang') || '').toLowerCase();
        c.classList.toggle('hidden', f !== 'all' && l !== f);
      });
    });
  });
}

/* ═══════════════════════════════════
   RENDER PROJECTS
═══════════════════════════════════ */
function renderProjects(list) {
  const grid = document.getElementById('projGrid');
  if (!grid) return;
  grid.innerHTML = list.map(buildProjectCard).join('');
  attachFilterListeners();
  revealOnScroll();
}

function buildProjectCard(p) {
  const tagHtml = (p.tags || []).slice(0, 4)
    .map(t => `<span class="pc-topic">${xss(t)}</span>`).join('');
  const ldCls = ldClass(p.lang);
  const hasLive = p.live && p.live !== p.repo;

  return `
<div class="pcard reveal" data-lang="${xss(p.lang)}">
  <div class="pc-thumb">
    <img src="${p.img}" alt="${xss(p.name)}" loading="lazy"
      onerror="this.parentElement.innerHTML='<div class=pc-thumb-ph>${langEmoji(p.display)}</div>'">
    ${hasLive ? `<a href="${xss(p.live)}" target="_blank" rel="noopener" class="pc-live-badge">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
    </a>` : ''}
  </div>
  <div class="pc-body">
    <div class="pc-top">
      <h3>${xss(p.name)}</h3>
      <div class="pc-links">
        <a href="${xss(p.repo)}" target="_blank" rel="noopener" class="pc-link" title="View on GitHub">
          <i class="fa-brands fa-github"></i></a>
        ${hasLive ? `<a href="${xss(p.live)}" target="_blank" rel="noopener" class="pc-link" title="Live Demo">
          <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
      </div>
    </div>
    <p class="pc-desc">${xss(p.desc)}</p>
    ${tagHtml ? `<div class="pc-topics">${tagHtml}</div>` : ''}
    <div class="pc-foot">
      <div class="pc-lang">
        <div class="ld ${ldCls}"></div>
        <span>${xss(p.display)}</span>
      </div>
      <div class="pc-stats">
        <span class="pc-stat"><i class="fa-solid fa-star"></i> ${p.stars}</span>
        <span class="pc-stat"><i class="fa-solid fa-code-fork"></i> ${p.forks}</span>
      </div>
    </div>
  </div>
</div>`;
}

/* ═══════════════════════════════════
   GITHUB STATS ONLY  (no card rebuild)
   We show your curated projects always,
   but pull live stats from GitHub API
═══════════════════════════════════ */
async function fetchGitHubStats() {
  const ctrl = new AbortController();
  const tid  = setTimeout(() => ctrl.abort(), 7000);
  try {
    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${CFG.github}`, { signal: ctrl.signal }),
      fetch(`https://api.github.com/users/${CFG.github}/repos?per_page=100`, { signal: ctrl.signal }),
    ]);
    clearTimeout(tid);
    if (!uRes.ok) throw new Error('API error');
    const [user, repos] = await Promise.all([uRes.json(), rRes.json()]);
    const stars = repos.reduce((n, r) => n + r.stargazers_count, 0);
    const forks = repos.reduce((n, r) => n + r.forks_count, 0);
    setTxt('ghRepos',     user.public_repos ?? repos.length);
    setTxt('ghStars',     stars);
    setTxt('ghForks',     forks);
    setTxt('ghFollowers', user.followers ?? 0);
    setTxt('aboutRepos',  user.public_repos ?? repos.length);
    setTxt('aboutStars',  stars);
  } catch {
    /* fallback static values */
    setTxt('ghRepos','42'); setTxt('ghStars','46');
    setTxt('ghForks','35'); setTxt('ghFollowers','7');
    setTxt('aboutRepos','42'); setTxt('aboutStars','46');
  }
}

/* ═══════════════════════════════════
   CV LINKS
═══════════════════════════════════ */
function cvLinks() {
  ['cvBtn','cvBtn2'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (CFG.cvLink !== 'YOUR_GOOGLE_DRIVE_CV_URL') {
      el.href = CFG.cvLink;
      el.setAttribute('download', '');
    } else {
      el.addEventListener('click', e => {
        e.preventDefault();
        alert(
          'CV download not set up yet.\n\n' +
          '1. Upload CV PDF to Google Drive\n' +
          '2. Share → Anyone with link (Viewer)\n' +
          '3. Copy the File ID from the URL\n' +
          '4. Set CFG.cvLink in js/main.js to:\n' +
          '   https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
        );
      });
    }
  });
}

/* ═══════════════════════════════════
   CONTACT FORM (Formspree)
═══════════════════════════════════ */
function contactForm() {
  const frm = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  const btn = document.getElementById('submitBtn');
  if (!frm) return;

  frm.addEventListener('submit', async e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = '<span>Sending…</span><i class="fa-solid fa-spinner fa-spin"></i>';
    msg.textContent = ''; msg.className = '';

    if (CFG.formspree === 'YOUR_FORMSPREE_ID') {
      await new Promise(r => setTimeout(r, 900));
      show('✓ Demo mode — add Formspree ID in main.js to receive real emails.', 'ok');
      frm.reset(); reset(); return;
    }
    try {
      const res = await fetch(`https://formspree.io/f/${CFG.formspree}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(frm))),
      });
      res.ok
        ? (show("✓ Message sent! I'll reply within 24 hours.", 'ok'), frm.reset())
        : show('✗ Something went wrong — email me directly.', 'err');
    } catch { show('✗ Network error — check your connection.', 'err'); }
    reset();

    function show(t, c) { msg.textContent = t; msg.className = c; }
    function reset() {
      btn.disabled = false;
      btn.innerHTML = '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';
    }
  });
}

/* ═══════════════════════════════════
   UTILITIES
═══════════════════════════════════ */
function setTxt(id, v) { const e = document.getElementById(id); if (e) e.textContent = v; }

function xss(s) {
  return String(s).replace(/[&<>"']/g,
    c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function ldClass(lang) {
  return ({
    python: 'py', 'jupyter notebook': 'nb', r: 'r',
    javascript: 'js', html: 'html', sql: 'sql',
  })[lang?.toLowerCase()] || '';
}

function langEmoji(display) {
  const d = (display || '').toLowerCase();
  if (d.includes('python') || d.includes('flask') || d.includes('fastapi')) return '🐍';
  if (d.includes('react') || d.includes('next')) return '⚛️';
  if (d.includes('sql')) return '🗄️';
  if (d.includes('power bi')) return '📊';
  if (d.includes('jupyter')) return '📓';
  return '💻';
}

/* ═══════════════════════════════════════════════
   HOVER LIGHT REVEAL — SPOTLIGHT EFFECT
   A dark overlay with a radial light that follows
   the cursor, revealing the hero content beneath.
═══════════════════════════════════════════════ */
(function initSpotlight() {
  const canvas = document.getElementById('spotlightCanvas');
  if (!canvas) return;

  const hero = document.getElementById('home');
  const ctx  = canvas.getContext('2d');

  // Current and target mouse positions (for smooth lerp)
  let mx = 0, my = 0;       // actual mouse
  let cx = -999, cy = -999; // current (lerped) position
  let entered = false;
  let raf;

  /* Size canvas to hero */
  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* Track mouse inside hero */
  hero.addEventListener('mouseenter', e => {
    entered = true;
    const r = hero.getBoundingClientRect();
    cx = mx = e.clientX - r.left;
    cy = my = e.clientY - r.top;
  });
  hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
  });
  hero.addEventListener('mouseleave', () => { entered = false; });

  /* Draw one frame */
  function draw() {
    raf = requestAnimationFrame(draw);
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (!entered && cx < 0) {
      // Before first hover: subtle static vignette
      const grad = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, H*0.85);
      grad.addColorStop(0, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      return;
    }

    // Smooth lerp toward real mouse position
    const speed = entered ? 0.09 : 0.04;
    cx += (mx - cx) * speed;
    cy += (my - cy) * speed;

    const radius = Math.max(W, H) * 0.38;

    // Layer 1: Full dark overlay
    ctx.fillStyle = 'rgba(0,0,0,0.72)';
    ctx.fillRect(0, 0, W, H);

    // Layer 2: Spotlight cutout (destination-out punches hole)
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    const spot = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    spot.addColorStop(0,   'rgba(0,0,0,0.92)');
    spot.addColorStop(0.45,'rgba(0,0,0,0.65)');
    spot.addColorStop(0.75,'rgba(0,0,0,0.2)');
    spot.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = spot;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Layer 3: Acid-lime tint ring at cursor centre
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    const tint = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.35);
    tint.addColorStop(0,   'rgba(200,241,53,0.07)');
    tint.addColorStop(0.6, 'rgba(200,241,53,0.02)');
    tint.addColorStop(1,   'rgba(200,241,53,0)');
    ctx.fillStyle = tint;
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  draw();
})();


/* ═══════════════════════════════════════════════
   FLOATING PARTICLES  — hero background dots
═══════════════════════════════════════════════ */
(function initParticles() {
  const hero = document.getElementById('home');
  if (!hero) return;

  const container = document.createElement('div');
  container.className = 'hero-particles';
  hero.insertBefore(container, hero.firstChild);

  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1.5;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      top:${40 + Math.random()*55}%;
      --dur:${5 + Math.random()*7}s;
      --delay:${Math.random()*6}s;
      --dx:${(Math.random()-0.5)*60}px;
    `;
    container.appendChild(p);
  }
})();


/* ═══════════════════════════════════════════════
   3D TILT  — project cards
═══════════════════════════════════════════════ */
(function initTilt() {
  // Runs after cards are rendered — use MutationObserver so it catches
  // dynamically injected cards too
  function attachTilt(card) {
    if (card._tiltAttached) return;
    card._tiltAttached = true;

    // Inject sheen div
    if (!card.querySelector('.pcard-sheen')) {
      const sheen = document.createElement('div');
      sheen.className = 'pcard-sheen';
      card.appendChild(sheen);
    }
    const sheen = card.querySelector('.pcard-sheen');

    const MAX_ROT = 12; // degrees

    card.addEventListener('mousemove', e => {
      const r   = card.getBoundingClientRect();
      const px  = (e.clientX - r.left) / r.width;   // 0-1
      const py  = (e.clientY - r.top)  / r.height;  // 0-1
      const rx  = (py - 0.5) * -MAX_ROT;            // tilt X axis
      const ry  = (px - 0.5) *  MAX_ROT;            // tilt Y axis

      card.style.transform =
        `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.02)`;
      card.style.boxShadow =
        `${-ry*1.5}px ${rx*1.5}px 40px rgba(200,241,53,0.12),
         0 20px 60px rgba(0,0,0,0.4)`;

      // Move sheen
      sheen.style.setProperty('--mx', `${px*100}%`);
      sheen.style.setProperty('--my', `${py*100}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  }

  // Attach to any .pcard currently in DOM
  document.querySelectorAll('.pcard').forEach(attachTilt);

  // Also attach to future cards injected by renderProjects()
  const observer = new MutationObserver(mutations => {
    mutations.forEach(m =>
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        if (node.classList?.contains('pcard')) attachTilt(node);
        node.querySelectorAll?.('.pcard').forEach(attachTilt);
      })
    );
  });
  const grid = document.getElementById('projGrid');
  if (grid) observer.observe(grid, { childList: true, subtree: true });
})();


/* ═══════════════════════════════════════════════
   MAGNETIC BUTTONS  — hero CTAs follow cursor
═══════════════════════════════════════════════ */
(function initMagneticBtns() {
  document.querySelectorAll('.hero-actions .btn-main, .hero-actions .btn-ghost')
    .forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r  = btn.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width  / 2) * 0.35;
        const dy = (e.clientY - r.top  - r.height / 2) * 0.35;
        btn.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
})();


/* ═══════════════════════════════════════════════
   SMOOTH SCROLL NUMBER COUNT for GitHub stats
   (animates when they scroll into view)
═══════════════════════════════════════════════ */
(function initGhStatCount() {
  const stats = document.querySelectorAll('.gh-stat strong');
  if (!stats.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const raw = el.textContent;
      const num = parseInt(raw, 10);
      if (isNaN(num) || num < 2) return; // skip "—" or tiny
      const dur = 1200, t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * num);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = raw; // restore original (may have +)
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(s => io.observe(s));
})();
