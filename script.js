// ================================================================
// VIBZ V2 — Complete Frontend Application
// Single-file JS, no dependencies, localStorage-backed state
// ================================================================

'use strict';

// ── INTERESTS ────────────────────────────────────────────────────
const ALL_INTERESTS = ['Tech','Music','Travel','Gaming','Design','AI','College','Fitness','Movies','Books','Ideas','Life'];

// ── MOCK VIBZ DATA ───────────────────────────────────────────────
const VIBZ_DATA = [
  {
    id: 1, type: 'QUESTION',
    title: 'What are you overthinking?',
    people: 37, active: 12,
    energy: 'Reflective', categories: ['Life'],
    prompt: "Drop one thing you're carrying in your head.",
    expiry: '4h', isNew: false, isTrending: true,
    trendingStats: { thoughts: 24, echoes: 18 },
    items: [
      ["I keep planning instead of starting.", "Mia", 8],
      ["Whether I'm on the right path.", "Arun", 14],
      ["That everyone has it figured out.", "Zee", 6],
      ["What if I just try?", "Noah", 11]
    ],
    participants: [
      { name:'Mia',   initials:'M', color:'#ff4f8b', thought:"I keep planning instead of starting.", status:'active' },
      { name:'Arun',  initials:'A', color:'#9b59b6', thought:"Whether I'm on the right path.",       status:'active' },
      { name:'Zee',   initials:'Z', color:'#1bd3df', thought:"That everyone has it figured out.",    status:'away'   },
      { name:'Noah',  initials:'N', color:'#92eb42', thought:"What if I just try?",                  status:'active' },
      { name:'Priya', initials:'P', color:'#ff8128', thought:"Am I doing enough?",                   status:'active' },
    ],
    reactions: [3, 8, 12, 5, 7]
  },
  {
    id: 2, type: 'IDEA',
    title: 'Build something weird tonight.',
    people: 31, active: 9,
    energy: 'Creative', categories: ['Ideas','Design','Tech'],
    prompt: "You have 30 minutes. What are you making?",
    expiry: '6h', isNew: false, isTrending: true,
    trendingStats: { thoughts: 31, echoes: 22 },
    items: [
      ["A website that changes every refresh.", "Ava", 5],
      ["A useless AI that gives compliments.",  "Leo", 9],
      ["A tiny game about procrastination.",    "Sam", 3],
      ["Okay, I'm actually doing this.",        "Ria", 7]
    ],
    participants: [
      { name:'Ava', initials:'A', color:'#ff4f8b', thought:"A website that changes every refresh.", status:'active' },
      { name:'Leo', initials:'L', color:'#a969ff', thought:"A useless AI that gives compliments.", status:'active'  },
      { name:'Sam', initials:'S', color:'#1bd3df', thought:"A tiny game about procrastination.",  status:'away'    },
      { name:'Ria', initials:'R', color:'#ff8128', thought:"Okay, I'm actually doing this.",      status:'active'  },
    ],
    reactions: [11, 6, 9, 14, 3]
  },
  {
    id: 3, type: 'PLAN',
    title: 'Where should we escape this weekend?',
    people: 23, active: 7,
    energy: 'Adventurous', categories: ['Travel'],
    prompt: "Pick a direction. We'll figure out the rest.",
    expiry: '2d', isNew: false, isTrending: true,
    trendingStats: { thoughts: 61, echoes: 41 },
    items: [
      ["Mountains. Early train.",           "Kai", 4],
      ["Beach + no itinerary.",             "Nia", 7],
      ["Somewhere I've never heard of.",    "Dev", 2],
      ["I'm bringing snacks.",              "Ish", 11]
    ],
    participants: [
      { name:'Kai', initials:'K', color:'#ff4f8b', thought:"Mountains. Early train.",        status:'active' },
      { name:'Nia', initials:'N', color:'#ffda27', thought:"Beach + no itinerary.",          status:'away'   },
      { name:'Dev', initials:'D', color:'#92eb42', thought:"Somewhere I've never heard of.", status:'active' },
      { name:'Ish', initials:'I', color:'#1bd3df', thought:"I'm bringing snacks.",           status:'active' },
    ],
    reactions: [5, 9, 7, 2, 16]
  },
  {
    id: 4, type: 'CHALLENGE',
    title: 'Make something in 30 minutes',
    people: 61, active: 24,
    energy: 'Energetic', categories: ['Ideas','Design'],
    prompt: "No tutorials. No perfection. Just ship.",
    expiry: '45m', isNew: false, isTrending: false,
    items: [
      ["Starting a landing page now.", "Jules", 8],
      ["Drawing with my eyes closed.", "Tara",  3],
      ["Writing a tiny poem.",         "Ben",   6],
      ["Let's goooo.",                 "Jo",   14]
    ],
    participants: [
      { name:'Jules', initials:'J', color:'#a969ff', thought:"Starting a landing page now.", status:'active' },
      { name:'Tara',  initials:'T', color:'#ff4f8b', thought:"Drawing with my eyes closed.", status:'active' },
      { name:'Ben',   initials:'B', color:'#1bd3df', thought:"Writing a tiny poem.",         status:'away'   },
      { name:'Jo',    initials:'J', color:'#92eb42', thought:"Let's goooo.",                 status:'active' },
    ],
    reactions: [9, 4, 21, 7, 3]
  },
  {
    id: 5, type: 'QUESTION',
    title: "What's a skill everyone should learn?",
    people: 42, active: 15,
    energy: 'Curious', categories: ['Ideas','Life'],
    prompt: "One skill you wish school taught.",
    expiry: '8h', isNew: false, isTrending: false,
    items: [
      ["How to ask better questions.", "V", 12],
      ["How to manage money.",         "Ira", 8],
      ["How to be alone.",             "K",  5],
      ["How to start before ready.",   "M",  9]
    ],
    participants: [
      { name:'Val',  initials:'V', color:'#ff4f8b', thought:"How to ask better questions.", status:'active' },
      { name:'Ira',  initials:'I', color:'#ffda27', thought:"How to manage money.",         status:'active' },
      { name:'Kris', initials:'K', color:'#a969ff', thought:"How to be alone.",             status:'away'   },
      { name:'Maya', initials:'M', color:'#92eb42', thought:"How to start before ready.",   status:'active' },
    ],
    reactions: [7, 11, 4, 6, 9]
  },
  {
    id: 6, type: 'IDEA',
    title: 'Make your ordinary day interesting.',
    people: 18, active: 6,
    energy: 'Playful', categories: ['Life'],
    prompt: "Give someone a tiny mission.",
    expiry: '12h', isNew: false, isTrending: false,
    items: [
      ["Take the long way home.", "Nila", 3],
      ["Talk to someone new.",    "A",   7],
      ["Photograph one blue thing.", "Ben", 4],
      ["Leave a nice note.",      "Jo",  5]
    ],
    participants: [
      { name:'Nila', initials:'N', color:'#ff4f8b', thought:"Take the long way home.",     status:'active' },
      { name:'Alex', initials:'A', color:'#1bd3df', thought:"Talk to someone new.",         status:'away'   },
      { name:'Ben',  initials:'B', color:'#92eb42', thought:"Photograph one blue thing.",   status:'active' },
      { name:'Jo',   initials:'J', color:'#ff8128', thought:"Leave a nice note.",           status:'active' },
    ],
    reactions: [4, 8, 3, 9, 6]
  },
  {
    id: 7, type: 'QUESTION',
    title: 'Best AI tool you discovered this week?',
    people: 55, active: 19,
    energy: 'Curious', categories: ['AI','Tech'],
    prompt: "One tool, one sentence. Go.",
    expiry: '6h', isNew: true, isTrending: false,
    items: [
      ["Claude for writing drafts at 2am.",       "Rei",  10],
      ["Perplexity for research rabbit holes.",   "Dex",   7],
      ["Midjourney v6 for mood boards.",          "Lune",  5],
      ["Cursor IDE — it's a different world.",    "Fyn",   9]
    ],
    participants: [
      { name:'Rei',  initials:'R', color:'#a969ff', thought:"Claude for writing drafts at 2am.",    status:'active' },
      { name:'Dex',  initials:'D', color:'#ff4f8b', thought:"Perplexity for research rabbit holes.", status:'active' },
      { name:'Lune', initials:'L', color:'#1bd3df', thought:"Midjourney v6 for mood boards.",        status:'away'   },
      { name:'Fyn',  initials:'F', color:'#ffda27', thought:"Cursor IDE — it's a different world.", status:'active' },
    ],
    reactions: [14, 7, 9, 22, 4]
  },
  {
    id: 8, type: 'QUESTION',
    title: 'Drop a track that saved your week.',
    people: 29, active: 11,
    energy: 'Reflective', categories: ['Music'],
    prompt: "Artist + track. No justification needed.",
    expiry: '8h', isNew: true, isTrending: false,
    items: [
      ["Sufjan Stevens — Mystery of Love.",       "Ora",  6],
      ["Frank Ocean — Ivy. Every time.",          "Kade", 9],
      ["Mitski — First Love / Late Spring.",      "Ele",  7],
      ["Tyler, the Creator — See You Again.",     "Mx",   4]
    ],
    participants: [
      { name:'Ora',  initials:'O', color:'#ff4f8b', thought:"Sufjan Stevens — Mystery of Love.", status:'active' },
      { name:'Kade', initials:'K', color:'#a969ff', thought:"Frank Ocean — Ivy. Every time.",    status:'active' },
      { name:'Ele',  initials:'E', color:'#1bd3df', thought:"Mitski — First Love / Late Spring.", status:'away'  },
      { name:'Mx',   initials:'M', color:'#92eb42', thought:"Tyler — See You Again.",            status:'active' },
    ],
    reactions: [8, 14, 5, 3, 11]
  },
  {
    id: 9, type: 'CHALLENGE',
    title: "What game is currently taking your life?",
    people: 47, active: 18,
    energy: 'Energetic', categories: ['Gaming'],
    prompt: "Name the game. Don't explain. We understand.",
    expiry: '12h', isNew: true, isTrending: false,
    items: [
      ["Hollow Knight. Send help.",              "Vin",  11],
      ["Balatro. One more run.",                 "Sai",  16],
      ["Elden Ring NG+7 and going.",             "Kos",   8],
      ["Stardew Valley. It's therapeutic.",      "Bel",   5]
    ],
    participants: [
      { name:'Vin', initials:'V', color:'#ff8128', thought:"Hollow Knight. Send help.",       status:'active' },
      { name:'Sai', initials:'S', color:'#ff4f8b', thought:"Balatro. One more run.",          status:'active' },
      { name:'Kos', initials:'K', color:'#a969ff', thought:"Elden Ring NG+7.",                status:'away'   },
      { name:'Bel', initials:'B', color:'#92eb42', thought:"Stardew Valley. Therapeutic.",    status:'active' },
    ],
    reactions: [7, 5, 19, 4, 8]
  },
  {
    id: 10, type: 'QUESTION',
    title: 'UI detail that made you smile today?',
    people: 22, active: 8,
    energy: 'Creative', categories: ['Design'],
    prompt: "A micro-interaction, a color, a font choice. Anything.",
    expiry: '4h', isNew: true, isTrending: false,
    items: [
      ["The way Linear animates list items.",     "Cass", 6],
      ["Arc's favicon when loading.",             "Pip",  4],
      ["Loom's drag-to-trim handle.",             "Roe",  5],
      ["Notion's /command palette blur.",         "Fen",  8]
    ],
    participants: [
      { name:'Cass', initials:'C', color:'#1bd3df', thought:"The way Linear animates list items.", status:'active' },
      { name:'Pip',  initials:'P', color:'#ff4f8b', thought:"Arc's favicon when loading.",         status:'active' },
      { name:'Roe',  initials:'R', color:'#ffda27', thought:"Loom's drag-to-trim handle.",          status:'away'   },
      { name:'Fen',  initials:'F', color:'#a969ff', thought:"Notion's /command palette blur.",      status:'active' },
    ],
    reactions: [9, 6, 3, 14, 2]
  },
  {
    id: 11, type: 'IDEA',
    title: 'AI vs. Human creativity — where is the line?',
    people: 38, active: 14,
    energy: 'Reflective', categories: ['AI','Ideas'],
    prompt: "One thought. No wrong answers.",
    expiry: '18h', isNew: false, isTrending: false,
    items: [
      ["AI generates. Humans curate. That's the new art.", "Ely",  9],
      ["When the creator doesn't know why it worked.",     "Nox",  6],
      ["The line doesn't matter. The feeling does.",       "Dae",  11],
      ["It's always been collaborative.",                  "Flo",  4]
    ],
    participants: [
      { name:'Ely', initials:'E', color:'#ff4f8b', thought:"AI generates. Humans curate.",       status:'active' },
      { name:'Nox', initials:'N', color:'#a969ff', thought:"When the creator doesn't know why.", status:'active' },
      { name:'Dae', initials:'D', color:'#1bd3df', thought:"The line doesn't matter.",           status:'away'   },
      { name:'Flo', initials:'F', color:'#92eb42', thought:"It's always been collaborative.",    status:'active' },
    ],
    reactions: [6, 11, 4, 18, 5]
  },
  {
    id: 12, type: 'PLAN',
    title: 'Best place to study or work remotely?',
    people: 19, active: 5,
    energy: 'Curious', categories: ['College','Travel'],
    prompt: "Name a spot that makes you 10x more productive.",
    expiry: '1d', isNew: true, isTrending: false,
    items: [
      ["Empty cafe + window seat + lo-fi.",       "Ru",  7],
      ["Library basement, no signal, no problem.", "Avi", 5],
      ["A park bench with good weather.",          "Clo", 3],
      ["Night shift at the diner nearby.",         "Tam", 4]
    ],
    participants: [
      { name:'Ru',  initials:'R', color:'#ff8128', thought:"Empty cafe + window seat + lo-fi.",        status:'active' },
      { name:'Avi', initials:'A', color:'#1bd3df', thought:"Library basement, no signal.",             status:'away'   },
      { name:'Clo', initials:'C', color:'#ff4f8b', thought:"A park bench with good weather.",          status:'active' },
      { name:'Tam', initials:'T', color:'#ffda27', thought:"Night shift at the diner nearby.",         status:'active' },
    ],
    reactions: [4, 7, 3, 5, 9]
  },
  {
    id: 13, type: 'QUESTION',
    title: 'Book that changed how you see the world?',
    people: 33, active: 10,
    energy: 'Reflective', categories: ['Books'],
    prompt: "One book. What shifted?",
    expiry: '2d', isNew: false, isTrending: false,
    items: [
      ["The Almanack of Naval Ravikant.",         "Sur",  6],
      ["Thinking, Fast and Slow.",                "Iam",  9],
      ["The Midnight Library.",                   "Wren", 4],
      ["Sapiens. Everything changed.",            "Dale", 11]
    ],
    participants: [
      { name:'Sur',  initials:'S', color:'#a969ff', thought:"The Almanack of Naval Ravikant.", status:'active' },
      { name:'Iam',  initials:'I', color:'#ff4f8b', thought:"Thinking, Fast and Slow.",        status:'away'   },
      { name:'Wren', initials:'W', color:'#1bd3df', thought:"The Midnight Library.",           status:'active' },
      { name:'Dale', initials:'D', color:'#92eb42', thought:"Sapiens. Everything changed.",    status:'active' },
    ],
    reactions: [7, 9, 4, 11, 6]
  },
  {
    id: 14, type: 'QUESTION',
    title: 'Last movie that made you feel something?',
    people: 41, active: 16,
    energy: 'Reflective', categories: ['Movies'],
    prompt: "Name it. We'll watch it.",
    expiry: '6h', isNew: false, isTrending: false,
    items: [
      ["Past Lives. I'm still not okay.",         "Ines",  13],
      ["Everything Everywhere All At Once.",      "Kal",    9],
      ["Aftersun. Watch it alone.",              "Pax",    7],
      ["The Holdovers. Underrated.",             "Mox",    5]
    ],
    participants: [
      { name:'Ines', initials:'I', color:'#ff4f8b', thought:"Past Lives. I'm still not okay.",         status:'active' },
      { name:'Kal',  initials:'K', color:'#a969ff', thought:"Everything Everywhere All At Once.",       status:'active' },
      { name:'Pax',  initials:'P', color:'#1bd3df', thought:"Aftersun. Watch it alone.",               status:'away'   },
      { name:'Mox',  initials:'M', color:'#ffda27', thought:"The Holdovers. Underrated.",              status:'active' },
    ],
    reactions: [11, 8, 4, 6, 14]
  },
  {
    id: 15, type: 'CHALLENGE',
    title: 'Workout that actually stuck — share yours.',
    people: 26, active: 9,
    energy: 'Energetic', categories: ['Fitness'],
    prompt: "No gym-bro advice. Real routines only.",
    expiry: '12h', isNew: true, isTrending: false,
    items: [
      ["20-min walk every morning before coffee.", "Gus",  8],
      ["5 sets of 5 — simple lifts, consistent.", "Zee",   6],
      ["Cycling to errands. Doubled as workout.", "Lori",  4],
      ["Stretching before bed. Changed sleep.",   "Cam",   7]
    ],
    participants: [
      { name:'Gus',  initials:'G', color:'#92eb42', thought:"20-min walk every morning.",     status:'active' },
      { name:'Zee',  initials:'Z', color:'#ff8128', thought:"5 sets of 5 — simple lifts.",    status:'active' },
      { name:'Lori', initials:'L', color:'#ff4f8b', thought:"Cycling to errands.",            status:'away'   },
      { name:'Cam',  initials:'C', color:'#1bd3df', thought:"Stretching before bed.",         status:'active' },
    ],
    reactions: [5, 9, 7, 4, 11]
  }
];

