"use client";

import { useRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/cn";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  strength?: number;
  variant?: "primary" | "ghost";
};

export function MagneticButton({
  children,
  strength = 20,
  variant = "primary",
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inner = useRef<HTMLSpanElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: (x / rect.width) * strength,
      y: (y / rect.height) * strength,
      duration: 0.5,
      ease: "power3",
    });
    gsap.to(inner.current, {
      x: (x / rect.width) * (strength * 0.6),
      y: (y / rect.height) * (strength * 0.6),
      duration: 0.5,
      ease: "power3",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    gsap.to(inner.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <a
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(variant === "primary" ? "btn-primary" : "btn-ghost", className)}
      {...rest}
    >
      <span ref={inner} className="inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}
