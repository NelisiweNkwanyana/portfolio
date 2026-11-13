// =====================================================================
// PROJECTS — cards + full-page project details (styled after rinlayheang.me)
//
// To add or edit a project, change the PROJECTS list below. Nothing else.
//   image : a file in public/projects/  (written as /projects/name.jpg)
//   focus : which part of the image the card shows ("center", "center 20%" ...)
//   live  : live website link ('' = no LIVE SITE button)
//   code  : GitHub link ('' = no GitHub button)
//   demo  : a video in public/projects/ ('' = none)
//   play  : a playable web game, e.g. '/play/neon-heist/index.html' ('' = none)
//   stats : big numbers on the details page (optional)
//   features : the "What it does" boxes on the details page
// =====================================================================

import './projects.css';

const GITHUB = 'https://github.com/NelisiweNkwanyana';

export const PROJECTS = [
  {
    slug: 'astra-nova',
    title: 'ASTRA NOVA',
    category: 'WEB APP · 3D',
    year: 2026,
    image: '/projects/astra-nova.jpg',
    focus: 'center',
    summary: 'A real NASA Earth in 3D: find your location, watch live satellites orbit and see which planets are above you tonight.',
    description: 'The whole Solar System in 3D, with every planet where it really is today. Select Earth to dive to your own location on a correctly rotated globe, switch to satellite imagery, follow live satellites and see which planets are above your horizon right now.',
    tags: ['React', 'Three.js', 'React Three Fiber', 'FastAPI', 'NASA JPL Horizons'],
    stats: [
      { value: '8', label: 'Planets at their real positions today' },
      { value: '3', label: 'Live satellites tracked (ISS, Tiangong, Hubble)' },
    ],
    features: [
      { icon: '◉', title: 'Real solar system', text: 'Planets placed from NASA JPL orbital elements, with a time bar to pause, speed up or run backwards.' },
      { icon: '⌖', title: 'Find my location', text: 'The camera dives to a pin on the real globe, then into satellite imagery of where you are.' },
      { icon: '🛰', title: 'Live satellites', text: 'Watch the ISS, Tiangong and Hubble orbit the Earth in real time.' },
      { icon: '✦', title: 'My sky tonight', text: 'A Python FastAPI service asks NASA JPL Horizons which planets are above your horizon.' },
    ],
    live: 'https://astra-nov.vercel.app/',
    code: `${GITHUB}/astra-nova`,
    demo: '',
  },
  {
    slug: 'dynasty-fc',
    title: 'DYNASTY INTEGRATED SYSTEM',
    category: 'FULL-STACK · WEB APP',
    year: 2026,
    image: '/projects/dynasty.jpg',
    focus: 'center',
    summary: 'A club management system for Dynasty FC: a public club website plus a staff dashboard behind a login.',
    description: 'A full-stack platform for Dynasty FC. Supporters get a public website with teams, news and a gallery; staff get a dashboard for running the club, from player development to club documents, backed by a cloud MySQL database.',
    tags: ['Python', 'Flask', 'MySQL', 'JavaScript', 'HTML/CSS', 'Render'],
    stats: [
      { value: '2', label: 'Sides: public club site and staff dashboard' },
    ],
    features: [
      { icon: '⚽', title: 'Public club website', text: 'Teams, news and a photo gallery for supporters and parents.' },
      { icon: '▤', title: 'Staff dashboard', text: 'A secure area where staff manage the club day to day.' },
      { icon: '↗', title: 'Player development', text: 'Track player progress across the club’s teams.' },
      { icon: '🗂', title: 'Club documents', text: 'Upload and organise club documents, with duplicate detection.' },
    ],
    live: 'https://dynasty-fc-webdev.onrender.com/',
    code: `${GITHUB}/dynasty-fc`,
    demo: '',
  },
  {
    slug: 'air-noir',
    title: 'AIR NOIR',
    category: 'WEB · UI/UX',
    year: 2026,
    image: '/projects/air-noir.jpg',
    focus: 'center 30%',
    summary: 'A luxury private-aviation website with a cinematic scroll and a private jet charter booking flow.',
    description: 'A black-and-champagne-gold luxury aviation brand. The site tells its story through a cinematic scroll, showcases the fleet and its specifications, and lets travellers request and keep track of private jet charters.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Netlify'],
    stats: [],
    features: [
      { icon: '✈', title: 'Cinematic scroll', text: 'A scroll-driven landing that moves the visitor through the journey.' },
      { icon: '◇', title: 'Fleet showcase', text: 'Aircraft presented with their specifications, such as the G650ER.' },
      { icon: '✎', title: 'Charter booking', text: 'A booking flow to request a private flight in a few steps.' },
      { icon: '★', title: 'Saved trips', text: 'Requests are kept in the browser so visitors can come back to them.' },
    ],
    live: 'https://airnoir.netlify.app/',
    code: `${GITHUB}/air-noir`,
    demo: '',
  },
  {
    slug: 'gridcost',
    title: 'GRIDCOST',
    category: 'PYTHON · DATA APP',
    year: 2026,
    image: '/projects/gridcost.jpg',
    focus: 'center 40%',
    summary: 'A Streamlit app that estimates, forecasts and visualises what load-shedding costs a South African small business.',
    description: 'GridCost estimates what load-shedding costs a small business, forecasts the next 30 days, and recommends whether backup power pays off. It currently runs on a reproducible synthetic schedule, and every figure is labelled as sample data.',
    tags: ['Python', 'Streamlit', 'pandas', 'NumPy', 'Plotly'],
    stats: [
      { value: '30', label: 'Day cost estimate and forecast' },
      { value: '5', label: 'App pages: home, dashboard, data, reports, settings' },
    ],
    features: [
      { icon: '⚡', title: 'Cost estimate', text: 'Enter your business details and see a 30-day load-shedding cost.' },
      { icon: '📈', title: 'Forecasts and charts', text: 'Interactive Plotly charts of the schedule and its impact.' },
      { icon: '🔋', title: 'Backup power advice', text: 'A recommendation on whether backup power pays for itself.' },
      { icon: '⬇', title: 'Reports and data', text: 'Download a text report and the schedule as CSV.' },
    ],
    live: 'https://gridcost-26.streamlit.app/',
    code: `${GITHUB}/gridcost`,
    demo: '',
  },
  {
    slug: '4wd-robot-car',
    title: '4WD ROBOT CAR',
    category: 'HARDWARE · ARDUINO',
    year: 2026,
    image: '/projects/4wd-robot-car.jpg',
    focus: 'center',
    summary: 'An Arduino UNO robot with line following, obstacle avoidance and Bluetooth or joystick control, programmed in C++.',
    description: 'A four-wheel-drive robot built on an Arduino UNO and programmed in C++. It follows a line, detects and avoids obstacles, and can be driven by Bluetooth or a joystick, with safety built in: one module owns the motors, faults latch and there is an emergency stop. The firmware is logic-tested in a simulator; the hardware build is in progress.',
    tags: ['Arduino', 'C++', 'Robotics', 'Electronics'],
    stats: [
      { value: '4', label: 'Driven wheels' },
      { value: '4', label: 'Modes: line, obstacle, Bluetooth, joystick' },
    ],
    features: [
      { icon: '〰', title: 'Line following', text: 'Three IR sensors with soft and hard corrections and gap tolerance.' },
      { icon: '◎', title: 'Obstacle avoidance', text: 'Stops at 20 cm, scans left and right, and turns to the clearer side.' },
      { icon: 'ᛒ', title: 'Bluetooth control', text: 'Driven from a phone, with a link-loss stop and collision guard.' },
      { icon: '🕹', title: 'Joystick control', text: 'Proportional speed from a tethered joystick, with a dead-zone stop.' },
    ],
    live: 'https://nelisiwenkwanyana.github.io/4wd-robot-car/',
    code: `${GITHUB}/4wd-robot-car`,
    demo: '',
  },
  {
    slug: 'kernelled',
    title: 'KERNELLED',
    category: 'SYSTEMS · OPERATING SYSTEM',
    year: 2026,
    image: '/projects/kernelled.jpg',
    focus: 'center 70%',
    summary: 'An educational operating system for 64-bit ARM, written from scratch in C and assembly and booted in QEMU.',
    description: 'KERNELLED boots on 64-bit ARM, sets up its own memory management, handles interrupts, schedules processes and gives you a shell with a file system, all written from scratch in C and assembly. It runs 13 self-tests on every boot.',
    tags: ['C', 'ARM64 Assembly', 'QEMU', 'GDB', 'Make'],
    stats: [
      { value: '13', label: 'Self-tests passing on every boot' },
      { value: '50', label: 'ms time slices, round-robin scheduling' },
    ],
    features: [
      { icon: '⏻', title: 'Boot and exceptions', text: 'Boots at EL1 with its own exception vectors and crash reports.' },
      { icon: '▦', title: 'Memory management', text: 'Page allocator, kernel heap and an MMU with write-xor-execute.' },
      { icon: '⟳', title: 'Processes and scheduling', text: 'Preemptive round-robin scheduler driven by a 100 Hz timer interrupt.' },
      { icon: '>_', title: 'Shell and file system', text: 'An in-memory file system and a shell with 17 commands.' },
    ],
    live: '',
    code: `${GITHUB}/kernelled`,
    demo: '/projects/kernelled-demo.mp4',
  },
  {
    slug: 'neon-heist',
    title: 'NEON HEIST',
    category: 'GAME · GODOT 4',
    year: 2026,
    image: '/projects/neon-heist.jpg',
    focus: 'center',
    summary: 'A third-person cyberpunk stealth-action game set in Johannesburg, 2077.',
    description: 'NEON HEIST: The Blackout Protocol. Pick one of four operatives, steal a hover car, break into a megacorp tower and escape with stolen files. Built in Godot 4 with GDScript, with an automated test that plays the whole mission.',
    tags: ['Godot 4', 'GDScript', 'Blender', 'WebAssembly'],
    stats: [
      { value: '4', label: 'Playable operatives' },
      { value: '49', label: 'Checks in the automated playthrough test' },
    ],
    features: [
      { icon: '👁', title: 'Guard AI', text: 'A 7-state machine with vision cones, hearing and A* pathfinding.' },
      { icon: '✛', title: 'Combat system', text: 'Four weapons, camera-aimed hit detection, headshots and reloads.' },
      { icon: '🚀', title: 'Hover car', text: 'Flight physics, pursuit drones and cannons.' },
      { icon: '⌨', title: 'Hacking minigame', text: 'Break into the tower’s systems to reach the files.' },
    ],
    live: '',
    code: '',
    demo: '',
    play: '/play/neon-heist/index.html',
  },
  {
    slug: 'sentryscope',
    title: 'SENTRYSCOPE',
    category: 'CYBERSECURITY · SIEM',
    year: 2026,
    image: '/projects/sentryscope.jpg',
    focus: 'center',
    summary: 'A SIEM-style app: upload logs, detect suspicious behaviour with explainable rules and investigate incidents.',
    description: 'SentryScope – SIEM & AuthShield simulates the core workflow of a SIEM platform. Upload authentication and connection logs, flag suspicious behaviour with explainable rules, and investigate incidents end to end, with role-based access and an audit trail. Every incident starts as unverified until an analyst reviews it.',
    tags: ['Python', 'Gradio', 'pandas', 'SQLAlchemy', 'Plotly', 'Pytest'],
    stats: [
      { value: '7', label: 'Detection rules mapped to MITRE ATT&CK' },
    ],
    features: [
      { icon: '⇪', title: 'Log ingestion', text: 'Upload, validate and normalise server and authentication logs.' },
      { icon: '⚑', title: 'Explainable detection', text: 'Configurable rules with sliding windows and correlated incidents.' },
      { icon: '🔍', title: 'Investigations', text: 'Triage, analyst notes, verdicts, history and exportable reports.' },
      { icon: '⛨', title: 'Security built in', text: 'Hashed passwords, lockout, session expiry, RBAC and an audit trail.' },
    ],
    live: '',
    code: `${GITHUB}/sentryscope`,
    demo: '',
  },
  {
    slug: 'sa-retail-pipeline',
    title: 'SA RETAIL DATA PIPELINE',
    category: 'DATA ENGINEERING',
    year: 2026,
    image: '/projects/sa-retail.jpg',
    focus: 'center 15%',
    summary: 'An end-to-end ETL pipeline turning raw South African retail data into an analytics-ready warehouse and dashboard.',
    description: 'An end-to-end pipeline that takes raw South African retail transactions, cleans them, loads them into a PostgreSQL star schema with quarantine for bad records, and serves KPIs through SQL views and a Streamlit dashboard.',
    tags: ['Python', 'pandas', 'SQLAlchemy', 'PostgreSQL', 'SQL', 'Streamlit'],
    stats: [
      { value: '5,000+', label: 'Retail transactions processed' },
    ],
    features: [
      { icon: '⇩', title: 'Extract and clean', text: 'Inconsistent raw records cleaned and validated with pandas.' },
      { icon: '★', title: 'Star schema', text: 'Loaded into PostgreSQL, with bad rows quarantined instead of lost.' },
      { icon: 'Σ', title: 'Analytics views', text: 'SQL views that answer the retail KPI questions.' },
      { icon: '▥', title: 'Dashboard', text: 'A Streamlit dashboard with KPIs and interactive charts.' },
    ],
    live: '',
    code: `${GITHUB}/sa-retail-pipeline`,
    demo: '',
  },
  {
    slug: 'apex-stream-engine',
    title: 'APEX STREAM ENGINE',
    category: 'DATA ENGINEERING · STREAMING',
    year: 2026,
    image: '/projects/apex.jpg',
    focus: 'center',
    summary: 'A real-time data pipeline for a simulated digital wallet: Kafka, Spark Structured Streaming and PostgreSQL.',
    description: 'Synthetic wallet transactions are published to Apache Kafka, processed by Spark Structured Streaming with event-time windows and watermarks, checked by transparent anomaly rules, stored in a PostgreSQL star schema and monitored on a Streamlit dashboard. All data is synthetic.',
    tags: ['Apache Kafka', 'Spark Streaming', 'PostgreSQL', 'Streamlit', 'Docker'],
    stats: [
      { value: '5', label: 'Kafka topics' },
      { value: '10', label: 'Data-quality checks' },
    ],
    features: [
      { icon: '⧉', title: 'Event streaming', text: 'Partitioned Kafka topics with dead-letter and quarantine topics.' },
      { icon: '✶', title: 'Stream processing', text: 'Spark windows, watermarks and de-duplication on bad-row-safe schemas.' },
      { icon: '✓', title: 'Exactly-once effect', text: 'At-least-once delivery with idempotent sinks, proven by replay tests.' },
      { icon: '▤', title: 'Monitoring', text: 'Kafka lag, Spark progress and data-quality history on a dashboard.' },
    ],
    live: '',
    code: `${GITHUB}/apex-stream-engine`,
    demo: '',
  },
  {
    slug: 'sentrylog',
    title: 'SENTRYLOG BACKEND',
    category: 'BACKEND · API',
    year: 2026,
    image: '/projects/sentrylog.jpg',
    focus: 'center',
    summary: 'A resilient error-tracking backend with a reliable retry queue, built with FastAPI, PostgreSQL and Redis.',
    description: 'Services report their errors to SentryLog; a background worker groups similar errors into issues through a reliable retry queue; engineers manage them through a REST API. Built to show what happens when a job fails, a worker crashes or Redis goes down.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'Docker'],
    stats: [],
    features: [
      { icon: '⇥', title: 'Error ingestion', text: 'Services send errors to an API protected by a project key.' },
      { icon: '⧈', title: 'Issue grouping', text: 'A worker groups similar errors into issues.' },
      { icon: '↻', title: 'Reliable retries', text: 'Retry with backoff and a dead-letter queue when jobs keep failing.' },
      { icon: '⚿', title: 'Engineer API', text: 'A REST API with JWT login to manage issues.' },
    ],
    live: '',
    code: `${GITHUB}/sentrylog`,
    demo: '',
  },
];