// ── MOCK NOTIFICATIONS ───────────────────────────────────────────
const BASE_NOTIFICATIONS = [
  { id: 'n1', text: "Someone built on your thought.",         sub: "In: What are you overthinking?",      vibzId: 1, read: false },
  { id: 'n2', text: "Your VIBZ reached 25 people.",          sub: "Make something in 30 minutes",         vibzId: 4, read: false },
  { id: 'n3', text: "Arun connected with you.",              sub: "Connected through: Overthinking VIBZ", vibzId: null, read: false },
  { id: 'n4', text: "A new VIBZ matches your interests.",    sub: "AI vs. Human creativity — check it out", vibzId: 11, read: true  },
  { id: 'n5', text: "Your thought got 8 echoes!",            sub: "Build something weird tonight",        vibzId: 2, read: true  },
];

// ── STATE ────────────────────────────────────────────────────────
const state = {
  vibz: [...VIBZ_DATA],
  currentRoom: null,
  activeFilter: 'All',
  searchQuery: '',
  activeView: 'discover',
  myVibzTab: 'joined',
  profileTab: 'recent',
  savedVibz: [],
  joinedVibz: [],
  createdVibz: [],
  connections: [],
  interests: [],
  profile: { name: 'Kevin', initials: 'KJ', bio: 'What is your vibe, Kevin?', email: 'kevin@vibz.app' },
  notifications: [...BASE_NOTIFICATIONS],
  reactions: {},
  miniProfileTarget: null,
  user: null,
};

