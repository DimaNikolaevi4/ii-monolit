/* ═══════════════════════════════════════════
   ИИ-МОНОЛИТ — ОБЩИЙ СКРИПТ (все страницы)
═══════════════════════════════════════════ */

/* ── ГОД ─────────────────────────────────── */
var yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── ТЕМА (светлая / тёмная) ─────────────── */
(function () {
  var html  = document.documentElement;
  var btn   = document.getElementById('themeToggle');
  var icon  = document.getElementById('themeIcon');
  var STORE = 'ii-theme';

  function apply(t) {
    if (t === 'light') {
      html.setAttribute('data-theme', 'light');
      if (icon) icon.className = 'bi bi-moon-stars';
    } else {
      html.removeAttribute('data-theme');
      if (icon) icon.className = 'bi bi-sun';
    }
  }

  apply(localStorage.getItem(STORE) || 'dark');

  if (btn) btn.addEventListener('click', function () {
    var next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    localStorage.setItem(STORE, next);
  });
})();

/* ── БУРГЕР-МЕНЮ ─────────────────────────── */
(function () {
  var burger     = document.getElementById('navBurger');
  var links      = document.getElementById('navLinks');
  var burgerIcon = document.getElementById('burgerIcon');
  if (!burger) return;

  burger.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    burgerIcon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
  });

  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burgerIcon.className = 'bi bi-list';
    }
  });
})();

/* ── ПАНЕЛЬ ДОСТУПНОСТИ ──────────────────── */
(function () {
  var body   = document.body;
  var panel  = document.getElementById('a11yPanel');
  var toggle = document.getElementById('a11yToggle');
  var btnR   = document.getElementById('a11yReset');
  var btnC   = document.getElementById('a11yClose');
  var cbLF   = document.getElementById('a11yLargeFont');
  var cbHC   = document.getElementById('a11yHighContrast');
  var cbNA   = document.getElementById('a11yNoAnimations');
  var STORE  = 'ii-a11y';

  function load() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch(e) { return {}; } }
  function save(p) { localStorage.setItem(STORE, JSON.stringify(p)); }

  function applyPrefs(p) {
    body.classList.toggle('a11y-large-font',    !!p.lf);
    body.classList.toggle('a11y-high-contrast', !!p.hc);
    body.classList.toggle('a11y-no-animations', !!p.na);
  }
  function syncCheckboxes(p) {
    if (cbLF) cbLF.checked = !!p.lf;
    if (cbHC) cbHC.checked = !!p.hc;
    if (cbNA) cbNA.checked = !!p.na;
  }

  var prefs = load();
  applyPrefs(prefs);
  syncCheckboxes(prefs);

  function openPanel()  { if (panel) { panel.classList.add('open');    if (toggle) toggle.setAttribute('aria-expanded', 'true');  } }
  function closePanel() { if (panel) { panel.classList.remove('open'); if (toggle) toggle.setAttribute('aria-expanded', 'false'); } }

  if (toggle) toggle.addEventListener('click', function () {
    panel && panel.classList.contains('open') ? closePanel() : openPanel();
  });

  document.addEventListener('click', function (e) {
    if (panel && panel.classList.contains('open') && !panel.contains(e.target) && toggle && !toggle.contains(e.target))
      closePanel();
  });

  if (cbLF) cbLF.addEventListener('change', function () { prefs.lf = cbLF.checked; applyPrefs(prefs); save(prefs); });
  if (cbHC) cbHC.addEventListener('change', function () { prefs.hc = cbHC.checked; applyPrefs(prefs); save(prefs); });
  if (cbNA) cbNA.addEventListener('change', function () { prefs.na = cbNA.checked; applyPrefs(prefs); save(prefs); });

  if (btnR) btnR.addEventListener('click', function () {
    prefs.lf = prefs.hc = prefs.na = false;
    applyPrefs(prefs); syncCheckboxes(prefs); save(prefs);
  });
  if (btnC) btnC.addEventListener('click', closePanel);
})();

/* ── НАВИГАЦИЯ: ФОН ПРИ СКРОЛЛЕ ─────────── */
(function () {
  var nav = document.getElementById('siteNav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ── КНОПКА «НАВЕРХ» ─────────────────────── */
(function () {
  var btn = document.getElementById('scroll-top');
  if (!btn) return;

  /* Начальное состояние — скрыта через inline-стиль (important чтобы перебить body * transition) */
  btn.style.setProperty('transition', 'opacity 0.35s ease, transform 0.35s ease', 'important');
  btn.style.opacity = '0';
  btn.style.transform = 'translateY(14px) scale(0.85)';
  btn.style.pointerEvents = 'none';

  var visible = false;

  function show() {
    if (visible) return;
    visible = true;
    btn.style.opacity = '1';
    btn.style.transform = 'translateY(0) scale(1)';
    btn.style.pointerEvents = 'auto';
  }

  function hide() {
    if (!visible) return;
    visible = false;
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(14px) scale(0.85)';
    btn.style.pointerEvents = 'none';
  }

  window.addEventListener('scroll', function () {
    window.scrollY > 100 ? show() : hide();
  }, { passive: true });
})();

/* ── FAQ АККОРДЕОН ───────────────────────── */
document.querySelectorAll('.faq-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
  });
});

/* ── DOC АККОРДЕОН (страница документов) ── */
document.querySelectorAll('.doc-header').forEach(function (h) {
  h.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
  });
});
