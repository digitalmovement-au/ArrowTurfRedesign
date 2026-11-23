import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { mountGrass } from "./grass";

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
const motion = document.documentElement.classList.contains("js-motion");
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ───────────── Smooth scroll ───────────── */
let lenis: Lenis | null = null;
if (motion) {
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollToEl = (el: Element, offset = -90) => {
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset, duration: 1.2 });
  else el.scrollIntoView({ behavior: "auto", block: "start" });
};

/* ───────────── Living lawn canvases ───────────── */
const gusts = $$<HTMLCanvasElement>("[data-grass]").map((c) => mountGrass(c, { still: !motion }));
if (lenis && gusts.length) lenis.on("scroll", (l: Lenis) => gusts.forEach((g) => g.setGust(l.velocity)));

/* ───────────── Header ───────────── */
const header = $("[data-header]");
const burger = $<HTMLButtonElement>("[data-burger]");
const mnav = $("[data-mnav]");
let lastY = 0;
const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle("is-solid", y > 40 || !!mnav?.hidden === false);
  if (!mnav || mnav.hidden) header?.classList.toggle("is-hidden", y > 500 && y > lastY + 4);
  if (y < lastY - 4) header?.classList.remove("is-hidden");
  lastY = y;
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
burger?.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") === "true";
  burger.setAttribute("aria-expanded", String(!open));
  if (mnav) mnav.hidden = open;
  header?.classList.add("is-solid");
  document.body.style.overflow = open ? "" : "hidden";
  open ? lenis?.start() : lenis?.stop();
});
mnav?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) { burger?.click(); }
});

/* ───────────── "#quote" goes to the nearest quote form ───────────── */
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href="#quote"]');
  if (!a) return;
  const targets = [$("#quote"), $("#quote-bottom")].filter(Boolean) as HTMLElement[];
  if (!targets.length) return;
  e.preventDefault();
  const y = window.scrollY;
  const best = targets.sort((p, q) => Math.abs(p.offsetTop - y) - Math.abs(q.offsetTop - y))[0];
  const form = $("form", best) ?? best;
  scrollToEl(form, -110);
  setTimeout(() => $<HTMLInputElement>("input:not([type=hidden])", form)?.focus({ preventScroll: true }), 900);
});

/* ───────────── Mobile bar hides when a form is on screen ───────────── */
const mbar = $("[data-mbar]");
if (mbar) {
  const seen = new Set<Element>();
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
    mbar.classList.toggle("is-away", seen.size > 0);
  }, { threshold: 0.05 });
  $$("#quote, #quote-bottom").forEach((f) => io.observe(f));
}