// ── ENERGY FILTERS ───────────────────────────────────────────────
const FILTERS = ['All','Curious','Creative','Adventurous','Reflective','Energetic','Playful'];

// ── LOCALSTORAGE ─────────────────────────────────────────────────
function saveToStorage() {
  try {
    localStorage.setItem('vibzAppState', JSON.stringify({
      savedVibz:   state.savedVibz,
      joinedVibz:  state.joinedVibz,
      createdVibz: state.createdVibz,
      connections: state.connections,
      interests:   state.interests,
      profile:     state.profile,
      reactions:   state.reactions,
      user:        state.user,
      notifications: state.notifications.map(n => ({ id: n.id, read: n.read })),
    }));
    localStorage.setItem('vibzDark', document.body.classList.contains('dark'));
  } catch(e) { /* quota */ }
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem('vibzAppState');
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.savedVibz)   state.savedVibz   = data.savedVibz;
    if (data.joinedVibz)  state.joinedVibz  = data.joinedVibz;
    if (data.createdVibz) state.createdVibz = data.createdVibz;
    if (data.connections) state.connections = data.connections;
    if (data.interests)   state.interests   = data.interests;
    if (data.profile)     state.profile     = { ...state.profile, ...data.profile };
    if (data.reactions)   state.reactions   = data.reactions;
    if (data.user)        state.user        = data.user;
    // Merge notification read state
    if (data.notifications) {
      data.notifications.forEach(ns => {
        const n = state.notifications.find(x => x.id === ns.id);
        if (n) n.read = ns.read;
      });
    }
  } catch(e) { /* corrupt */ }
}

// ── TOAST ────────────────────────────────────────────────────────
let toastTimer = null;
function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' toast-' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ── THEME ────────────────────────────────────────────────────────
function updateThemeControl() {
  const isDark = document.body.classList.contains('dark');
  const btn = document.getElementById('theme');
  btn.querySelector('.theme-icon').textContent = isDark ? '☾' : '☀';
  btn.querySelector('.theme-label').textContent = isDark ? 'Night' : 'Day';
  btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function initTheme() {
  if (localStorage.getItem('vibzDark') === 'true') document.body.classList.add('dark');
  updateThemeControl();
}

// ── VIEW SWITCHING ───────────────────────────────────────────────
function showView(viewId) {
  const views = ['home','discover','explore','my-vibz','create'];
  views.forEach(v => {
    const el = document.getElementById('view-' + v);
    if (el) el.style.display = (v === viewId) ? '' : 'none';
  });
  state.activeView = viewId;

  // Update nav active states
  document.querySelectorAll('.nav-link[data-section]').forEach(a => {
    const isActive = a.dataset.section === viewId;
    a.classList.toggle('active', isActive);
    a.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
  document.querySelectorAll('.bottom-nav-item[data-section]').forEach(b => {
    const isActive = b.dataset.section === viewId;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-current', isActive ? 'page' : 'false');
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render content for the view
  if (viewId === 'discover') renderDiscover();
  if (viewId === 'explore')  renderExplore();
  if (viewId === 'my-vibz')  renderMyVibz();

  // Close mobile nav if open
  const mobileNav = document.getElementById('mobileNav');
  mobileNav.classList.remove('open');
  document.getElementById('hamb').setAttribute('aria-expanded', 'false');
}

// ── NAVIGATION BINDING ───────────────────────────────────────────
function bindNav() {
  // Desktop + mobile nav links
  document.querySelectorAll('.nav-link[data-section]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      showView(a.dataset.section);
    });
  });

  // Bottom nav buttons
  document.querySelectorAll('.bottom-nav-item[data-section]').forEach(b => {
    b.addEventListener('click', () => showView(b.dataset.section));
  });

  // Brand → home
  document.getElementById('homeBrand').addEventListener('click', e => {
    e.preventDefault();
    showView('home');
  });

  // Explore nav + mobile nav entries
  document.querySelectorAll('.nav-link[data-section="explore"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showView('explore');
    });
  });

  // Hero buttons
  document.getElementById('exploreBtn').addEventListener('click', () => showView('explore'));
  document.getElementById('randomBtn').addEventListener('click', () => openRoom(state.vibz[Math.floor(Math.random() * state.vibz.length)]));

  // Discover from My VIBZ empty state
  document.getElementById('discoverFromEmpty').addEventListener('click', () => showView('discover'));

  // All VIBZ button
  document.getElementById('allBtn').addEventListener('click', () => {
    state.activeFilter = 'All';
    document.querySelectorAll('.filter').forEach((f, i) => f.classList.toggle('active', i === 0));
    renderAllGrid();
    document.getElementById('allEyebrow').textContent = 'ALL VIBZ';
  });

  // Hamburger
  const hamb = document.getElementById('hamb');
  const mobileNav = document.getElementById('mobileNav');
  hamb.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    hamb.setAttribute('aria-expanded', String(open));
  });

  const mobileProfileLink = document.getElementById('mobileProfileLink');
  if (mobileProfileLink) {
    mobileProfileLink.addEventListener('click', e => {
      e.preventDefault();
      openProfile();
      mobileNav.classList.remove('open');
    });
  }

  // Profile avatar (header + bottom nav)
  const avatarBtn = document.getElementById('avatarBtn');
  if (avatarBtn) avatarBtn.addEventListener('click', openProfile);
  const profileBnavBtn = document.getElementById('profileBnavBtn');
  if (profileBnavBtn) profileBnavBtn.addEventListener('click', openProfile);

  // Theme toggle
  document.getElementById('theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateThemeControl();
    saveToStorage();
  });

  // My VIBZ tabs
  document.querySelectorAll('.my-vibz-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.my-vibz-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.myVibzTab = tab.dataset.tab;
      renderMyVibz();
    });
  });

  // Keyboard: Escape closes any open modal/panel
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    closeAllModals();
  });
}

