/**
 * Living-lawn canvas. Thousands of blades that:
 *  - grow up from the soil on load (one orchestrated moment, left → right like a roll being laid),
 *  - sway in a soft breeze,
 *  - part around the visitor's pointer like a hand brushing through,
 *  - lean with scroll velocity, as if a gust follows you down the page.
 * Pauses when off-screen. Draws one still frame when motion is reduced.
 */
type Blade = { x: number; h: number; w: number; p: number; d: number; c: string; bend: number; delay: number };

// [hue, saturation, base lightness] — deep, photographic turf greens; front blades catch more light.
const PALETTE = [
  [136, 42, 14], [130, 44, 17], [124, 42, 20], [118, 44, 23], [110, 46, 25], [100, 48, 27],
];

export function mountGrass(canvas: HTMLCanvasElement, opts: { still: boolean }) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { setGust: (_: number) => {} };
  const host = canvas.parentElement as HTMLElement;
  let W = 0, H = 0, blades: Blade[] = [];
  let px = -9999, py = -9999, inside = false;
  let gust = 0, gustTarget = 0;
  let start = performance.now();
  let raf = 0, running = false;

  const build = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const density = W < 700 ? 0.75 : 1.35;
    const n = Math.floor(W * density);
    blades = [];
    for (let i = 0; i < n; i++) {
      const d = Math.random(); // depth: 0 back → 1 front
      const [hh, ss, ll] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const light = ll + d * 16 + (Math.random() < 0.025 ? 24 : 0);
      const x = Math.random() * W;
      blades.push({
        x, h: H * (0.35 + d * 0.6) * (0.75 + Math.random() * 0.35), w: 1.2 + d * 2.8,
        p: Math.random() * Math.PI * 2, d,
        c: `hsl(${hh - (Math.random() < 0.02 ? 50 : 0)} ${ss + d * 10}% ${Math.min(light, 52)}%)`,
        bend: 0, delay: (x / W) * 0.55 + Math.random() * 0.2,
      });
    }
    blades.sort((a, b) => a.d - b.d);
  };

  const draw = (now: number) => {
    const t = opts.still ? 0 : (now - start) / 1000;
    ctx.clearRect(0, 0, W, H);
    gust += (gustTarget - gust) * 0.06;
    gustTarget *= 0.92;
    for (const b of blades) {
      const grow = opts.still ? 1 : easeOut(clamp((t - b.delay) / 1.1, 0, 1));
      if (grow <= 0) continue;
      const h = b.h * grow;
      const wind = Math.sin(t * 1.25 + b.x * 0.011 + b.p) * (3 + b.d * 9) + Math.sin(t * 0.43 + b.x * 0.003) * 6;
      let push = 0;
      if (inside) {
        const dx = b.x - px;
        const tipY = H - h;
        const ad = Math.abs(dx);
        const reach = 90 + b.d * 40;
        if (ad < reach && py > tipY - 60) push = (1 - ad / reach) * Math.sign(dx || 1) * (34 + b.d * 30);
      }
      b.bend += (push - b.bend) * 0.12;
      const lean = wind + b.bend + gust * (0.4 + b.d);
      const tipX = b.x + lean, tipY = H - h;
      const cx = b.x + lean * 0.32, cy = H - h * 0.55;
      ctx.fillStyle = b.c;
      ctx.beginPath();
      ctx.moveTo(b.x - b.w, H);
      ctx.quadraticCurveTo(cx, cy, tipX, tipY);
      ctx.quadraticCurveTo(cx + b.w * 0.5, cy, b.x + b.w, H);
      ctx.fill();
    }
  };

  const loop = (now: number) => { draw(now); raf = requestAnimationFrame(loop); };
  const play = () => { if (!running && !opts.still) { running = true; raf = requestAnimationFrame(loop); } };
  const pause = () => { running = false; cancelAnimationFrame(raf); };

  build();
  if (opts.still) draw(0);

  new IntersectionObserver(([e]) => (e.isIntersecting ? play() : pause()), { rootMargin: "100px" }).observe(canvas);
  let rt = 0;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = window.setTimeout(() => { build(); if (opts.still) draw(0); }, 150); });

  host.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    px = e.clientX - r.left; py = e.clientY - r.top; inside = true;
  }, { passive: true });
  host.addEventListener("pointerleave", () => { inside = false; });

  return {
    /** Feed scroll velocity in; blades lean with it. */
    setGust: (v: number) => { gustTarget = clamp(v * 0.9, -28, 28); },
  };
}

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);
