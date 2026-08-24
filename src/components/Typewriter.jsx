import { useEffect, useRef, useState } from "react";

// Inject the caret blink keyframes once (SSR-safe, no duplicates).
if (typeof document !== "undefined" && !document.getElementById("tw-caret-style")) {
  const s = document.createElement("style");
  s.id = "tw-caret-style";
  s.textContent =
    "@keyframes tw-blink{50%{opacity:0}} .tw-caret{animation:tw-blink 1s step-end infinite}";
  document.head.appendChild(s);
}

/**
 * Typewriter
 * Types and deletes through a list of phrases with a blinking caret.
 * If the user prefers reduced motion, it just shows the first phrase statically.
 *
 * Props:
 *   phrases     – array of strings to cycle through
 *   typeSpeed   – ms per typed character (default 80)
 *   deleteSpeed – ms per deleted character (default 45)
 *   holdTime    – ms to pause on a finished phrase (default 1500)
 *   startDelay  – ms before it starts typing (default 600)
 *   className   – applied to the text span (color it via your own styles)
 *   caretColor  – caret color (default your accent green)
 */
export default function Typewriter({
  phrases = [],
  typeSpeed = 60,
  deleteSpeed = 45,
  holdTime = 1500,
  startDelay = 600,
  className,
  caretColor = "#6ba4dc",
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const reduced = useRef(false);

  // Detect reduced-motion preference on mount.
  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current) {
      setText(phrases[0] || "");
    } else {
      const t = setTimeout(() => setStarted(true), startDelay);
      return () => clearTimeout(t);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (reduced.current || !started || phrases.length === 0) return;

    const word = phrases[index % phrases.length];

    // Reached the full word -> pause, then start deleting.
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(t);
    }

    // Finished deleting -> advance to the next phrase.
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting ? word.slice(0, prev.length - 1) : word.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, started, phrases, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {text}
      <span
        className="tw-caret"
        aria-hidden="true"
        style={{ color: caretColor, fontWeight: 400, marginLeft: 1 }}
      >
        |
      </span>
    </span>
  );
}
