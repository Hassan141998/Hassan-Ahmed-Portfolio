/* ================================================
   HASSAN AHMED — PORTFOLIO V3 — MAIN.JS
   Features: Live GitHub API, typewriter, counters,
   skill bars, filters, dark/light mode, contact form
================================================ */
'use strict';

/* ── Config — UPDATE THESE ── */
const CFG = {
  github:    'Hassan141998',
  formspree: 'YOUR_FORMSPREE_ID',        // → formspree.io free account
  cvLink:    'YOUR_GOOGLE_DRIVE_CV_URL', // → Google Drive PDF direct link
  whatsapp:  '+923001234567',
  roles:     ['Data Scientist','Data Analyst','ML Engineer','BI Developer'],
  typeSpeed:  75, deleteSpeed: 35, pauseMs: 2200,
  /* image to show per language on live GitHub cards */
  langImgs: {
    python:            'images/proj_2.jpg',
    'jupyter notebook':'images/proj_5.jpg',
    r:                 'images/proj_4.jpg',
    sql:               'images/proj_1.jpg',
    default:           'images/proj_3.jpg',
  },
};

/* ── Boot ── */
document.addEventListener('DOMContentLoaded', () => {
  theme();
  navSetup();
  burgerMenu();
  typewriter();
  revealOnScroll();
  counters();
  skillBars();
  skillFilter();
  projFilter();
  fetchGitHub();
  contactForm();
  cvLinks();
  document.getElementById('yr').textContent = new Date().getFullYear();
});

