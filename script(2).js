/* ============================================================
   HEMLO ARMY — script.js
   All JS: Particles, Loader, Toast, Nav, Achievements,
           Managers, Tabs, Modal, Scroll Reveal, Counter
   ============================================================ */

'use strict';

/* ═══════════════════════════════════
   0. DATA
═══════════════════════════════════ */
const ACHIEVEMENTS = [
  { id:1,  title:'eFootball India Crew Wars S1', result:'CHAMPIONS', rank:1, cat:'champion', year:'2023', type:'Crew Wars', emoji:'🏆', team:null },
  { id:2,  title:'RSK Pesku', result:'SEMIFINALIST', rank:3, cat:'top4', year:'2021', type:'PES Tournament', emoji:'🎖️', team:null },
  { id:3,  title:'Trinity Cup S1', result:'#1 CHAMPION', rank:1, cat:'champion', year:'2022', type:'Cup', emoji:'🏆', team:null },
  { id:4,  title:'Trinity Cup S1', result:'#3 RUNNERS UP', rank:3, cat:'top4', year:'2022', type:'Cup', emoji:'🎖️', team:null },
  { id:5,  title:'PKA Tourney S1', result:'RUNNERS UP', rank:2, cat:'runner', year:'2022', type:'Tournament', emoji:'🥈', team:null },
  { id:6,  title:'PKA Tourney S1', result:'#3 RUNNERS UP', rank:3, cat:'top4', year:'2022', type:'Tournament', emoji:'🎖️', team:null },
  { id:7,  title:'Destroyerz Trio S1', result:'#1 CHAMPION', rank:1, cat:'champion', year:'2022', type:'Trio', emoji:'🏆', team:null },
  { id:8,  title:'AKPA Pro League 3rd Division S7', result:'#2 PLACE', rank:2, cat:'runner', year:'2023', type:'Pro League', emoji:'🥈', team:null },
  { id:9,  title:'MSIT Techxtra 2023 Trio Tour', result:'CHAMPION #1', rank:1, cat:'champion', year:'2023', type:'College Trio', emoji:'🏆', team:null },
  { id:10, title:'Marian College Duo Tour', result:'RUNNERS UP', rank:2, cat:'runner', year:'2023', type:'College Duo', emoji:'🥈', team:null },
  { id:11, title:'Phycho Esports 2v2 Co-Op', result:'RUNNERS UP', rank:2, cat:'runner', year:'2023', type:'2v2 Co-op', emoji:'🥈', team:null },
  { id:12, title:'Liga F9 Duo Tournament', result:'#2 RUNNER UP', rank:2, cat:'runner', year:'2023', type:'Duo Tournament', emoji:'🥈', team:'HEMLO OATHKEEPERS' },
  { id:13, title:'MPP International Tour S1', result:'CHAMPION #1', rank:1, cat:'champion', year:'2023', type:'International Tour', emoji:'🏆', team:'HEMLO BERSERKERS' },
  { id:14, title:'Hemlo Cup Clan Championship S1', result:'CHAMPION #1', rank:1, cat:'champion', year:'2023', type:'Clan Championship', emoji:'🏆', team:null },
  { id:15, title:'AKPA Gold Shield Nov 2023', result:'RUNNERS UP #2', rank:2, cat:'runner', year:'2023', type:'Gold Shield', emoji:'🥈', team:null },
  { id:16, title:'Devils Cup', result:'RUNNERS UP #2', rank:2, cat:'runner', year:'2023', type:'Cup', emoji:'🥈', team:null },
  { id:17, title:'Nextgen Esports Trio', result:'CHAMPION #1', rank:1, cat:'champion', year:'2024', type:'Trio', emoji:'🏆', team:null },
  { id:18, title:'Nextgen Esports Trio', result:'#3 PLACE', rank:3, cat:'top4', year:'2024', type:'Trio', emoji:'🎖️', team:null },
  { id:19, title:'CMD International Tour', result:'RUNNERS UP #2', rank:2, cat:'runner', year:'2024', type:'International Tour', emoji:'🥈', team:null },
  { id:20, title:'Redox Cup', result:'#4 PLACE', rank:4, cat:'top4', year:'2024', type:'Cup', emoji:'🎖️', team:null },
  { id:21, title:'BHS Cup', result:'2ND RUNNER UP', rank:3, cat:'top4', year:'2024', type:'Cup', emoji:'🎖️', team:null },
  { id:22, title:'ASP Cup', result:'#4 PLACE', rank:4, cat:'top4', year:'2024', type:'Cup', emoji:'🎖️', team:null },
  { id:23, title:'Nirvana Tour', result:'#3 PLACE', rank:3, cat:'top4', year:'2024', type:'Tour', emoji:'🎖️', team:null },
  { id:24, title:'eFootball Official Crew Tour', result:'#1 CHAMPION', rank:1, cat:'champion', year:'2024', type:'Official Tour', emoji:'🏆', team:null },
];