/* ───────────── Motion: turf-roll reveals, growing edges, parallax, journey ───────────── */
if (motion) {
  // Turf-roll image reveal — the site's signature move.
  $$("[data-roll]").forEach((el) => {
    const media = el.querySelector("img, video");
    const cyl = el.querySelector<HTMLElement>(".roll__cyl");
    if (!media || !cyl) return;
    const tl = gsap.timeline({ paused: true, onComplete: () => el.classList.add("is-laid") });
    tl.fromTo(media, { clipPath: "inset(0 100% 0 0 round 22px)" }, { clipPath: "inset(0 0% 0 0 round 22px)", duration: 1.25, ease: "power3.inOut" }, 0)
      .fromTo(cyl, { xPercent: 0, left: 0, scaleY: 1, opacity: 1 }, { left: "100%", xPercent: -100, scaleY: 0.82, duration: 1.25, ease: "power3.inOut" }, 0)
      .to(cyl, { opacity: 0, duration: 0.25 }, 1.05);
    ScrollTrigger.create({ trigger: el, start: "top 82%", once: true, onEnter: () => tl.play() });
  });

  // Blades grow up out of section edges as you scroll to them.
  $$("[data-grass-edge]").forEach((edge) => {
    const paths = $$("path", edge);
    gsap.fromTo(paths, { scaleY: 0 }, {
      scaleY: 1, ease: "none",
      stagger: { each: 0.0025, from: "random" },
      scrollTrigger: { trigger: edge, start: "top 98%", end: "top 55%", scrub: 0.6 },
    });
  });

  // Project wall: columns drift at different speeds as the section passes.
  $$("[data-pw-window]").forEach((win) => {
    $$("[data-pw-col]", win).forEach((col) => {
      const sp = Number(col.dataset.speed || 10);
      gsap.fromTo(col, { yPercent: sp }, {
        yPercent: -sp * 1.6, ease: "none",
        scrollTrigger: { trigger: win, start: "top bottom", end: "bottom top", scrub: 0.5 },
      });
    });
  });

  // Gentle hero photo drift.
  $$("[data-hero-img]").forEach((im) => {
    gsap.to(im, { yPercent: 10, ease: "none", scrollTrigger: { trigger: im.closest("section"), start: "top top", end: "bottom top", scrub: true } });
  });

  // Count up the "45+ years".
  $$("[data-count]").forEach((el) => {
    const n = Number(el.dataset.count);
    const label = el.textContent ?? "";
    const o = { v: 0 };
    ScrollTrigger.create({
      trigger: el, start: "top 90%", once: true,
      onEnter: () => gsap.to(o, { v: n, duration: 1.6, ease: "power2.out", onUpdate: () => { el.textContent = label.replace(String(n), String(Math.round(o.v))); }, onComplete: () => { el.textContent = label; } }),
    });
  });

  // Farm-to-lawn journey: pin and drive the truck.
  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px)", () => {
    $$("[data-journey]").forEach((sec) => {
      const pin = $("[data-journey-pin]", sec)!;
      const track = $("[data-journey-track]", sec)!;
      const fill = $("[data-journey-fill]", sec)!;
      const truck = $("[data-journey-truck]", sec)!;
      const road = truck.parentElement!;
      const dist = () => Math.max(0, track.scrollWidth - pin.clientWidth);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sec, start: "top top", end: () => `+=${dist() + window.innerHeight * 0.6}`, pin, scrub: 0.8, invalidateOnRefresh: true },
      });
      tl.to(track, { x: () => -dist(), ease: "none" }, 0)
        .to(fill, { scaleX: 1, ease: "none" }, 0)
        .to(truck, { x: () => road.clientWidth - truck.clientWidth, ease: "none" }, 0);
    });
  });
}

/* ───────────── Magnetic buttons ───────────── */
if (motion && finePointer) {
  $$("[data-magnetic]").forEach((b) => {
    const xTo = gsap.quickTo(b, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(b, "y", { duration: 0.5, ease: "power3" });
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width - 0.5) * 10);
      yTo(((e.clientY - r.top) / r.height - 0.5) * 8);
    });
    b.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });
}

/* ───────────── Variety row: open the hovered / focused panel ───────────── */
$$("[data-variety-row]").forEach((row) => {
  const cards = $$(".vc__card", row);
  const open = (c: HTMLElement) => cards.forEach((x) => x.classList.toggle("is-open", x === c));
  cards.forEach((c) => {
    c.addEventListener("mouseenter", () => open(c));
    c.addEventListener("focusin", () => open(c));
  });
});

/* ───────────── Gallery: load more + lightbox ───────────── */
$$("[data-gallery]").forEach((g) => {
  const more = $<HTMLButtonElement>("[data-gal-more]", g);
  more?.addEventListener("click", () => {
    $$(".is-more", g).forEach((li) => { li.hidden = false; });
    more.parentElement?.remove();
    ScrollTrigger.refresh();
  });
  const dlg = $<HTMLDialogElement>("[data-lightbox]", g)!;
  const im = $<HTMLImageElement>("[data-lb-img]", g)!;
  const btns = $$<HTMLButtonElement>(".gal__btn", g);
  let i = 0;
  const show = (n: number) => {
    const vis = btns.filter((b) => !b.closest("li")!.hidden);
    i = (n + vis.length) % vis.length;
    im.src = vis[i].dataset.full!; im.alt = vis[i].dataset.alt ?? "";
  };
  btns.forEach((b) => b.addEventListener("click", () => {
    const vis = btns.filter((x) => !x.closest("li")!.hidden);
    show(vis.indexOf(b)); dlg.showModal(); lenis?.stop();
  }));
  dlg.addEventListener("close", () => lenis?.start());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  $("[data-lb-prev]", g)?.addEventListener("click", () => show(i - 1));
  $("[data-lb-next]", g)?.addEventListener("click", () => show(i + 1));
  dlg.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(i - 1); if (e.key === "ArrowRight") show(i + 1); });
});

