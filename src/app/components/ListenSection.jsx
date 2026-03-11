
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
    <section className="w-full pt-6 pb-8">
      <div
        className="hero-row"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "flex-start",
          gap: "20px",
          width: "100%",
        }}
      >
        {/* ════════════════════════════════════════════════
            LEFT COLUMN — Text + Slider
        ════════════════════════════════════════════════ */}
        <div
          className="hero-text-col"
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "80px",
            marginTop: "0px",
          }}
        >
          {/* ── "take a listen:" + arrow slider ── */}
          <div className="flex items-center gap-3 mb-1">
            <p
              className="text-[36px] leading-none text-black m-0 tracking-[0.01em] mobile-headline-listen"
              style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
            >
              take a listen:
            </p>

            {/* Arrow slider track */}
            {/* <div className="relative flex items-center w-[200px] h-[3px] bg-[#4a6a3a]">
            
              <div className="absolute left-0 top-0 h-full w-[70%] bg-[#6abf4b]" />
           
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                  <polygon points="0,0 10,5 0,10" fill="#6abf4b" />
                </svg>
              </div>
            </div> */}
            <div className="relative flex items-center w-[300px] h-[4px] bg-[#10FF9F] border-[1.5px] border-black">
              {/* The Arrowhead - Pulled back to connect flush */}
              <div className="absolute right-[-1.5px] top-1/2 -translate-y-1/2">
                <svg
                  width="36"
                  height="18"
                  viewBox="0 0 36 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                >
                  <path
                    d="M1 2L32 9L1 16V2Z"
                    fill="#10FF9F"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ── best in headphones ── */}
          <p
            className="text-[15px] text-black leading-none text-[#7abf50] m-0 mb-3 tracking-[0.01em]"
            style={{ fontFamily: "var(--font-kallisto)", fontWeight: 200 }}
          >
            ( best in headphones or ear buds )
          </p>

          {/* ── "as you turn up the volume..." ── */}
          <p
            className="text-[16px] font-bold leading-[1.6] text-[#147D0B] m-0 mb-1"
            style={{ fontFamily: "var(--font-kallisto)", fontWeight: 400 }}
          >
            as you turn up the volume, you will likely notice:
          </p>

          {/* ── Bullet list ── */}
          {/* <ul className="list-none m-0 p-0 flex flex-col gap-0.5 text-[#1A860F]">
            {[
              "the ringing disappears",
              "uncanny realism: full immersion to the environment",
              "deep relaxation",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-[14px] leading-[1.6] text-[#1A860F]"
                style={{ fontFamily: "var(--font-kallisto)" }}
              >
                <span className="mt-[3px] shrink-0 text-[#1A860F]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul> */}

          <ul className="list-none m-0 p-0 flex flex-col gap-0.5 text-[#1A860F]">
            {[
              "the ringing disappears",
              "uncanny realism: full immersion to the environment",
              "deep relaxation",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-[14px] leading-[1.6] text-[#1A860F]"
                style={{ fontFamily: "var(--font-kallisto)" }}
              >
                <span className="mt-[3px] shrink-0 text-[#1A860F]">•</span>
                <span>
                  {item.split(" ").map((word, index) => (
                    <span key={index}>
                      {word === "disappears" ? (
                        <span className="underline decoration-1 underline-offset-4">
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                      {index !== item.split(" ").length - 1 && " "}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* ── END LEFT COLUMN ── */}

        {/* ════════════════════════════════════════════════
              RIGHT COLUMN — Audio Track Buttons
          ════════════════════════════════════════════════ */}
        <div
          className="hero-video-col"
          style={{
            flex: "0 0 340px",
            width: "340px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "2px",
          }}
        >
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
          <SoundPreviewButton
            title="Forest Rain :"
            subtitle="lite drizzle"
            audioSrc="TR-Rain-lite.mst13.mp3" // Path to your file in the public folder
            isActive={activeTrack === "forest"}
            onToggle={() => handleToggle("forest")}
          />
        </div>
        {/* ── END RIGHT COLUMN ── */}
      </div>

      {/* Mobile */}
      <style>{`
          @media (max-width: 767px) {
            .hero-row {
              display: flex !important;
              flex-direction: column !important;
              padding: 0 20px !important;
            }
            .hero-text-col {
              margin-left: 0 !important;
              margin-top: 0 !important;
              width: 100% !important;
            }
            .mobile-headline-listen {
              font-size: 26px !important;
            }
            .hero-video-col {
              flex: unset !important;
              width: 100% !important;
              margin-top: 20px !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
          }
        `}</style>
    </section>
  );
};

export default ListenSection;


