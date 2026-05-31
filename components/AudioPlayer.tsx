"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const togglePlay = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[95] mix-blend-difference md:bottom-10 md:left-10">
      <button
        onClick={togglePlay}
        className="group flex h-10 items-center gap-3 rounded-full border border-white/20 bg-transparent px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-white/50"
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isPlaying ? (
            <div className="flex h-3 items-end gap-[1px]">
              <div className="h-[40%] w-[2px] animate-[bounce_1s_infinite_alternate] bg-white" />
              <div className="h-[80%] w-[2px] animate-[bounce_0.8s_infinite_alternate] bg-white" />
              <div className="h-[100%] w-[2px] animate-[bounce_1.2s_infinite_alternate] bg-white" />
              <div className="h-[60%] w-[2px] animate-[bounce_0.9s_infinite_alternate] bg-white" />
            </div>
          ) : (
            <Icon name="play" className="h-2.5 w-2.5 text-white opacity-80" />
          )}
        </span>
        {isPlaying ? "Sound On" : "Sound Off"}
      </button>

      <audio
        ref={audioRef}
        src="/audio/ambient.mp3"
        loop
        preload="auto"
      />
    </div>
  );
}
