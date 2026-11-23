/** Deterministic blade generator so server-rendered SVG grass is identical on every build. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

export type Blade = { d: string; fill: string };

/** Returns SVG paths for a strip of grass blades, viewBox 0 0 1000 60. */
export function bladeStrip(seed = 7, count = 220, tones: string[] = ["#2c6e3f", "#3b8048", "#235a33", "#4a8f3f", "#b8d86b"]): Blade[] {
  const r = rng(seed);
  const out: Blade[] = [];
  for (let i = 0; i < count; i++) {
    const x = (i / count) * 1000 + r() * 6 - 3;
    const h = 18 + r() * 40;
    const w = 2 + r() * 3.5;
    const lean = (r() - 0.5) * 22;
    const tipX = x + lean;
    const tipY = 60 - h;
    const cx = x + lean * 0.35;
    const cy = 60 - h * 0.55;
    const d = `M${(x - w).toFixed(0)} 60 Q${cx.toFixed(0)} ${cy.toFixed(0)} ${tipX.toFixed(0)} ${tipY.toFixed(0)} Q${(cx + w * 0.4).toFixed(0)} ${cy.toFixed(0)} ${(x + w).toFixed(0)} 60Z`;
    const t = r();
    const fill = t > 0.94 ? tones[4] : tones[Math.floor(t * 4) % 4];
    out.push({ d, fill });
  }
  return out;
}
