"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

type Props = {
  items: string[];
  speed?: number;
  className?: string;
};

export function ScrollMarquee({ items, speed = 1, className }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track.current) return;
    const tween = gsap.to(track.current, {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: 30 / speed,
    });

    let lastScroll = 0;
    let direction = 1;

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        if (self.direction !== direction) {
          direction = self.direction;
          gsap.to(tween, { timeScale: direction * 1.2, duration: 0.6 });
          gsap.to(tween, { timeScale: direction, duration: 1, delay: 0.6 });
        }
        lastScroll = self.scroll();
      },
    });

    return () => {
      tween.kill();
      st.kill();
    };
  }, [speed]);

  const loop = [...items, ...items];

  return (
    <div ref={wrap} className={`marquee overflow-hidden ${className ?? ""}`}>
      <div ref={track} className="flex w-max gap-12 whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-[clamp(2.5rem,7vw,7rem)] leading-tight tracking-normal text-white/90"
          >
            {t}
            <span className="inline-block h-3 w-3 rounded-full bg-bosch" />
          </span>
        ))}
      </div>
    </div>
  );
}