function closeAllModals() {
  const room = document.getElementById('roomModal');
  const profile = document.getElementById('profileModal');
  const editProfile = document.getElementById('editProfileModal');
  const invite = document.getElementById('inviteModal');
  const mini = document.getElementById('miniProfileCard');
  const notif = document.getElementById('notificationsPanel');
  const backdrop = document.getElementById('notifBackdrop');

  if (room.style.display !== 'none')        closeRoom();
  if (profile.style.display !== 'none')     { profile.style.display = 'none'; document.body.style.overflow = ''; }
  if (editProfile.style.display !== 'none') { editProfile.style.display = 'none'; document.body.style.overflow = ''; }
  if (invite.style.display !== 'none')      { invite.style.display = 'none'; document.body.style.overflow = ''; }
  if (mini.style.display !== 'none')        mini.style.display = 'none';
  if (notif.style.display !== 'none')       { notif.style.display = 'none'; backdrop.style.display = 'none'; }
}

// ── ONBOARDING ───────────────────────────────────────────────────
function buildOnboarding() {
  const grid = document.getElementById('interestGrid');
  grid.innerHTML = '';
  ALL_INTERESTS.forEach(interest => {
    const btn = document.createElement('button');
    btn.className = 'interest-chip';
    btn.textContent = interest;
    btn.setAttribute('aria-pressed', state.interests.includes(interest) ? 'true' : 'false');
    btn.type = 'button';
    btn.addEventListener('click', () => {
      const idx = state.interests.indexOf(interest);
      if (idx === -1) {
        state.interests.push(interest);
        btn.classList.add('selected');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        state.interests.splice(idx, 1);
        btn.classList.remove('selected');
        btn.setAttribute('aria-pressed', 'false');
      }
      updateUserVibeRow();
    });
    if (state.interests.includes(interest)) btn.classList.add('selected');
    grid.appendChild(btn);
  });
}

function updateUserVibeRow() {
  const row = document.getElementById('userVibeRow');
  const wrap = document.getElementById('userVibeRowWrap');
  if (!row || !wrap) return;

  if (!state.interests || state.interests.length === 0) {
    wrap.style.display = 'none';
    row.innerHTML = '';
    return;
  }

  wrap.style.display = 'block';
  row.innerHTML = '';
  state.interests.forEach((item) => {
    const chip = document.createElement('span');
    chip.className = 'vibe-pill';
    chip.textContent = item;
    row.appendChild(chip);
  });
}