const CURRENT_MANAGERS = [
  { name:'Xman',        initials:'XM', role:'current' },
  { name:'Jester',      initials:'JR', role:'current' },
  { name:'Shaurya',     initials:'SH', role:'current' },
  { name:'Pattharbaaz', initials:'PB', role:'current' },
];
const EX_MANAGERS = [
  { name:'Shresth', initials:'SR', role:'former' },
  { name:'Soham',   initials:'SO', role:'former' },
];

const AI_PROMPTS = [
  "Cinematic esports poster: yellow trophies raining from stadium lights onto a black arena, dramatic low-angle shot, golden smoke effects, eFootball India Crew Wars championship moment, no copyrighted logos",
  "Dark esports tournament artwork: two players facing off under dramatic stadium spotlights, yellow and black color grade, RSK Pesku semifinal atmosphere, intense focus, cinematic composition",
  "Victory celebration poster: team holding a glowing golden trophy under a sea of yellow lights, confetti explosion, black background, Trinity Cup Season 1 championship moment",
  "Bronze medal esports artwork: lone player on a dark stage, yellow accent lighting, third place spotlight, dramatic shadows, black and gold color palette, cinematic quality",
  "Silver trophy esports poster: runner-up ceremony on a black stage, yellow neon glow from crowd, PKA Tourney dramatic lighting, trophy raised high, cinematic wide shot",
  "Third place esports podium: player standing under a yellow spotlight on a black stage, PKA Tourney energy, warm golden haze, cinematic depth of field",
  "Trio champion celebration: three silhouetted players on a dark esports stage, golden trophies raised, stadium lights behind them, Destroyerz Trio Season 1, dramatic yellow backlight",
  "Pro league second place podium: silver-lit esports stage, AKPA Pro League banner, yellow spotlight cutting through dark smoke, cinematic sports photography style",
  "College trio champions: electric yellow stage lights at MSIT Techxtra 2023, three players raising a gold trophy, crowd in darkness behind, dramatic college esports moment",
  "Duo runners up poster: two players back-to-back on a dark stage, silver light effects, Marian College Tournament, golden and black color grading, cinematic sports art",
  "2v2 runners up artwork: two esports players in a dramatic standoff pose, yellow glow around them, Phycho Esports Co-op energy, dark arena, premium editorial style",
  "Duo tournament second place: Liga F9 championship night, team in yellow highlight, dark stadium atmosphere, trophy in silver, HEMLO OATHKEEPERS banner, cinematic lighting",
  "International tour champions: HEMLO BERSERKERS raising gold trophy under stadium floodlights, yellow and black atmosphere, MPP International Tour, smoke effects, wide dramatic angle",
  "Clan championship victory: the Hemlo Army crest illuminated in gold light, dark arena background, confetti, trophy on center stage, Season 1 champion energy, cinematic grandeur",
  "Gold shield runners-up: AKPA Gold Shield silver ceremony, player in dark silhouette with golden aura, November 2023, premium esports editorial photography",
  "Devils Cup runners-up: gothic-inspired dark arena, red and yellow accents, silver trophy, dramatic low-key lighting, cinematic esports poster composition",
  "Nextgen Esports trio winners: three players in victory pose, yellow neon outlines against pitch black, golden confetti, champion energy, Nextgen Esports branding in smoke",
  "Third place trio: Nextgen Esports podium, bronze spotlight, three players in determined pose, dark arena, yellow ambient glow, cinematic depth",
  "International tour runners-up: CMD Tournament night stage, silver lighting, dramatic crowd silhouette, yellow haze, runner-up moment captured in cinematic style",
  "4th place finish: Redox Cup arena, dark moody atmosphere, player looking at stage from below, yellow rim lighting, grit and determination, cinematic editorial style",
  "Cup podium: BHS Cup 2nd runner-up ceremony, amber stadium lights, team in dark silhouette, gold and black editorial composition, cinematic sports moment",
  "ASP Cup 4th place: dramatic esports arena shot, yellow footlights, dark smoky background, player's determined face illuminated, cinematic low-angle composition",
  "Third place nirvana: Nirvana Tour podium night, purple and yellow lighting contrast, dark arena energy, bronze spotlight on player raising fist, cinematic quality",
  "Official Crew Tour champions: eFootball official stage, massive golden trophy, team raising it under a storm of yellow light beams, crowd in darkness, iconic champion moment",
];

