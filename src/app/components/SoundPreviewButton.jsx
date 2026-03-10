
"use client";

import { useEffect, useRef } from "react";

export default function SoundPreviewButton({ 
  title = "Ocean Aire :", 
  subtitle = "calm", 
  audioSrc, 
  isActive, 
  onToggle 
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isActive) {
        audioRef.current.play().catch((err) => console.log("Playback blocked:", err));
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <div
      onClick={onToggle}
      className={`
        flex items-center gap-4 cursor-pointer transition-all duration-500
        rounded-[2px] px-4 py-3 group select-none
        /* Reduced overall width constraint */
        max-w-[340px] w-full 
      `}
      style={{
        backgroundColor: "rgba(80, 120, 70, 0.55)",
        backdropFilter: "blur(8px)",
        border: isActive 
          ? "1px solid rgba(180, 240, 120, 0.85)" 
          : "1px solid rgba(140, 190, 120, 0.55)",
        boxShadow: isActive
          ? "inset 0 0 25px rgba(100, 220, 80, 0.35), 0 0 20px rgba(100, 220, 80, 0.35)"
          : "inset 0 0 20px rgba(100, 180, 80, 0.15), 0 0 12px rgba(100, 180, 80, 0.20)",
      }}
    >
      <audio ref={audioRef} src={audioSrc} loop />

      {/* DYNAMIC ICON: Switches between Play and Pause */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
        <svg width="32" height="32" viewBox="0 0 42 48" fill="none">
          {isActive ? (
            /* PAUSE ICON: Two vertical bars */
            <g fill={isActive ? "#d0d0d0" : "#909090"}>
               <rect x="6" y="4" width="10" height="40" rx="2" />
               <rect x="26" y="4" width="10" height="40" rx="2" />
            </g>
          ) : (
            /* PLAY ICON: Triangle */
            <polygon
              points="4,4 38,24 4,44"
              stroke="#909090"
              strokeWidth="3"
              strokeLinejoin="round"
              fill="rgba(144, 144, 144, 0.15)"
            />
          )}
        </svg>
      </div>

      {/* TEXT SECTION: Reduced font size for better fit in smaller width */}
      <div 
        className="flex items-center text-[18px] tracking-[0.05em] overflow-hidden"
        style={{ 
          fontFamily: "var(--font-kallisto)", 
          fontWeight: 300,
          textShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}
      >
        <span className="text-white whitespace-nowrap truncate">
          {title}{" "}
        </span>
        <span 
          className="transition-colors duration-300 ml-1 truncate"
          style={{ color: isActive ? "#ffffff" : "#c0ccc0" }}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}