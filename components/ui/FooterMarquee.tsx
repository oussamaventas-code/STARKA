"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function FooterMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!track.current) return;
    const tween = gsap.to(track.current, {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: 25,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="relative flex w-full overflow-hidden border-b border-white/[0.06] py-10">
      <div ref={track} className="flex w-max whitespace-nowrap">
        {/* We use 4 elements so that translating -50% shifts exactly 2 elements, ensuring a seamless infinite loop */}
        {[...Array(4)].map((_, i) => (
          <h2
            key={i}
            className="h-display select-none pr-8 text-[clamp(4rem,15vw,15rem)] leading-none text-white/[0.04]"
          >
            STARKA MOTOR
          </h2>
        ))}
      </div>
    </div>
  );
}