/* ═══════════════════════════════════
   1. UTILITY
═══════════════════════════════════ */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function qs(sel, ctx = document) { return ctx.querySelector(sel); }

/* ═══════════════════════════════════
   2. LOADER
═══════════════════════════════════ */
const LOADER_MESSAGES = [
  'Initialising squad...',
  'Loading match data...',
  'Setting up formations...',
  'Ready to dominate...',
];

function initLoader() {
  const loader = $('loader');
  const fill   = $('loaderFill');
  const status = $('loaderStatus');
  if (!loader) return;

  let progress = 0;
  let msgIdx = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 8;
    if (progress > 100) progress = 100;
    fill.style.width = progress + '%';

    const newIdx = Math.floor((progress / 100) * LOADER_MESSAGES.length);
    if (newIdx !== msgIdx && newIdx < LOADER_MESSAGES.length) {
      msgIdx = newIdx;
      status.textContent = LOADER_MESSAGES[msgIdx];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerHeroAnims();
        showToast('HEMLO ARMY', 'Website loaded — Let\'s dominate! 🏆', 3200);
      }, 400);
    }
  }, 80);

  document.body.style.overflow = 'hidden';
}

/* ═══════════════════════════════════
   3. TOAST
═══════════════════════════════════ */
function showToast(title, msg, duration = 3000) {
  const container = $('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<div class="toast-title">${title}</div><div>${msg}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('out');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, duration);
}

/* ═══════════════════════════════════
   4. PARTICLES CANVAS
═══════════════════════════════════ */
function initParticles() {
  const canvas = $('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.6 + 0.2);
      this.size  = Math.random() * 1.8 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.7 ? '#FFD700' : '#FFFFFF';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 0.0008;
      if (this.y < -10 || this.alpha <= 0) this.reset();
    }
    draw() {
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function spawn() {
    const count = Math.min(Math.floor(W * H / 8000), 180);
    particles = Array.from({ length: count }, () => new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalAlpha = 1;
    particles.forEach(p => { p.update(); p.draw(); });

    // Subtle connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 80) {
          ctx.globalAlpha = (1 - dist / 80) * 0.06;
          ctx.strokeStyle = '#FFD700';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }

  const ro = new ResizeObserver(() => { resize(); spawn(); });
  ro.observe(canvas.parentElement);
  resize();
  spawn();
  loop();
}

/* ═══════════════════════════════════
   5. NAVBAR
═══════════════════════════════════ */
function initNavbar() {
  const navbar = $('navbar');
  const toggle = $('hamburger');
  const links  = $('navLinks');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    $('backTop')?.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    links?.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.classList.remove('open');
      links.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Highlight active link on scroll
  const sections = $$('section[id]');
  const navAs    = $$('.nav-a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          const active = a.getAttribute('href') === '#' + e.target.id;
          a.style.color = active ? 'var(--y)' : '';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
}

/* ═══════════════════════════════════
   6. HERO ANIMATIONS & COUNTER
═══════════════════════════════════ */
function triggerHeroAnims() {
  $$('.reveal-up').forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 120);
  });
  setTimeout(animateCounters, 600);
}

function animateCounters() {
  $$('.hstat-n[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target + (target === 24 ? '+' : '');
    }
    requestAnimationFrame(step);
  });
}