function showOnboarding() {
  if (!state.user) {
    openAuth('login');
    return;
  }
  buildOnboarding();
  updateUserVibeRow();
  document.getElementById('onboarding').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function bindOnboarding() {
  document.getElementById('buildVibz').addEventListener('click', () => {
    if (state.interests.length === 0) {
      state.interests = ['Ideas', 'Life'];
    }
    saveToStorage();
    document.getElementById('onboarding').style.display = 'none';
    document.body.style.overflow = '';
    showView('discover');
    renderDiscover();
    setTimeout(() => {
      const discoverSection = document.getElementById('discover');
      if (discoverSection) discoverSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({ top: 260, behavior: 'smooth' });
    }, 120);
    toast('Welcome to VIBZ ✦ Your vibe is live.');
  });
}

// ── ENERGY FILTERS ───────────────────────────────────────────────
function buildFilters() {
  const container = document.getElementById('filters');
  container.innerHTML = '';
  FILTERS.forEach((f, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter' + (!i ? ' active' : '');
    btn.textContent = f;
    btn.setAttribute('aria-pressed', !i ? 'true' : 'false');
    btn.type = 'button';
    btn.addEventListener('click', () => {
      state.activeFilter = f;
      state.searchQuery = '';
      document.getElementById('discoverSearch').value = '';
      document.getElementById('searchResults').style.display = 'none';
      document.querySelectorAll('.filter').forEach(x => {
        x.classList.remove('active');
        x.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      document.getElementById('allEyebrow').textContent = f === 'All' ? 'ALL VIBZ' : f.toUpperCase() + ' VIBZ';
      renderAllGrid();
    });
    container.appendChild(btn);
  });
}

// ── DISCOVER RENDERING ───────────────────────────────────────────
function renderDiscover() {
  renderForYou();
  renderTrending();
  renderNewVibz();
  renderAllGrid();
}

function renderExplore() {
  const grid = document.getElementById('exploreGrid');
  if (!grid) return;

  const featured = [
    { title: 'Late-night ideas', subtitle: 'Creative sparks', count: '42 rooms', glow: '#ff4f8b' },
    { title: 'Campus energy', subtitle: 'College & life', count: '18 rooms', glow: '#1bd3df' },
    { title: 'Build with friends', subtitle: 'Plans & challenges', count: '27 rooms', glow: '#a969ff' },
    { title: 'AI & design', subtitle: 'Future-focused', count: '14 rooms', glow: '#ff8128' }
  ];

  grid.innerHTML = '';
  featured.forEach((item, idx) => {
    const tile = document.createElement('article');
    tile.className = 'explore-tile';
    tile.style.borderColor = item.glow + '55';
    tile.innerHTML = `
      <span class="explore-kicker">${idx + 1 < 10 ? '0' + (idx + 1) : idx + 1}</span>
      <h3>${item.title}</h3>
      <p>${item.subtitle}</p>
      <span class="explore-count">${item.count}</span>
    `;
    tile.addEventListener('click', () => {
      state.activeFilter = 'All';
      showView('discover');
      renderDiscover();
      document.getElementById('allEyebrow').textContent = 'ALL VIBZ';
      toast(`Explore: ${item.title}`, 'success');
    });
    grid.appendChild(tile);
  });
}

function renderForYou() {
  const grid = document.getElementById('forYouGrid');
  const reason = document.getElementById('forYouReason');
  let forYouVibz;

  if (state.interests.length > 0) {
    forYouVibz = state.vibz.filter(v =>
      v.categories.some(c => state.interests.includes(c))
    ).slice(0, 3);
    const top = state.interests.slice(0, 2).join(' & ');
    reason.textContent = `Because you're into ${top}`;
    reason.style.display = '';
  } else {
    forYouVibz = state.vibz.slice(0, 3);
    reason.style.display = 'none';
  }

  grid.innerHTML = '';
  forYouVibz.forEach((v, i) => {
    grid.appendChild(createCard(v, i, true));
  });
}

function renderTrending() {
  const list = document.getElementById('trendingList');
  list.innerHTML = '';
  const trending = state.vibz.filter(v => v.isTrending).slice(0, 4);
  trending.forEach(v => {
    const item = document.createElement('div');
    item.className = 'trending-item';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Enter trending VIBZ: ${v.title}`);
    item.innerHTML = `
      <div class="trending-item-left">
        <span class="trending-type-badge">${v.type}</span>
        <h3 class="trending-title">${v.title}</h3>
      </div>
      <div class="trending-stats">
        <span class="trending-stat"><b>${v.people}</b> people</span>
        ${v.trendingStats ? `<span class="trending-stat"><b>${v.trendingStats.thoughts}</b> thoughts</span>
        <span class="trending-stat"><b>${v.trendingStats.echoes}</b> echoes</span>` : ''}
        <button class="trending-enter" aria-label="Enter VIBZ: ${v.title}">Enter VIBZ ↗</button>
      </div>
    `;
    item.querySelector('.trending-enter').addEventListener('click', e => { e.stopPropagation(); openRoom(v); });
    item.addEventListener('click', () => openRoom(v));
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openRoom(v); });
    list.appendChild(item);
  });
}

function renderNewVibz() {
  const grid = document.getElementById('newVibzGrid');
  grid.innerHTML = '';
  const newOnes = state.vibz.filter(v => v.isNew).slice(0, 3);
  newOnes.forEach((v, i) => grid.appendChild(createCard(v, i)));
}

function renderAllGrid() {
  const grid = document.getElementById('sparkGrid');
  grid.innerHTML = '';
  const filtered = state.activeFilter === 'All'
    ? state.vibz
    : state.vibz.filter(v => v.energy === state.activeFilter);
  filtered.forEach((v, i) => grid.appendChild(createCard(v, i)));
}

// ── CARD CREATION ────────────────────────────────────────────────
function createCard(v, index, forYou = false) {
  const isSaved = state.savedVibz.includes(v.id);
  const card = document.createElement('article');
  card.className = 'spark';
  card.setAttribute('role', 'article');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `${v.type}: ${v.title}`);

  card.innerHTML = `
    <div class="spark-topline">
      <span class="spark-type"><i></i>${v.type}</span>
      <span class="spark-energy">${v.energy}</span>
    </div>
    <div class="spark-main">
      <span class="spark-index">${String(index + 1).padStart(2,'0')}</span>
      <h3>${v.title}</h3>
      <p>${v.prompt}</p>
      ${forYou ? `<span class="for-you-badge" aria-label="Personalized for you">✦ Picked for you</span>` : ''}
    </div>
    <div class="spark-bottom">
      <span class="spark-people"><b>${v.people}</b> inside &nbsp; ends in ${v.expiry}</span>
      <div class="spark-card-actions">
        <button class="card-icon-btn save-btn ${isSaved ? 'saved' : ''}"
          aria-label="${isSaved ? 'Unsave' : 'Save'} this VIBZ"
          aria-pressed="${isSaved}">
          ${isSaved ? '★' : '☆'}
        </button>
        <button class="card-icon-btn share-btn" aria-label="Share this VIBZ">↗</button>
        <span class="spark-enter" role="button" tabindex="0" aria-label="Enter VIBZ room">Enter VIBZ <b>↗</b></span>
      </div>
    </div>
  `;

  // Enter (card click or Enter VIBZ button)
  const enterBtn = card.querySelector('.spark-enter');
  enterBtn.addEventListener('click', e => { e.stopPropagation(); openRoom(v); });
  enterBtn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openRoom(v); });
  card.addEventListener('click', () => openRoom(v));
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openRoom(v); });

  // Save button
  const saveBtn = card.querySelector('.save-btn');
  saveBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleSave(v.id, saveBtn);
  });

  // Share button
  const shareBtn = card.querySelector('.share-btn');
  shareBtn.addEventListener('click', e => {
    e.stopPropagation();
    shareVibz(v);
  });

  return card;
}

function toggleSave(id, btn) {
  const idx = state.savedVibz.indexOf(id);
  if (idx === -1) {
    state.savedVibz.push(id);
    if (btn) { btn.textContent = '★'; btn.classList.add('saved'); btn.setAttribute('aria-pressed','true'); btn.setAttribute('aria-label','Unsave this VIBZ'); }
    toast('VIBZ saved ✦', 'success');
  } else {
    state.savedVibz.splice(idx, 1);
    if (btn) { btn.textContent = '☆'; btn.classList.remove('saved'); btn.setAttribute('aria-pressed','false'); btn.setAttribute('aria-label','Save this VIBZ'); }
    toast('VIBZ removed from saved.');
  }
  saveToStorage();
}

function shareVibz(v) {
  const url = `vibz.app/v/${v.id}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText('https://' + url).catch(() => {});
  }
  toast('VIBZ link copied ✦', 'success');
}

// ── SEARCH ───────────────────────────────────────────────────────
function bindSearch() {
  const discoverInput = document.getElementById('discoverSearch');
  const headerInput   = document.getElementById('headerSearch');

  function doSearch(q) {
    state.searchQuery = q.toLowerCase().trim();
    const resultsSection = document.getElementById('searchResults');
    const grid = document.getElementById('searchGrid');
    const noResults = document.getElementById('noResults');
    const count = document.getElementById('searchResultCount');

    if (!state.searchQuery) {
      resultsSection.style.display = 'none';
      return;
    }

    const results = state.vibz.filter(v =>
      v.title.toLowerCase().includes(state.searchQuery) ||
      v.prompt.toLowerCase().includes(state.searchQuery) ||
      v.type.toLowerCase().includes(state.searchQuery) ||
      v.energy.toLowerCase().includes(state.searchQuery) ||
      v.categories.some(c => c.toLowerCase().includes(state.searchQuery))
    );

    grid.innerHTML = '';
    resultsSection.style.display = '';
    if (results.length === 0) {
      noResults.style.display = '';
      count.textContent = '';
    } else {
      noResults.style.display = 'none';
      count.textContent = `${results.length} found`;
      results.forEach((v, i) => grid.appendChild(createCard(v, i)));
    }

    // Make sure we're in discover view
    if (state.activeView !== 'discover') showView('discover');
  }

  discoverInput.addEventListener('input', e => doSearch(e.target.value));

  if (headerInput) {
    headerInput.addEventListener('input', e => {
      discoverInput.value = e.target.value;
      doSearch(e.target.value);
    });
    headerInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        showView('discover');
        discoverInput.focus();
      }
    });
  }
}

// ── VIBZ ROOM ────────────────────────────────────────────────────
function openRoom(v) {
  if (!v) return;
  state.currentRoom = v;

  // Track as joined
  if (!state.joinedVibz.includes(v.id)) {
    state.joinedVibz.push(v.id);
    saveToStorage();
  }

  // Label
  document.getElementById('modalLabel').textContent = `${v.type} · ${v.people} PEOPLE`;
  document.getElementById('modalTitle').textContent  = v.title;
  document.getElementById('modalPrompt').textContent = v.prompt;

  // Participants
  renderParticipants(v);

  // Room expiry badge
  document.getElementById('roomExpiry').textContent = `Expires in ${v.expiry}`;

  // Board
  renderBoard();

  // Reactions
  renderReactions(v);

  // Save button state
  const saveRoomBtn = document.getElementById('saveRoom');
  const isSaved = state.savedVibz.includes(v.id);
  saveRoomBtn.textContent = isSaved ? '★ Saved' : 'Save VIBZ';
  saveRoomBtn.classList.toggle('active-room-btn', isSaved);

  // Show modal
  const modal = document.getElementById('roomModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Focus close button
  document.getElementById('closeRoom').focus();
}

function closeRoom() {
  document.getElementById('roomModal').style.display = 'none';
  document.body.style.overflow = '';
  state.currentRoom = null;
}

function renderParticipants(v) {
  document.getElementById('participantsCount').textContent = `${v.people} people inside`;
  document.getElementById('participantsActive').textContent = `${v.active} active now`;

  const avatarsEl = document.getElementById('participantsAvatars');
  avatarsEl.innerHTML = '';
  (v.participants || []).forEach((p, i) => {
    const av = document.createElement('button');
    av.className = 'participant-avatar';
    av.style.background = p.color;
    av.textContent = p.initials;
    av.setAttribute('aria-label', `${p.name} — ${p.status === 'active' ? 'Active now' : 'Away'}`);
    av.setAttribute('role', 'listitem');
    av.title = p.name;
    if (p.status === 'active') av.classList.add('p-active');
    av.addEventListener('click', e => { e.stopPropagation(); showMiniProfile(p, av); });
    avatarsEl.appendChild(av);
    if (i < v.participants.length - 1 && i >= 4) return; // limit to 5 shown
  });

  // +N more
  if (v.people > (v.participants || []).length) {
    const more = document.createElement('span');
    more.className = 'participant-more';
    const extra = v.people - (v.participants || []).length;
    more.textContent = `+${extra}`;
    avatarsEl.appendChild(more);
  }
}

function showMiniProfile(p, anchor) {
  state.miniProfileTarget = p;
  const card = document.getElementById('miniProfileCard');
  document.getElementById('miniAvatar').textContent = p.initials;
  document.getElementById('miniAvatar').style.background = p.color;
  document.getElementById('miniName').textContent = p.name;
  document.getElementById('miniStatus').textContent = p.status === 'active' ? '🟢 Active now' : '⚪ Away';
  document.getElementById('miniThought').textContent = `"${p.thought}"`;

  const isConnected = state.connections.includes(p.name);
  const connectBtn = document.getElementById('miniConnectBtn');
  connectBtn.textContent = isConnected ? 'Connected ✦' : 'Connect';
  connectBtn.classList.toggle('connected', isConnected);

  // Position near anchor
  const rect = anchor.getBoundingClientRect();
  card.style.display = 'block';
  card.style.top  = (rect.bottom + 10) + 'px';
  card.style.left = Math.min(rect.left, window.innerWidth - 260) + 'px';
}

function bindMiniProfile() {
  document.getElementById('closeMiniProfile').addEventListener('click', () => {
    document.getElementById('miniProfileCard').style.display = 'none';
  });

  document.getElementById('miniConnectBtn').addEventListener('click', () => {
    const p = state.miniProfileTarget;
    if (!p) return;
    const idx = state.connections.indexOf(p.name);
    const btn = document.getElementById('miniConnectBtn');
    if (idx === -1) {
      state.connections.push(p.name);
      btn.textContent = 'Connected ✦';
      btn.classList.add('connected');
      updateProfileStats();
      saveToStorage();
      toast(`Connected with ${p.name} ✦`, 'success');
    } else {
      // Already connected — keep it
      toast(`Already connected with ${p.name} ✦`);
    }
  });

  // Close mini profile on outside click
  document.addEventListener('click', e => {
    const card = document.getElementById('miniProfileCard');
    if (card.style.display !== 'none' && !card.contains(e.target) && !e.target.classList.contains('participant-avatar')) {
      card.style.display = 'none';
    }
  });
}

// ── BOARD RENDERING ──────────────────────────────────────────────
function replyPosition(parent) {
  const ranges = [
    { left:[31,43], top:[10,37] },
    { left:[51,65], top:[10,37] },
    { left:[27,42], top:[50,72] },
    { left:[51,66], top:[50,72] },
  ];
  const range = ranges[parent % ranges.length];
  return {
    left: range.left[0] + Math.random() * (range.left[1] - range.left[0]),
    top:  range.top[0]  + Math.random() * (range.top[1]  - range.top[0]),
  };
}

function renderBoard() {
  const b = document.getElementById('roomBoard');
  b.innerHTML = '';
  const v = state.currentRoom;

  v.items.forEach((x, index) => {
    const e = document.createElement('div');
    e.className = 'board-item node-' + (x[3] === undefined ? index : 'reply');

    if (x[3] !== undefined) {
      e.classList.add('node-reply');
      e.dataset.parent = x[3];
      if (!x[4]) x[4] = replyPosition(x[3]);
      e.style.left = x[4].left + '%';
      e.style.top  = x[4].top  + '%';
    }

    e.innerHTML = `
      <div class="thought-copy">
        "${x[0]}"
        <strong>— ${x[1]}</strong>
      </div>
      <div class="thought-actions">
        <button class="thought-action echo-action" data-index="${index}" aria-label="Echo this thought. Current echoes: ${x[2] || 0}">
          ↗ Echo <b>${x[2] || 0}</b>
        </button>
        <button class="thought-action build-action" data-index="${index}" aria-label="Build on this thought" aria-expanded="false">
          ＋ Build on this
        </button>
        <button class="thought-action reply-action" data-index="${index}" aria-label="Reply to this thought">
          ↩ Reply
        </button>
        <button class="thought-action react-thought-action" data-index="${index}" aria-label="React to this thought" aria-expanded="false">
          React
        </button>
      </div>
      <div class="build-panel" role="region" aria-label="Build on this thought">
        <label class="sr-only" for="build-input-${index}">Your addition to this thought</label>
        <textarea id="build-input-${index}" placeholder="Build on this thought..." aria-label="Build on this thought"></textarea>
        <button class="build-submit" data-index="${index}" aria-label="Submit your addition">Add thought</button>
      </div>
      <div class="reply-panel" role="region" aria-label="Reply to this thought">
        <label class="sr-only" for="reply-input-${index}">Your reply</label>
        <textarea id="reply-input-${index}" placeholder="Reply to this thought..." aria-label="Reply to this thought"></textarea>
        <button class="reply-submit" data-index="${index}" aria-label="Submit reply">Reply</button>
      </div>
      <div class="react-panel" role="region" aria-label="Reactions">
        <button class="mini-react" data-r="✦" aria-label="Spark">✦</button>
        <button class="mini-react" data-r="❤️" aria-label="Heart">❤️</button>
        <button class="mini-react" data-r="🔥" aria-label="Fire">🔥</button>
        <button class="mini-react" data-r="💡" aria-label="Idea">💡</button>
        <button class="mini-react" data-r="👀" aria-label="Eyes">👀</button>
      </div>
    `;

    // Bring to front on click
    e.addEventListener('click', () => {
      const highest = [...b.querySelectorAll('.board-item')].reduce((m, n) => Math.max(m, Number(n.style.zIndex)||2), 2);
      e.style.zIndex = highest + 1;
      e.classList.add('is-front');
    });

    b.appendChild(e);
  });

  // Echo
  b.querySelectorAll('.echo-action').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const item = state.currentRoom.items[Number(btn.dataset.index)];
      item[2] = (item[2] || 0) + 1;
      state.currentRoom.items.push([item[0], 'You', 0, Number(btn.dataset.index), replyPosition(Number(btn.dataset.index))]);
      renderBoard();
      toast('Echoed ✦', 'success');
    });
  });

  // Build
  b.querySelectorAll('.build-action').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const panel = btn.closest('.board-item').querySelector('.build-panel');
      const isOpen = panel.classList.toggle('show');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  b.querySelectorAll('.build-submit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ta = btn.parentElement.querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      const src = Number(btn.dataset.index);
      state.currentRoom.items.push([text, 'You', 0, src, replyPosition(src)]);
      renderBoard();
      toast('Your thought joined the VIBZ ✦', 'success');
    });
  });

  // Reply
  b.querySelectorAll('.reply-action').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const panel = btn.closest('.board-item').querySelector('.reply-panel');
      panel.classList.toggle('show');
    });
  });

  b.querySelectorAll('.reply-submit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const ta = btn.parentElement.querySelector('textarea');
      const text = ta.value.trim();
      if (!text) return;
      const src = Number(btn.dataset.index);
      state.currentRoom.items.push([text, 'You', 0, src, replyPosition(src)]);
      renderBoard();
      toast('Reply added ✦', 'success');
    });
  });

  // React (thought-level)
  b.querySelectorAll('.react-thought-action').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const panel = btn.closest('.board-item').querySelector('.react-panel');
      const isOpen = panel.classList.toggle('show');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  });

  b.querySelectorAll('.mini-react').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      btn.classList.add('reacted');
      setTimeout(() => btn.classList.remove('reacted'), 600);
      toast(`Reacted with ${btn.dataset.r}`, 'success');
    });
  });
}