/* ---------- helpers ---------- */
const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function splitTitle(title) {
  // Rin's details page shows the title on two lines, the second in teal.
  const words = title.split(' ');
  if (words.length === 1) return [title, ''];
  const cut = Math.ceil(words.length / 2);
  return [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
}

/* ---------- cards ---------- */
function cardHTML(p) {
  const secondary = p.play
    ? `<a class="btn btn-outline" href="${esc(p.play)}" target="_blank" rel="noopener" data-stop>PLAY GAME <span>▶</span></a>`
    : p.live
    ? `<a class="btn btn-outline" href="${esc(p.live)}" target="_blank" rel="noopener" data-stop>LIVE SITE <span>↗</span></a>`
    : p.demo
      ? `<button class="btn btn-outline" type="button" data-demo>WATCH DEMO <span>▶</span></button>`
      : '';
  return `
    <article class="project-card" data-project="${esc(p.slug)}" tabindex="0" role="button" aria-label="View ${esc(p.title)} details">
      <div class="project-thumb">
        <img src="${esc(p.image)}" alt="${esc(p.title)} preview" loading="lazy" draggable="false" style="object-position:${esc(p.focus || 'center')}">
      </div>
      <p class="project-kicker">${esc(p.category)} · ${esc(p.year)}</p>
      <h3 class="project-title">${esc(p.title)}</h3>
      <p class="project-desc">${esc(p.summary)}</p>
      <div class="project-actions">
        <button class="btn btn-solid" type="button">DETAILS <span>↗</span></button>
        ${secondary}
      </div>
    </article>`;
}

function renderCards() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(cardHTML).join('');

  grid.querySelectorAll('.project-card').forEach((card) => {
    const open = (opts) => openProjectPage(card.dataset.project, opts);
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-stop]')) return; // LIVE SITE / PLAY GAME open in a new tab
      open({ toDemo: Boolean(e.target.closest('[data-demo]')) });
    });
    card.addEventListener('keydown', (e) => {
      if (e.target !== card) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

/* ---------- full-page details ---------- */
let page;

function buildPage() {
  page = document.createElement('dialog');
  page.className = 'project-page';
  page.setAttribute('aria-label', 'Project details');
  document.body.appendChild(page);
  page.addEventListener('cancel', (e) => { e.preventDefault(); closeProjectPage(); });
  page.addEventListener('click', (e) => {
    if (e.target.closest('[data-back]')) { e.preventDefault(); closeProjectPage(); }
  });
}

function pageHTML(p) {
  const [l1, l2] = splitTitle(p.title);
  const stats = (p.stats || []).map((s) => `
      <div class="pp-stat"><span class="pp-c tl"></span><span class="pp-c br"></span>
        <strong>${esc(s.value)}</strong><small>${esc(s.label)}</small></div>`).join('');
  const features = (p.features || []).map((f) => `
      <div class="pp-feature"><span class="pp-c tl"></span><span class="pp-c br"></span>
        <span class="pp-ficon" aria-hidden="true">${esc(f.icon)}</span>
        <h4>${esc(f.title)}</h4><p>${esc(f.text)}</p></div>`).join('');
  const buttons = [
    p.play && `<a class="btn btn-solid" href="${esc(p.play)}" target="_blank" rel="noopener">PLAY GAME <span>▶</span></a>`,
    p.live && `<a class="btn btn-solid" href="${esc(p.live)}" target="_blank" rel="noopener">LIVE SITE <span>↗</span></a>`,
    p.code && `<a class="btn btn-outline" href="${esc(p.code)}" target="_blank" rel="noopener">GITHUB <span>↗</span></a>`,
  ].filter(Boolean).join('');

  return `
    <header class="pp-bar">
      <a href="#projects" class="pp-back" data-back>← PORTFOLIO</a>
      <span class="pp-brand">NELISIWE NKWANYANA</span>
      <span class="pp-crumb">PROJECT · ${esc(p.title)}</span>
    </header>
    <div class="pp-inner">
      <section class="pp-hero">
        <div class="pp-intro">
          <p class="pp-eyebrow"><span></span>${esc(p.category)} · ${esc(p.year)}</p>
          <h2 class="pp-title">${esc(l1)}${l2 ? `<br><em>${esc(l2)}</em>` : ''}</h2>
          <p class="pp-desc">${esc(p.description)}</p>
          <ul class="pp-tags">${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          ${buttons ? `<div class="pp-actions">${buttons}</div>` : ''}
        </div>
        <figure class="pp-cover"><img src="${esc(p.image)}" alt="${esc(p.title)} cover" style="object-position:${esc(p.focus || 'center')}"></figure>
      </section>
      ${stats ? `<section class="pp-stats">${stats}</section>` : ''}
      ${p.demo ? `
      <section class="pp-block" id="pp-demo">
        <p class="pp-label">DEMO</p>
        <h3 class="pp-h3">SEE IT RUN</h3>
        <video class="pp-video" src="${esc(p.demo)}" controls playsinline preload="metadata"></video>
      </section>` : ''}
      ${features ? `
      <section class="pp-block">
        <p class="pp-label">FEATURES</p>
        <h3 class="pp-h3">WHAT IT DOES</h3>
        <div class="pp-features">${features}</div>
      </section>` : ''}
      <footer class="pp-foot">
        <a href="#projects" class="btn btn-outline" data-back>← BACK TO ALL PROJECTS</a>
      </footer>
    </div>`;
}

export function openProjectPage(slug, { toDemo = false, fromHash = false } = {}) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return;
  if (!page) buildPage();
  page.innerHTML = pageHTML(p);
  if (!page.open) page.showModal();
  document.documentElement.classList.add('pp-lock');
  page.scrollTop = 0;
  if (!fromHash) history.pushState({ project: slug }, '', `#project/${slug}`);
  if (toDemo) requestAnimationFrame(() => page.querySelector('#pp-demo')?.scrollIntoView({ behavior: 'smooth' }));
}

export function closeProjectPage({ fromHash = false } = {}) {
  if (!page?.open) return;
  page.querySelector('video')?.pause();
  page.close();
  document.documentElement.classList.remove('pp-lock');
  if (!fromHash && location.hash.startsWith('#project/')) history.back();
  requestAnimationFrame(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'instant', block: 'start' }));
}

// Browser back/forward and shared links like yoursite.com/#project/kernelled
function syncWithHash() {
  const m = location.hash.match(/^#project\/([\w-]+)/);
  if (m) openProjectPage(m[1], { fromHash: true });
  else closeProjectPage({ fromHash: true });
}
window.addEventListener('popstate', syncWithHash);

renderCards();
if (location.hash.startsWith('#project/')) syncWithHash();