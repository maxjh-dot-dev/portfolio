import { useEffect, useRef, useState } from "react";

/**
 * SpotlightGrid
 * A faint dot grid that only lights up around the cursor.
 * Renders ONLY on devices with a real mouse (hover + fine pointer) and when
 * the user hasn't asked for reduced motion — so it never shows up as a static
 * green cloud on phones/tablets.
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
  const [enabled, setEnabled] = useState(false);

  // Enable only for a mouse-driven, motion-OK device. Re-checks on change
  // (e.g. plugging in a mouse, or toggling reduced motion).
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(canHover.matches && !reduce.matches);
    update();
    canHover.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      canHover.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
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
  }, [enabled, radius]);

  // Nothing rendered on touch devices / reduced-motion — no static green cloud.
  if (!enabled) return null;

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