// ── ROOM REACTIONS (room-level) ──────────────────────────────────
function renderReactions(v) {
  const rid = v.id;
  if (!state.reactions[rid]) state.reactions[rid] = [...(v.reactions || [0,0,0,0,0])];
  for (let i = 0; i < 5; i++) {
    const el = document.getElementById('rc' + i);
    if (el) el.textContent = state.reactions[rid][i] || 0;
  }
}

function bindRoomReactions() {
  document.querySelectorAll('.reaction-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = state.currentRoom;
      if (!v) return;
      const ri = Number(btn.dataset.ri);
      if (!state.reactions[v.id]) state.reactions[v.id] = [0,0,0,0,0];
      state.reactions[v.id][ri] = (state.reactions[v.id][ri] || 0) + 1;
      const el = document.getElementById('rc' + ri);
      if (el) el.textContent = state.reactions[v.id][ri];
      btn.classList.add('reacted');
      setTimeout(() => btn.classList.remove('reacted'), 700);
      saveToStorage();
      toast(`Reacted with ${btn.dataset.reaction}`, 'success');
    });
  });
}

// ── ROOM BINDING ─────────────────────────────────────────────────
function bindRoom() {
  // Close room
  document.getElementById('closeRoom').addEventListener('click', closeRoom);

  // Send thought (main input)
  const sendBtn = document.getElementById('send');
  const replyInput = document.getElementById('replyInput');

  sendBtn.addEventListener('click', () => {
    const v = replyInput.value.trim();
    if (!v) return;
    state.currentRoom.items.push([v, 'You']);
    replyInput.value = '';
    renderBoard();
    toast('Your VIBZ joined the room ✦', 'success');
  });

  replyInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendBtn.click(); }
  });

  // Share room
  document.getElementById('shareRoom').addEventListener('click', () => {
    if (state.currentRoom) shareVibz(state.currentRoom);
  });

  // Save room
  document.getElementById('saveRoom').addEventListener('click', () => {
    if (!state.currentRoom) return;
    const btn = document.getElementById('saveRoom');
    toggleSave(state.currentRoom.id, null);
    const isSaved = state.savedVibz.includes(state.currentRoom.id);
    btn.textContent = isSaved ? '★ Saved' : 'Save VIBZ';
    btn.classList.toggle('active-room-btn', isSaved);
  });

  // Invite
  document.getElementById('inviteRoom').addEventListener('click', () => {
    if (!state.currentRoom) return;
    openInvite(state.currentRoom);
  });

  bindRoomReactions();
}

