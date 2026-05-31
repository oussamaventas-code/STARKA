"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(finePointer);
  }, []);

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;

    document.body.classList.add("has-cursor");

    const xTo = gsap.quickTo(dot.current, "x", { duration: 0.18, ease: "power3" });
    const yTo = gsap.quickTo(dot.current, "y", { duration: 0.18, ease: "power3" });
    const rxTo = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const ryTo = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      rxTo(e.clientX);
      ryTo(e.clientY);
    };

    const onEnter = () => {
      gsap.to(ring.current, { scale: 2, duration: 0.4, ease: "power3" });
      gsap.to(dot.current, { scale: 0.4, duration: 0.4, ease: "power3" });
    };
    const onLeave = () => {
      gsap.to(ring.current, { scale: 1, duration: 0.4, ease: "power3" });
      gsap.to(dot.current, { scale: 1, duration: 0.4, ease: "power3" });
    };

    window.addEventListener("mousemove", onMove);
    const targets = document.querySelectorAll(
      "a, button, [data-cursor='hover']"
    );
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
      document.body.classList.remove("has-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-8 w-8 rounded-full border border-white/60" />
      </div>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-bosch-glow shadow-glow" />
      </div>
    </>
  );
}
