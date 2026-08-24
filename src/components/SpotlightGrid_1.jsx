import { useEffect, useRef } from "react";

/**
 * SpotlightGrid
 * A faint dot grid that only lights up around the cursor.
 * Drop it once near the root of your page; it renders a fixed, full-screen
 * layer behind your content (pointer-events: none, so it never blocks clicks).
 *
 * Props:
 *   color   – dot color (default your accent green)
 *   gap     – spacing between dots in px (default 26)
 *   radius  – size of the lit area around the cursor in px (default 240)
 *   opacity – overall opacity of the grid (default 0.35)
 *   zIndex  – stacking context; keep it below your content (default 0)
 */
export default function SpotlightGrid({
  color = "#b6f36b",
  gap = 26,
  radius = 240,
  opacity = 0.35,
  zIndex = 0,
}) {
  const ref = useRef(null);

  useEffect(() => {
    // Respect users who prefer less motion: show nothing.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const setMask = (x, y) => {
      const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #000 0%, rgba(0,0,0,.35) 45%, transparent 72%)`;
      el.style.webkitMaskImage = mask;
      el.style.maskImage = mask;
    };

    // Start centered so it's visible before the first mouse move.
    setMask(window.innerWidth / 2, window.innerHeight * 0.25);

    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setMask(e.clientX, e.clientY));
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [radius]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex,
        pointerEvents: "none",
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1.4px)`,
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  );
}