/* ═══════════════════════════════════
   7. ACHIEVEMENTS
═══════════════════════════════════ */
const VISIBLE_DEFAULT = 12;
let currentFilter = 'all';
let showAll = false;

function rankLabel(rank) {
  if (rank === 1) return '#1';
  if (rank === 2) return '#2';
  if (rank === 3) return '#3';
  return '#' + rank;
}

function buildCard(a, index) {
  const isChampion = a.cat === 'champion';
  const isRunner   = a.cat === 'runner';
  const card = document.createElement('div');
  card.className = `ach-card ${a.cat}-card reveal`;
  card.dataset.cat = a.cat;
  card.dataset.id  = a.id;

  card.innerHTML = `
    <span class="ach-number">${String(index + 1).padStart(2,'0')}</span>
    <div class="ach-card-top">
      <div>
        <div class="ach-rank-badge">${rankLabel(a.rank)}</div>
        <div class="ach-title">${a.title}</div>
      </div>
      <span class="ach-trophy">${a.emoji}</span>
    </div>
    <div class="ach-result">${a.result}</div>
    <div class="ach-meta">
      <span class="ach-tag">${a.year}</span>
      <span class="ach-tag">${a.type}</span>
      ${a.team ? `<span class="ach-tag team-tag">${a.team}</span>` : ''}
    </div>
    <div class="ach-cta">
      <span>View Details</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
  `;

  card.addEventListener('click', () => openModal(a));
  addRipple(card);
  return card;
}

function renderAchievements() {
  const grid = $('achGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = currentFilter === 'all'
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.cat === currentFilter);

  filtered.forEach((a, i) => {
    const card = buildCard(a, i);
    if (!showAll && i >= VISIBLE_DEFAULT) card.classList.add('hidden-card');
    grid.appendChild(card);
  });

  // Update view more button
  const btn   = $('viewMoreBtn');
  const label = $('viewMoreLabel');
  const hidden = filtered.length - VISIBLE_DEFAULT;
  if (btn) {
    if (filtered.length <= VISIBLE_DEFAULT) {
      btn.style.display = 'none';
    } else {
      btn.style.display = '';
      label.textContent = showAll
        ? 'Show Less'
        : `Show All ${filtered.length} Achievements`;
    }
  }

  // Trigger reveal for visible cards
  setTimeout(() => {
    $$('.ach-card:not(.hidden-card)').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 60);
    });
  }, 50);
}

