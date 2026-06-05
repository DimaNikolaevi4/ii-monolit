(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const mouse = { x: -9999, y: -9999 };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  const trail = [];
  const TRAIL_MAX = 9;
  window.addEventListener('mousemove', e => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > TRAIL_MAX) trail.shift();
  }, { passive: true });

  const LINK_DIST  = 180;
  const MOUSE_DIST = 220;
  const COUNT      = 140;

  class Particle {
    constructor() { this.init(true); }
    init(randomY = false) {
      this.x  = Math.random() * W;
      this.y  = randomY ? Math.random() * H : (Math.random() < .5 ? -4 : H + 4);
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.r  = Math.random() * 1.6 + .4;
      this.base = Math.random() * .55 + .2;
      this.op = this.base;
      this.pulse = Math.random() * Math.PI * 2;
      this.layer = Math.random() * 0.8 + 0.2;
      this.ry = this.y;
    }
    update(t) {
      this.pulse += .018;
      this.op = this.base + Math.sin(this.pulse) * .15;
      const mx = this.x - mouse.x, my = this.y - mouse.y;
      const md = Math.sqrt(mx*mx + my*my);
      if (md < 120) {
        const force = (120 - md) / 120 * .4;
        this.vx += (mx / md) * force;
        this.vy += (my / md) * force;
      }
      this.vx *= .985;
      this.vy *= .985;
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -10) this.x = W + 10;
      if (this.x > W+10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H+10) this.y = -10;
      this.ry = this.y - scrollY * this.layer * 0.12;
    }
    draw() {
      const rx = this.x, ry = this.ry;
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const c1  = isLight ? `rgba(14,127,192,${this.op})`       : `rgba(56,189,248,${this.op})`;
      const c2  = isLight ? `rgba(14,127,192,${this.op * .25})` : `rgba(14,127,192,${this.op * .35})`;
      const dot = isLight ? `rgba(14,100,168,${this.op * .7})`  : `rgba(180,230,255,${this.op})`;
      const g = ctx.createRadialGradient(rx, ry, 0, rx, ry, this.r * 4);
      g.addColorStop(0,  c1);
      g.addColorStop(.5, c2);
      g.addColorStop(1,  `rgba(14,127,192,0)`);
      ctx.beginPath();
      ctx.arc(rx, ry, this.r * 4, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(rx, ry, this.r, 0, Math.PI * 2);
      ctx.fillStyle = dot;
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function drawLine(x1, y1, x2, y2, alpha, width) {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const lc = isLight ? `rgba(14,127,192,${alpha})` : `rgba(56,189,248,${alpha})`;
    const lm = isLight ? `rgba(10,90,148,${alpha * .8})` : `rgba(14,127,192,${alpha * .8})`;
    const g = ctx.createLinearGradient(x1, y1, x2, y2);
    g.addColorStop(0,  lc);
    g.addColorStop(.5, lm);
    g.addColorStop(1,  lc);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = g;
    ctx.lineWidth = width || 1;
    ctx.stroke();
  }

  let frame = 0;
  function animate() {
    frame++;
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < trail.length; i++) {
      const t = trail[i];
      const age = i / trail.length;
      const r   = 1.2 * age;
      const op  = age * 0.2;
      const isLightT = document.documentElement.getAttribute('data-theme') === 'light';
      const tc1 = isLightT ? `rgba(14,127,192,${op})` : `rgba(56,189,248,${op})`;
      const tc2 = isLightT ? `rgba(14,100,168,${op * 1.2})` : `rgba(180,230,255,${op * 1.5})`;
      const g   = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, r * 5);
      g.addColorStop(0, tc1);
      g.addColorStop(1, `rgba(14,127,192,0)`);
      ctx.beginPath();
      ctx.arc(t.x, t.y, r * 5, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(t.x, t.y, Math.max(r * .5, .5), 0, Math.PI * 2);
      ctx.fillStyle = tc2;
      ctx.fill();
    }
    particles.forEach(p => { p.update(frame); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x  - particles[j].x;
        const dy = particles[i].ry - particles[j].ry;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < LINK_DIST) {
          const t = 1 - dist / LINK_DIST;
          drawLine(particles[i].x, particles[i].ry,
                   particles[j].x, particles[j].ry,
                   t * t * .55, t * 1.2);
        }
      }
    }
    if (mouse.x > 0) {
      particles.forEach(p => {
        const dx = p.x - mouse.x, dy = p.ry - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < MOUSE_DIST) {
          const t = 1 - dist / MOUSE_DIST;
          drawLine(p.x, p.ry, mouse.x, mouse.y, t * t * .85, t * 2);
        }
      });
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