/* ───────────── FAQ ───────────── */
$$("[data-faq]").forEach((f) => {
  $("[data-faq-all]", f)?.addEventListener("click", (e) => {
    $$("[data-more]", f).forEach((d) => { d.hidden = false; });
    (e.currentTarget as HTMLElement).remove();
    ScrollTrigger.refresh();
  });
});

/* ───────────── Suburb checker ───────────── */
$$("[data-areas]").forEach((root) => {
  const input = $<HTMLInputElement>("[data-area-input]", root)!;
  const list = $("[data-area-list]", root)!;
  const out = $("[data-area-result]", root)!;
  const miss = $<HTMLTemplateElement>("[data-area-miss]", root)!;
  const items = $$("li", list);
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let hits = 0;
    items.forEach((li) => { const hit = !!q && li.dataset.name!.includes(q); li.classList.toggle("hit", hit); if (hit) hits++; });
    list.classList.toggle("filtering", !!q);
    if (!q) out.textContent = "";
    else if (hits) out.textContent = hits === 1 ? "Yes — we service that area." : `Yes — ${hits} matching areas.`;
    else out.innerHTML = miss.innerHTML;
  });
});

/* ───────────── Lawn calculator ───────────── */
$$("[data-calc]").forEach((root) => {
  const rows = $("[data-calc-rows]", root)!;
  const allow = $<HTMLInputElement>("[data-calc-allow]", root)!;
  const variety = $<HTMLSelectElement>("[data-calc-variety]", root)!;
  const areaEl = $("[data-calc-area]", root)!;
  const weightEl = $("[data-calc-weight]", root)!;
  const send = $<HTMLButtonElement>("[data-calc-send]", root)!;
  let total = 0, raw = 0;
  const fmt = (n: number) => new Intl.NumberFormat("en-AU", { maximumFractionDigits: 1 }).format(n);
  const calc = () => {
    raw = $$("[data-calc-row]", rows).reduce((s, r) => {
      const l = parseFloat(($<HTMLInputElement>("[data-l]", r)!).value) || 0;
      const w = parseFloat(($<HTMLInputElement>("[data-w]", r)!).value) || 0;
      return s + Math.max(0, l) * Math.max(0, w);
    }, 0);
    total = Math.ceil(raw * (allow.checked ? 1.05 : 1));
    areaEl.textContent = String(total);
    weightEl.textContent = total ? `${fmt((total * 15) / 1000)}–${fmt((total * 20) / 1000)} t` : "—";
    send.disabled = total <= 0;
  };
  root.addEventListener("input", calc);
  $("[data-calc-add]", root)!.addEventListener("click", () => {
    const first = $("[data-calc-row]", rows)!;
    const n = $$("[data-calc-row]", rows).length + 1;
    const c = first.cloneNode(true) as HTMLElement;
    $$<HTMLInputElement>("input", c).forEach((i) => (i.value = ""));
    $(".calc__label", c)!.textContent = `Area ${n}`;
    rows.appendChild(c);
    $<HTMLInputElement>("input", c)!.focus();
  });
  send.addEventListener("click", () => {
    const targets = [$("#quote"), $("#quote-bottom")].filter(Boolean) as HTMLElement[];
    const y = window.scrollY;
    const best = targets.sort((p, q) => Math.abs(p.offsetTop - y) - Math.abs(q.offsetTop - y))[0];
    const form = best && $<HTMLFormElement>("form", best);
    if (!form) return;
    const ta = $<HTMLTextAreaElement>("[data-project]", form);
    if (ta) ta.value = `Approx. ${total} m² (measured ${fmt(raw)} m²${allow.checked ? " + 5% for trimming" : ""}).${ta.value ? "\n" + ta.value : ""}`;
    const sel = $<HTMLSelectElement>("select[name=variety]", form);
    if (sel && variety.value) sel.value = variety.value;
    scrollToEl(form, -110);
    setTimeout(() => $<HTMLInputElement>("input[name=name]", form)?.focus({ preventScroll: true }), 900);
  });
});