// ── INVITE MODAL ─────────────────────────────────────────────────
function openInvite(v) {
  const url = `vibz.app/v/${v.id}`;
  document.getElementById('inviteUrl').textContent = `https://${url}`;
  document.getElementById('inviteModal').style.display = 'flex';
}

function bindInvite() {
  document.getElementById('closeInvite').addEventListener('click',  () => { document.getElementById('inviteModal').style.display = 'none'; });
  document.getElementById('closeInviteBtn').addEventListener('click',() => { document.getElementById('inviteModal').style.display = 'none'; });
  document.getElementById('copyInvite').addEventListener('click', () => {
    const url = document.getElementById('inviteUrl').textContent;
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    toast('Invite link copied ✦', 'success');
  });
}

// ── PROFILE ──────────────────────────────────────────────────────
function openProfile() {
  updateProfileUI();
  renderProfileTab(state.profileTab);
  document.getElementById('profileModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.getElementById('closeProfile').focus();
}

function updateProfileUI() {
  const profileName = state.profile.name || 'Kevin';
  const profileEmail = state.profile.email || 'kevin@vibz.app';
  const initials = (profileName.split(' ').map(part => part[0]).join('').slice(0, 2) || 'K').toUpperCase();

  state.profile.initials = initials;
  document.getElementById('profileName').textContent        = profileName;
  document.getElementById('profileBio').textContent         = state.profile.bio || `What is your vibe, ${profileName}?`;
  document.getElementById('profileEmail').textContent       = profileEmail;
  document.getElementById('profileAvatarLarge').textContent = initials;
  const avatarBtn = document.getElementById('avatarBtn');
  if (avatarBtn) avatarBtn.textContent = initials;
  const bnavAvatar = document.getElementById('bnav-avatar') || document.querySelector('.bnav-avatar');
  if (bnavAvatar) bnavAvatar.textContent = initials;
  updateProfileStats();
}

function updateProfileStats() {
  document.getElementById('statJoined').textContent      = state.joinedVibz.length  + 12;
  document.getElementById('statCreated').textContent     = state.createdVibz.length  + 4;
  document.getElementById('statConnections').textContent = state.connections.length  + 27;
}

function renderProfileTab(tab) {
  state.profileTab = tab;
  document.querySelectorAll('.profile-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.ptab === tab);
    t.setAttribute('aria-selected', String(t.dataset.ptab === tab));
  });

  const content = document.getElementById('profileContent');
  content.innerHTML = '';

  let vibz = [];
  if (tab === 'recent')   vibz = state.vibz.filter(v => state.joinedVibz.includes(v.id)).slice(0, 6);
  if (tab === 'pcreated') vibz = state.vibz.filter(v => state.createdVibz.includes(v.id)).slice(0, 6);
  if (tab === 'psaved')   vibz = state.vibz.filter(v => state.savedVibz.includes(v.id)).slice(0, 6);

  if (vibz.length === 0) {
    content.innerHTML = `<div class="profile-empty">
      <p>Nothing here yet.</p>
      <button class="outline small" onclick="document.getElementById('profileModal').style.display='none'; document.body.style.overflow=''; showView('discover');">Discover VIBZ →</button>
    </div>`;
  } else {
    vibz.forEach((v, i) => {
      const mini = document.createElement('div');
      mini.className = 'profile-vibz-item';
      mini.setAttribute('role', 'button');
      mini.setAttribute('tabindex', '0');
      mini.setAttribute('aria-label', `Open VIBZ: ${v.title}`);
      mini.innerHTML = `<span class="pvi-type">${v.type}</span><span class="pvi-title">${v.title}</span><span class="pvi-people">${v.people} people</span>`;
      mini.addEventListener('click', () => openRoom(v));
      mini.addEventListener('keydown', e => { if (e.key === 'Enter') openRoom(v); });
      content.appendChild(mini);
    });
  }
}

function bindProfile() {
  document.getElementById('closeProfile').addEventListener('click', () => {
    document.getElementById('profileModal').style.display = 'none';
    document.body.style.overflow = '';
  });

  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => renderProfileTab(tab.dataset.ptab));
  });

  document.getElementById('editProfileBtn').addEventListener('click', () => {
    openEditProfile();
  });
}

function openEditProfile() {
  document.getElementById('editName').value = state.profile.name;
  document.getElementById('editBio').value  = state.profile.bio;
  buildEditInterestGrid();
  document.getElementById('editProfileModal').style.display = 'flex';
  document.getElementById('editName').focus();
}

function buildEditInterestGrid() {
  const grid = document.getElementById('editInterestGrid');
  grid.innerHTML = '';
  ALL_INTERESTS.forEach(interest => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'interest-chip small' + (state.interests.includes(interest) ? ' selected' : '');
    btn.textContent = interest;
    btn.setAttribute('aria-pressed', state.interests.includes(interest) ? 'true' : 'false');
    btn.addEventListener('click', () => {
      const idx = state.interests.indexOf(interest);
      if (idx === -1) { state.interests.push(interest); btn.classList.add('selected'); btn.setAttribute('aria-pressed','true'); }
      else            { state.interests.splice(idx,1);  btn.classList.remove('selected'); btn.setAttribute('aria-pressed','false'); }
    });
    grid.appendChild(btn);
  });
}

function bindEditProfile() {
  document.getElementById('closeEditProfile').addEventListener('click', () => {
    document.getElementById('editProfileModal').style.display = 'none';
  });

  document.getElementById('saveProfileBtn').addEventListener('click', () => {
    const name = document.getElementById('editName').value.trim() || state.profile.name;
    const bio  = document.getElementById('editBio').value.trim()  || state.profile.bio;
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2) || 'KJ';
    state.profile = { name, bio, initials };
    updateProfileUI();
    saveToStorage();
    document.getElementById('editProfileModal').style.display = 'none';
    toast('Profile updated ✦', 'success');
    // Refresh for you
    renderForYou();
  });
}

// ── MY VIBZ ──────────────────────────────────────────────────────
function renderMyVibz() {
  const grid  = document.getElementById('myVibzContent');
  const empty = document.getElementById('myVibzEmpty');
  const tab   = state.myVibzTab;

  let ids = [];
  if (tab === 'joined')  ids = state.joinedVibz;
  if (tab === 'created') ids = state.createdVibz;
  if (tab === 'saved')   ids = state.savedVibz;

  const vibz = state.vibz.filter(v => ids.includes(v.id));

  grid.innerHTML = '';

  if (vibz.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'flex';
    const sub = document.getElementById('emptySubText');
    if (tab === 'joined')  sub.textContent = 'Enter a VIBZ room to see it here.';
    if (tab === 'created') sub.textContent = 'Create your first VIBZ to see it here.';
    if (tab === 'saved')   sub.textContent = 'Save a VIBZ to see it here.';
  } else {
    grid.style.display = '';
    empty.style.display = 'none';
    vibz.forEach((v, i) => grid.appendChild(createCard(v, i)));
  }
}

