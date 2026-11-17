/* ═══════════════════════════════════════════
   ИИ-МОНОЛИТ — ГЛАВНАЯ СТРАНИЦА
   Требует: GSAP, ScrollTrigger, QRCode (CDN)
═══════════════════════════════════════════ */

/* ── PRELOADER + HERO ANIMATION ──────────── */
(function () {
  gsap.registerPlugin(ScrollTrigger);

  var preloader  = document.getElementById('preloader');
  var preLogo    = preloader ? preloader.querySelector('.pre-logo') : null;
  var preBar     = document.getElementById('preBar');
  var navBrand   = document.getElementById('navBrand');
  var navLinks   = document.getElementById('navLinks');

  function playHeroAnimation() {
    var eyebrow = document.getElementById('heroEyebrow');
    var lines   = document.querySelectorAll('.hero-title .line-inner');
    var sub     = document.getElementById('heroSub');
    var actions = document.getElementById('heroActions');
    var hint    = document.getElementById('scrollHint');

    gsap.to(navBrand, { opacity: 1, duration: .6, ease: 'power2.out', delay: .1 });
    gsap.to(navLinks, { opacity: 1, duration: .6, ease: 'power2.out', delay: .2 });
    gsap.to(eyebrow,  { opacity: 1, y: 0, duration: .7, ease: 'power3.out', delay: .2 });
    gsap.to(lines,    { y: '0%',   duration: .9, ease: 'power3.out', stagger: .12, delay: .35 });
    gsap.to(sub,      { opacity: 1, y: 0, duration: .7, ease: 'power3.out', delay: .75 });
    gsap.to(actions,  { opacity: 1, y: 0, duration: .7, ease: 'power3.out', delay: .9 });
    gsap.to(hint,     { opacity: 1, duration: .8, ease: 'power2.out', delay: 1.3 });

    if (hint) {
      hint.addEventListener('click', function () {
        var next = document.querySelector('.ticker-section') || document.querySelector('.services-section');
        if (next) next.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  var alreadySeen = sessionStorage.getItem('ii-visited');
  sessionStorage.setItem('ii-visited', '1');

  if (!preloader || alreadySeen) {
    if (preloader) preloader.style.display = 'none';
    playHeroAnimation();
  } else {
    var tl = gsap.timeline({
      onComplete: function () {
        preloader.style.display = 'none';
        playHeroAnimation();
      }
    });
    tl.to(preLogo,   { opacity: 1, y: 0, duration: .5, ease: 'power2.out' }, .1)
      .to(preBar,    { width: '100%', duration: .7, ease: 'power1.inOut' }, .3)
      .to(preloader, { yPercent: -100, duration: .7, ease: 'power3.inOut' }, 1.1);
  }
})();

/* ── SCROLL REVEAL (IntersectionObserver) ── */
(function () {
  function reveal(entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }

  var opts = { threshold: 0.08 };
  var io   = new IntersectionObserver(reveal, opts);

  document.querySelectorAll('.section-h2').forEach(function (el) { io.observe(el); });

  var svcGrid = document.getElementById('servicesGrid');
  if (svcGrid) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.svc-item').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 120);
        });
        obs.unobserve(entry.target);
      });
    }, opts).observe(svcGrid);
  }

  var aboutText = document.querySelector('.about-big-text');
  if (aboutText) io.observe(aboutText);

  var factsWrap = document.querySelector('.about-facts');
  if (factsWrap) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.fact-row').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 120);
        });
        obs.unobserve(entry.target);
      });
    }, opts).observe(factsWrap);
  }

  var stepsWrap = document.getElementById('processSteps');
  if (stepsWrap) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-step]').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 100);
        });
        obs.unobserve(entry.target);
      });
    }, opts).observe(stepsWrap);
  }

  var tagsContainer = document.getElementById('expertiseTags');
  if (tagsContainer) {
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.exp-tag').forEach(function (el, i) {
          setTimeout(function () { el.classList.add('visible'); }, i * 45);
        });
        obs.unobserve(entry.target);
      });
    }, opts).observe(tagsContainer);
  }

  var ctaBlock = document.getElementById('ctaBlock');
  if (ctaBlock) io.observe(ctaBlock);
})();

/* ── QR КОД (ГЛАВНАЯ) ────────────────────── */
new QRCode(document.getElementById('qr-cta'), {
  text: 'https://max.ru/join/iTRSfKXXbztLK4la5ITZTOpujwZKqXOOBZcsEJ03ioM',
  width: 80, height: 80,
  colorDark: '#0e7fc0', colorLight: '#ffffff',
  correctLevel: QRCode.CorrectLevel.M
});