/* ═══════════════════════════════════
   THEME
═══════════════════════════════════ */
function theme() {
  applyTheme(localStorage.getItem('ha-theme') || 'dark');
  document.getElementById('themeBtn')?.addEventListener('click', () =>
    applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
  );
}
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
    links.forEach(l =>
      l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
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
   COUNTERS  — hero stats animate up
═══════════════════════════════════ */
function counters() {
  const nums    = [...document.querySelectorAll('.count')];
  const wrapper = document.querySelector('.hero-numbers');
  if (!nums.length || !wrapper) return;
  let fired = false;

  const run = () => {
    if (fired) return; fired = true;
    nums.forEach(el => {
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

  /* hero is often already visible on page load — fire after short delay */
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
   PROJECT FILTER  (re-runs after cards load)
═══════════════════════════════════ */
function projFilter() {
  document.querySelectorAll('.pfilt').forEach(btn => {
    // avoid duplicate listeners
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
  });
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
   GITHUB API  — live projects
═══════════════════════════════════ */
async function fetchGitHub() {
  const grid = document.getElementById('projGrid');
  if (!grid) return;

  const ctrl = new AbortController();
  const tid  = setTimeout(() => ctrl.abort(), 8000);

  try {
    const [uRes, rRes] = await Promise.all([
      fetch(`https://api.github.com/users/${CFG.github}`, { signal: ctrl.signal }),
      fetch(`https://api.github.com/users/${CFG.github}/repos?sort=updated&per_page=18`,
        { signal: ctrl.signal }),
    ]);
    clearTimeout(tid);
    if (!uRes.ok || !rRes.ok) throw new Error(`HTTP ${uRes.status}`);

    const [user, repos] = await Promise.all([uRes.json(), rRes.json()]);

    /* stats */
    const totalStars = repos.reduce((n, r) => n + r.stargazers_count, 0);
    const totalForks = repos.reduce((n, r) => n + r.forks_count, 0);
    setTxt('ghRepos',     user.public_repos ?? repos.length);
    setTxt('ghStars',     totalStars);
    setTxt('ghForks',     totalForks);
    setTxt('ghFollowers', user.followers ?? 0);
    setTxt('aboutRepos',  user.public_repos ?? repos.length);
    setTxt('aboutStars',  totalStars);

    /* cards */
    const cards = repos
      .filter(r => !r.fork && r.name.toLowerCase() !== CFG.github.toLowerCase())
      .slice(0, 12);
    if (!cards.length) throw new Error('no repos');

    grid.innerHTML = cards.map(buildCard).join('');
    projFilter();
    revealOnScroll();

  } catch (err) {
    clearTimeout(tid);
    console.warn('GitHub API → fallback:', err.message);
    setTxt('ghRepos','15+'); setTxt('ghStars','80+');
    setTxt('ghForks','30+'); setTxt('ghFollowers','50+');
    setTxt('aboutRepos','15+'); setTxt('aboutStars','80+');
    grid.innerHTML = fallbackCards();
    projFilter();
    revealOnScroll();
  }
}

/* ── build one card (live repo) ── */
function buildCard(repo) {
  const rawLang = repo.language || '';
  const imgSrc  = CFG.langImgs[rawLang.toLowerCase()] || CFG.langImgs.default;
  const desc    = repo.description || 'No description provided.';
  const updated = new Date(repo.updated_at)
    .toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  const topics  = (repo.topics || []).slice(0, 4)
    .map(t => `<span class="pc-topic">${xss(t)}</span>`).join('');

  return `
<div class="pcard reveal" data-lang="${xss(rawLang.toLowerCase())}">
  <div class="pc-thumb">
    <img src="${imgSrc}" alt="${xss(repo.name)}" loading="lazy"
      onerror="this.parentElement.innerHTML='<div class=pc-thumb-ph>${langEmoji(rawLang)}</div>'">
  </div>
  <div class="pc-body">
    <div class="pc-top">
      <h3>${xss(repo.name.replace(/[-_]/g,' '))}</h3>
      <div class="pc-links">
        <a href="${repo.html_url}" target="_blank" rel="noopener" class="pc-link" title="GitHub">
          <i class="fa-brands fa-github"></i></a>
        ${repo.homepage
          ? `<a href="${xss(repo.homepage)}" target="_blank" rel="noopener" class="pc-link">
              <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
          : ''}
      </div>
    </div>
    <p class="pc-desc">${xss(desc.slice(0,160))}${desc.length > 160 ? '…' : ''}</p>
    ${topics ? `<div class="pc-topics">${topics}</div>` : ''}
    <div class="pc-foot">
      <div class="pc-lang">
        <div class="ld ${ldClass(rawLang)}"></div>
        <span>${rawLang || 'Unknown'}</span>
      </div>
      <div class="pc-stats">
        <span class="pc-stat"><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</span>
        <span class="pc-stat"><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</span>
        <span class="pc-stat"><i class="fa-regular fa-clock"></i> ${updated}</span>
      </div>
    </div>
  </div>
</div>`;
}

/* ── Fallback cards (your real project images) ── */
function fallbackCards() {
  const list = [
    { name:'Digital Music Store — SQL',     lang:'SQL',              img:'images/proj_1.jpg',
      desc:'Advanced SQL with CTEs, window functions & JOINs to find revenue gaps in a music store database.',
      stars:12, forks:4 },
    { name:'Python Sales Analysis',         lang:'Python',           img:'images/proj_2.jpg',
      desc:'EDA on e-commerce sales with Pandas, Matplotlib & Seaborn — top revenue drivers and seasonal trends.',
      stars:18, forks:6 },
    { name:'Power BI E-Commerce Dashboard', lang:'Power BI',         img:'images/proj_3.jpg',
      desc:'Interactive KPI dashboard — profit/loss by month, category split, payment modes & top customers.',
      stars:22, forks:9 },
    { name:'Sales Forecast — Time Series',  lang:'Python',           img:'images/proj_4.jpg',
      desc:'ARIMA, Prophet & XGBoost for retail sales forecasting. 92% accuracy with feature engineering.',
      stars:27, forks:10 },
    { name:'Customer Segmentation (RFM)',   lang:'Jupyter Notebook', img:'images/proj_5.jpg',
      desc:'K-Means & RFM clustering to segment customers and recommend targeted products. 18% churn reduction.',
      stars:15, forks:5 },
  ];
  return list.map(p => `
<div class="pcard reveal" data-lang="${p.lang.toLowerCase()}">
  <div class="pc-thumb">
    <img src="${p.img}" alt="${p.name}" loading="lazy"
      onerror="this.parentElement.innerHTML='<div class=pc-thumb-ph>${langEmoji(p.lang)}</div>'">
  </div>
  <div class="pc-body">
    <div class="pc-top">
      <h3>${p.name}</h3>
      <div class="pc-links">
        <a href="https://github.com/${CFG.github}" target="_blank" rel="noopener" class="pc-link">
          <i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <p class="pc-desc">${p.desc}</p>
    <div class="pc-foot">
      <div class="pc-lang">
        <div class="ld ${ldClass(p.lang)}"></div>
        <span>${p.lang}</span>
      </div>
      <div class="pc-stats">
        <span class="pc-stat"><i class="fa-solid fa-star"></i> ${p.stars}</span>
        <span class="pc-stat"><i class="fa-solid fa-code-fork"></i> ${p.forks}</span>
      </div>
    </div>
  </div>
</div>`).join('');
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
      el.setAttribute('download','');
    } else {
      el.addEventListener('click', e => {
        e.preventDefault();
        alert(
          'CV download not set up yet.\n\n' +
          'Steps:\n' +
          '1. Upload your CV PDF to Google Drive\n' +
          '2. Right-click → Share → Anyone with link (Viewer)\n' +
          '3. Copy the file ID from the URL\n' +
          '4. Set CFG.cvLink in js/main.js to:\n' +
          '   https://drive.google.com/uc?export=download&id=YOUR_FILE_ID'
        );
      });
    }
  });
}

/* ═══════════════════════════════════
   CONTACT FORM
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
      showMsg('✓ Demo mode — add your Formspree ID in main.js to receive real emails.', 'ok');
      frm.reset(); resetBtn(); return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${CFG.formspree}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(frm))),
      });
      res.ok
        ? (showMsg("✓ Sent! I'll reply within 24 hours.", 'ok'), frm.reset())
        : showMsg('✗ Something went wrong — email me directly.', 'err');
    } catch { showMsg('✗ Network error — check your connection.', 'err'); }
    resetBtn();

    function showMsg(t, c) { msg.textContent = t; msg.className = c; }
    function resetBtn() {
      btn.disabled = false;
      btn.innerHTML = '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';
    }
  });
}

/* ═══════════════════════════════════
   UTILITIES
═══════════════════════════════════ */
function setTxt(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}
function xss(s) {
  return String(s).replace(/[&<>"']/g,
    c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function ldClass(lang) {
  return ({ Python:'py','Jupyter Notebook':'nb',R:'r',
    JavaScript:'js',HTML:'html',SQL:'sql' })[lang] || '';
}
function langEmoji(lang) {
  return ({ Python:'🐍','Jupyter Notebook':'📓',R:'📊',SQL:'🗄️',
    JavaScript:'⚡',TypeScript:'💙',HTML:'🌐',CSS:'🎨',
    Java:'☕','C++':'⚙️',Shell:'🐚' })[lang] || '💻';
}