function initAchievements() {
  renderAchievements();

  // Filter buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      showAll = false;
      renderAchievements();
    });
  });

  // View more
  $('viewMoreBtn')?.addEventListener('click', () => {
    showAll = !showAll;
    renderAchievements();
    if (!showAll) {
      $('achievements')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ═══════════════════════════════════
   8. MODAL
═══════════════════════════════════ */
function openModal(achievement) {
  const modal = $('modal');
  const body  = $('modalBody');
  if (!modal || !body) return;

  const prompt = AI_PROMPTS[achievement.id - 1] || '';
  const rankColor = achievement.cat === 'champion' ? '#FFD700'
    : achievement.cat === 'runner' ? '#C0C0C0' : '#CD7F32';

  body.innerHTML = `
    <span class="modal-emoji">${achievement.emoji}</span>
    <div class="modal-rank" style="color:${rankColor}">${achievement.result}</div>
    <div class="modal-title">${achievement.title}</div>
    <div class="modal-divider"></div>
    <div class="modal-row"><span class="modal-row-k">Year</span><span class="modal-row-v">${achievement.year}</span></div>
    <div class="modal-row"><span class="modal-row-k">Type</span><span class="modal-row-v">${achievement.type}</span></div>
    <div class="modal-row"><span class="modal-row-k">Placement</span><span class="modal-row-v">${achievement.result}</span></div>
    <div class="modal-row"><span class="modal-row-k">Category</span><span class="modal-row-v">${achievement.cat.charAt(0).toUpperCase() + achievement.cat.slice(1)}</span></div>
    ${achievement.team ? `<div class="modal-row"><span class="modal-row-k">Team</span><span class="modal-row-v">${achievement.team}</span></div>` : ''}
    <div class="modal-divider"></div>
    <details style="cursor:pointer;">
      <summary style="font-family:var(--font-ui);font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text2);padding:8px 0;list-style:none;display:flex;align-items:center;gap:8px;">
        <span>🎨</span> AI Image Prompt
      </summary>
      <p style="margin-top:12px;font-size:0.82rem;color:var(--text2);line-height:1.6;background:var(--bg3);padding:14px;border-radius:8px;border:1px solid var(--border-dim);">${prompt}</p>
    </details>
    <button class="modal-prompt-btn" onclick="copyPrompt(${achievement.id - 1})">
      📋 Copy AI Prompt
    </button>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.copyPrompt = function(idx) {
  const prompt = AI_PROMPTS[idx];
  if (!prompt) return;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('Copied!', 'AI image prompt copied to clipboard.', 2500);
  }).catch(() => {
    showToast('Prompt', prompt.slice(0, 60) + '...', 4000);
  });
};

function closeModal() {
  const modal = $('modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  $('modalClose')?.addEventListener('click', closeModal);
  $('modalBackdrop')?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ═══════════════════════════════════
   9. MANAGERS
═══════════════════════════════════ */
function buildManagerCard(mgr) {
  const card = document.createElement('div');
  card.className = 'mgr-card reveal';
  card.innerHTML = `
    <div class="mgr-avatar">${mgr.initials}</div>
    <div class="mgr-name">${mgr.name}</div>
    <span class="mgr-role ${mgr.role}">${mgr.role === 'current' ? '● Manager' : '◎ Former Manager'}</span>
  `;
  return card;
}

function initManagers() {
  const cGrid = $('currentMgrGrid');
  const eGrid = $('exMgrGrid');
  if (cGrid) CURRENT_MANAGERS.forEach(m => cGrid.appendChild(buildManagerCard(m)));
  if (eGrid) EX_MANAGERS.forEach(m => eGrid.appendChild(buildManagerCard(m)));

  const toggle = $('exToggle');
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    eGrid?.classList.toggle('hidden', !isOpen);
    if (isOpen) {
      eGrid?.querySelectorAll('.reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 100);
      });
    }
  });
}

/* ═══════════════════════════════════
   10. TABS (LINEUPS)
═══════════════════════════════════ */
function initTabs() {
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      $$('.tab').forEach(t => t.classList.remove('active'));
      $$('.tab-pane').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      $('pane-' + target)?.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════
   11. SCROLL REVEAL (Intersection Observer)
═══════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  // Observe static elements
  $$('.reveal').forEach(el => obs.observe(el));

  // Re-observe dynamically created cards (via MutationObserver)
  const muObs = new MutationObserver(() => {
    $$('.reveal:not(.visible)').forEach(el => obs.observe(el));
  });
  muObs.observe(document.body, { childList: true, subtree: true });
}

/* ═══════════════════════════════════
   12. BACK TO TOP
═══════════════════════════════════ */
function initBackTop() {
  $('backTop')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ═══════════════════════════════════
   13. RIPPLE EFFECT
═══════════════════════════════════ */
function addRipple(el) {
  el.addEventListener('click', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    ripple.style.cssText = `
      width:${size}px;height:${size}px;
      left:${x - size/2}px;top:${y - size/2}px;
    `;
    el.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });
}

function initRipples() {
  $$('.ripple').forEach(el => addRipple(el));
}

/* ═══════════════════════════════════
   14. SMOOTH ANCHOR SCROLL
═══════════════════════════════════ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ═══════════════════════════════════
   15. SECTION BADGE — add reveal
═══════════════════════════════════ */
function initSectionReveal() {
  $$('.sec-head > *, .contact-card, .lineup-wrap, .mgr-card').forEach((el, i) => {
    el.classList.add('reveal');
  });
}

/* ═══════════════════════════════════
   INIT — DOMContentLoaded
═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initParticles();
  initNavbar();
  initAchievements();
  initManagers();
  initTabs();
  initModal();
  initBackTop();
  initRipples();
  initSmoothScroll();
  initSectionReveal();
  initScrollReveal();
});
