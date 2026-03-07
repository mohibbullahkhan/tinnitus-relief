
"use client";

import React, { useState } from "react";
import SoundPreviewButton from "./SoundPreviewButton";

const ListenSection = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const handleToggle = (trackName) => {
    // If the same button is clicked, stop it (set to null). 
    // Otherwise, set the new track as active.
    setActiveTrack((prev) => (prev === trackName ? null : trackName));
  };
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 w-full">
        {/* ── FIRST 3 COLUMNS ── */}
        <div className="col-span-3 flex items-start gap-8 pl-20 pr-0 pt-6 pb-8">
          {/* ══════════════════════════════════
              LEFT — Text + Slider
          ══════════════════════════════════ */}
          <div className="flex flex-col items-start min-w-0 flex-1">
            {/* ── "take a listen:" + arrow slider ── */}
            <div className="flex items-center gap-3 mb-1">
              <p
                className="text-[36px] leading-none text-black m-0 tracking-[0.01em]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
              >
                take a listen:
              </p>

              {/* Arrow slider track */}
              <div className="relative flex items-center w-[200px] h-[2px] bg-[#4a6a3a]">
                {/* filled green portion */}
                <div className="absolute left-0 top-0 h-full w-[70%] bg-[#6abf4b]" />
                {/* arrow head at end */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <polygon points="0,0 10,5 0,10" fill="#6abf4b" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── best in headphones ── */}
            <p
              className="text-[15px] leading-none text-[#7abf50] m-0 mb-3 tracking-[0.01em]"
              style={{ fontFamily: "var(--font-seravek)", fontWeight: 400 }}
            >
              ( best in headphones or ear buds )
            </p>

            {/* ── "as you turn up the volume..." ── */}
            <p
              className="text-[16px] font-bold leading-[1.6] text-[#c8d0b8] m-0 mb-1"
              style={{ fontFamily: "var(--font-seravek)", fontWeight: 400 }}
            >
              as you turn up the volume, you will likely notice:
            </p>

            {/* ── Bullet list ── */}
            <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
              {[
                "the ringing disappears",
                "uncanny realism: full immersion to the environment",
                "deep relaxation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-1.5 text-[14px] leading-[1.6] text-[#a8b898]"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  <span className="mt-[3px] shrink-0 text-[#a8b898]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* ── END LEFT ── */}

          {/* ══════════════════════════════════
              RIGHT — Audio Track Buttons
          ══════════════════════════════════ */}
          <div className="flex flex-col gap-2.5 flex-1 min-w-0 pt-0">
            {/* Ocean Aire */}
            {/* <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.45)] border border-[rgba(100,160,80,0.25)] rounded-sm px-3 py-2.5 cursor-pointer hover:border-[rgba(100,160,80,0.5)] transition-colors group">
              <div className="w-0 h-0 border-y-[7px] border-l-[13px] border-y-transparent border-l-[#6abf4b] shrink-0 group-hover:border-l-[#8adf6b] transition-colors" />
              <p
                className="text-[12px] leading-none text-[#c8d0b8] m-0 tracking-[0.01em]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 500 }}
              >
                Ocean Aire :{" "}
                <span className="text-[#a0b090]" style={{ fontWeight: 400 }}>
                  calm
                </span>
              </p>
            </div> */}
            <SoundPreviewButton
        title="Ocean Aire :"
        subtitle="day calm"
        audioSrc="TR-OAC.mst13.mp3" // Path to your file in the public folder
        isActive={activeTrack === "ocean"}
        onToggle={() => handleToggle("ocean")}
      />

            {/* Forest Rain */}
            {/* <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.45)] border border-[rgba(100,160,80,0.25)] rounded-sm px-3 py-2.5 cursor-pointer hover:border-[rgba(100,160,80,0.5)] transition-colors group">
              
              <div className="w-0 h-0 border-y-[7px] border-l-[13px] border-y-transparent border-l-[#6abf4b] shrink-0 group-hover:border-l-[#8adf6b] transition-colors" />
              <p
                className="text-[12px] leading-none text-[#c8d0b8] m-0 tracking-[0.01em]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 500 }}
              >
                Forest Rain :{" "}
                <span className="text-[#a0b090]" style={{ fontWeight: 400 }}>
                  lite
                </span>
              </p>
            </div> */}
        
            <SoundPreviewButton
        title="Forest Rain :"
        subtitle="lite"
        audioSrc="TR-Rain-lite.mst13.mp3" // Path to your file in the public folder
        isActive={activeTrack === "forest"}
        onToggle={() => handleToggle("forest")}
      />
          </div>
          {/* ── END RIGHT ── */}
        </div>
        {/* ── END col-span-3 ── */}

        {/* ── 4th COLUMN — empty ── */}
        <div className="col-span-1 p-0 m-0" />
      </div>

      {/* Mobile */}
      <style>{`
        @media (max-width: 767px) {
          section .grid {
            grid-template-columns: 1fr !important;
          }
          section .col-span-3 {
            flex-direction: column !important;
            padding-left: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ListenSection;