// ── CREATE FORM ──────────────────────────────────────────────────
function bindCreateForm() {
  let chosen = 'Question';

  // Tag row — type selection
  document.querySelectorAll('#tagRow button').forEach((btn, i) => {
    if (i === 0) btn.classList.add('selected');
    btn.addEventListener('click', () => {
      chosen = btn.textContent;
      document.querySelectorAll('#tagRow button').forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  // Launch button
  document.getElementById('launch').addEventListener('click', () => {
    const titleEl  = document.getElementById('vibzTitle');
    const promptEl = document.getElementById('vibzPrompt');
    const catEl    = document.getElementById('vibzCategory');
    const expiryEl = document.getElementById('vibzExpiry');
    const title    = titleEl.value.trim();

    if (!title) {
      toast('Give your VIBZ a title first.', 'warn');
      titleEl.focus();
      return;
    }

    const prompt   = promptEl.value.trim() || 'What do you think?';
    const category = catEl.value;
    const expiry   = expiryEl.value;

    const energyMap = {
      Question: 'Curious', Idea: 'Creative',
      Plan: 'Adventurous', Challenge: 'Energetic'
    };

    const newVibz = {
      id: Date.now(),
      type: chosen.toUpperCase(),
      title,
      people: 1, active: 1,
      energy: energyMap[chosen] || 'Curious',
      categories: [category],
      prompt,
      expiry,
      isNew: true,
      isTrending: false,
      items: [["I just started this VIBZ.", "You", 0]],
      participants: [{ name: state.profile.name, initials: state.profile.initials, color: '#ff4f8b', thought: "I just started this VIBZ.", status: 'active' }],
      reactions: [0,0,0,0,0],
    };

    state.vibz.unshift(newVibz);
    state.createdVibz.push(newVibz.id);
    state.joinedVibz.push(newVibz.id);
    saveToStorage();

    // Reset form
    titleEl.value = '';
    promptEl.value = '';

    toast('Your VIBZ is live ✦', 'success');
    showView('discover');
    renderDiscover();
  });
}

// ── NOTIFICATIONS ────────────────────────────────────────────────
function bindNotifications() {
  const btn = document.getElementById('notifBtn');
  const panel = document.getElementById('notificationsPanel');
  const backdrop = document.getElementById('notifBackdrop');
  const closeBtn = document.getElementById('closeNotif');

  btn.addEventListener('click', () => {
    const isOpen = panel.style.display !== 'none';
    if (isOpen) {
      panel.style.display = 'none';
      backdrop.style.display = 'none';
    } else {
      renderNotifications();
      panel.style.display = 'flex';
      backdrop.style.display = 'block';
      // Mark all as read
      state.notifications.forEach(n => n.read = true);
      const badge = document.getElementById('notifBadge');
      badge.textContent = '0';
      badge.style.display = 'none';
      saveToStorage();
    }
  });

  backdrop.addEventListener('click', () => {
    panel.style.display = 'none';
    backdrop.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
    backdrop.style.display = 'none';
  });
}

function renderNotifications() {
  const list = document.getElementById('notifList');
  list.innerHTML = '';
  state.notifications.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notif-item' + (n.read ? '' : ' unread');
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <div class="notif-dot" aria-hidden="true"></div>
      <div class="notif-text">
        <p class="notif-main">${n.text}</p>
        <span class="notif-sub">${n.sub}</span>
      </div>
    `;
    if (n.vibzId) {
      item.style.cursor = 'pointer';
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `${n.text}. Click to open.`);
      item.addEventListener('click', () => {
        const v = state.vibz.find(x => x.id === n.vibzId);
        if (v) {
          document.getElementById('notificationsPanel').style.display = 'none';
          document.getElementById('notifBackdrop').style.display = 'none';
          openRoom(v);
        }
      });
    }
    list.appendChild(item);
  });
}

function updateNotifBadge() {
  const unread = state.notifications.filter(n => !n.read).length;
  const badge = document.getElementById('notifBadge');
  badge.textContent = unread;
  badge.style.display = unread ? '' : 'none';
}

function getAuthUsers() {
  try {
    return JSON.parse(localStorage.getItem('vibzUsers') || '[]');
  } catch {
    return [];
  }
}

function saveAuthUsers(users) {
  localStorage.setItem('vibzUsers', JSON.stringify(users));
}

function updateAuthButtons() {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  if (!loginBtn || !registerBtn) return;

  if (state.user) {
    const firstName = state.user.name.split(' ')[0];
    loginBtn.textContent = `Hi, ${firstName}`;
    registerBtn.textContent = 'Log out';
    registerBtn.classList.add('auth-logout');
  } else {
    loginBtn.textContent = 'Log in';
    registerBtn.textContent = 'Register';
    registerBtn.classList.remove('auth-logout');
  }
}

function setAuthTab(mode) {
  const tabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const isLogin = mode === 'login';

  tabs.forEach(tab => {
    const active = tab.dataset.authTab === mode;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });

  loginForm.style.display = isLogin ? '' : 'none';
  registerForm.style.display = isLogin ? 'none' : '';
}

function openAuth(mode = 'login', prefill = {}) {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  setAuthTab(mode);
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  if (mode === 'login') {
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    if (loginEmail) loginEmail.value = prefill.email || '';
    if (loginPassword) loginPassword.value = prefill.password || '';
    if (loginEmail) loginEmail.focus();
  } else {
    const registerName = document.getElementById('registerName');
    const registerEmail = document.getElementById('registerEmail');
    const registerPassword = document.getElementById('registerPassword');
    if (registerName) registerName.value = prefill.name || '';
    if (registerEmail) registerEmail.value = prefill.email || '';
    if (registerPassword) registerPassword.value = prefill.password || '';
    if (registerName) registerName.focus();
  }
}

function closeAuth() {
  const modal = document.getElementById('authModal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function logoutUser() {
  state.user = null;
  updateAuthButtons();
  saveToStorage();
  toast('You have been logged out.', 'success');
}

function bindAuth() {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const closeAuthBtn = document.getElementById('closeAuth');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      if (state.user) {
        openAuth('login');
        return;
      }
      openAuth('login');
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      if (state.user) {
        logoutUser();
        return;
      }
      openAuth('register');
    });
  }

  if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAuth);

  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => setAuthTab(tab.dataset.authTab));
  });

  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim().toLowerCase();
      const password = document.getElementById('loginPassword').value.trim();
      const users = getAuthUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        toast('Invalid email or password.', 'error');
        return;
      }

      state.user = { name: user.name, email: user.email };
      state.profile.name = user.name;
      state.profile.email = user.email;
      state.profile.bio = `What is your vibe, ${user.name}?`;
      const initials = user.name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || 'V';
      state.profile.initials = initials;
      updateAuthButtons();
      updateProfileUI();
      saveToStorage();
      closeAuth();
      toast(`Welcome back, ${user.name}!`, 'success');
      if (!state.interests || state.interests.length === 0) {
        setTimeout(() => {
          showOnboarding();
        }, 200);
      } else {
        setTimeout(() => {
          showView('discover');
          renderDiscover();
          const discoverSection = document.getElementById('discover');
          if (discoverSection) discoverSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('registerName').value.trim();
      const email = document.getElementById('registerEmail').value.trim().toLowerCase();
      const password = document.getElementById('registerPassword').value.trim();

      if (!name || !email || !password) {
        toast('Please fill in all fields to register.', 'error');
        return;
      }

      const users = getAuthUsers();
      if (users.some(u => u.email === email)) {
        toast('That email is already registered.', 'error');
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);
      saveAuthUsers(users);
      state.user = null;
      state.profile.name = name;
      state.profile.email = email;
      state.profile.bio = `What is your vibe, ${name}?`;
      const initials = name.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || 'V';
      state.profile.initials = initials;
      updateAuthButtons();
      updateProfileUI();
      saveToStorage();
      closeAuth();
      toast(`Account created for ${name}. Please log in with your saved details.`, 'success');
      setTimeout(() => openAuth('login', { email, password }), 150);
    });
  }
}

// ── INIT ─────────────────────────────────────────────────────────
function init() {
  loadFromStorage();
  initTheme();
  buildFilters();
  bindNav();
  bindOnboarding();
  bindRoom();
  bindRoomReactions();
  bindMiniProfile();
  bindProfile();
  bindEditProfile();
  bindInvite();
  bindSearch();
  bindCreateForm();
  bindNotifications();
  bindAuth();
  updateNotifBadge();
  updateProfileUI();
  updateAuthButtons();
  updateUserVibeRow();

  // First visit check
  if (!state.user) {
    openAuth('login');
    showView('home');
    return;
  }

  if (!state.interests || state.interests.length === 0) {
    showOnboarding();
  } else {
    showView('discover');
    renderDiscover();
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);