/* ───────────── Variety matcher ───────────── */
$$("[data-compare]").forEach((root) => {
  const needs = $$<HTMLInputElement>("[data-need]", root);
  const items = $$("[data-variety]", root);
  const run = () => {
    const keys = needs.filter((n) => n.checked).map((n) => n.value);
    const scored = items.map((it) => {
      const r = JSON.parse(it.dataset.ratings!) as Record<string, number>;
      const s = keys.length ? keys.reduce((a, k) => a + (r[k] ?? 0), 0) / (keys.length * 5) : 0;
      return { it, s };
    });
    const best = Math.max(...scored.map((x) => x.s));
    scored.sort((a, b) => b.s - a.s).forEach(({ it, s }, idx) => {
      it.style.order = keys.length ? String(idx) : "";
      ($("[data-bar]", it) as HTMLElement).style.width = `${Math.round(s * 100)}%`;
      $("[data-score]", it)!.textContent = keys.length ? `${Math.round(s * 100)}%` : "—";
      const isBest = keys.length > 0 && s === best;
      it.classList.toggle("is-best", isBest);
      ($("[data-badge]", it) as HTMLElement).hidden = !isBest;
    });
  };
  needs.forEach((n) => n.addEventListener("change", run));
});

/* ───────────── Quote forms ───────────── */
$$<HTMLFormElement>("[data-quote-form]").forEach((form) => {
  const status = $(".qf__status", form)!;
  const setErr = (input: HTMLInputElement, msg: string) => {
    input.setAttribute("aria-invalid", msg ? "true" : "false");
    const e = input.parentElement?.querySelector(".err"); if (e) e.textContent = msg;
  };
  $$<HTMLInputElement>("input[required]", form).forEach((i) => i.addEventListener("input", () => setErr(i, "")));
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let ok = true;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const phone = form.elements.namedItem("phone") as HTMLInputElement;
    if (!name.value.trim()) { setErr(name, "Enter your name"); ok = false; }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) { setErr(email, "Enter an email we can reply to"); ok = false; }
    if (phone.value.replace(/\D/g, "").length < 8) { setErr(phone, "Enter a phone number"); ok = false; }
    if (!ok) { $<HTMLInputElement>("[aria-invalid=true]", form)?.focus(); return; }
    const btn = $<HTMLButtonElement>("button[type=submit]", form)!;
    btn.disabled = true; btn.textContent = "Sending…";
    status.className = "qf__status"; status.textContent = "";
    const data = new FormData(form);
    const endpoint = form.dataset.endpoint;
    try {
      const res = endpoint
        ? await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } })
        : await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.classList.add("ok");
      status.textContent = "Quote request sent. We’ll be in touch shortly — usually the same day.";
      btn.textContent = "Sent";
      (window as unknown as { dataLayer?: object[] }).dataLayer?.push({ event: "quote_submitted" });
    } catch {
      status.classList.add("bad");
      status.textContent = "Your request didn’t send. Check your connection and try again, or call 0490 779 707.";
      btn.disabled = false; btn.textContent = "Get my free quote";
    }
  });
});

/* Refresh pinned layouts once fonts and images settle. */
window.addEventListener("load", () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());
