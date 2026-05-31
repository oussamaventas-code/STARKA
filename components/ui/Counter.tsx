"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {
  to: string;
  duration?: number;
  className?: string;
};

export function Counter({ to, duration = 2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const isDecimal = /^\d+[.,]\d$/.test(to);
    const numeric = isDecimal
      ? parseFloat(to.replace(",", "."))
      : parseInt(to.replace(/\D/g, ""), 10);
    if (Number.isNaN(numeric)) {
      if (ref.current) ref.current.textContent = to;
      return;
    }

    const animate = () => {
      const obj = { v: 0 };
      return gsap.to(obj, {
        v: numeric,
        duration,
        ease: "power3.out",
        onUpdate: () => {
          if (!ref.current) return;
          ref.current.textContent = isDecimal
            ? obj.v.toFixed(1)
            : Math.floor(obj.v).toLocaleString("es-ES");
        },
      });
    };

    if (!("IntersectionObserver" in window)) {
      const tween = animate();
      return () => tween.kill();
    }

    let tween: gsap.core.Tween | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || tween) return;
        tween = animate();
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
