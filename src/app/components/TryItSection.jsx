
"use client";

import Image from "next/image";
import React from "react";

const TryItSection = () => {
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
            LEFT COLUMN — "TRY IT" heading + Device mockups
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
          {/* ── "TRY IT FOR 7 days:: FREE" + arrow ── */}
          <div className="flex items-center gap-4 mb-6">
            <p
              className="text-[24px] leading-none m-0 tracking-[0.06em] uppercase mobile-headline-tryit"
              style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
            >
              <span className="text-[#009900]">TRY IT FOR 7 days:: </span>
              <span className="text-[#009900]">FREE</span>
            </p>

            {/* Arrow */}
            {/* <div className="relative flex items-center w-[120px]  h-[3px] bg-[yellowgreen]">
              <div className="absolute left-0 top-0 h-full w-full bg-[#d8d80a]" />
              <div className="absolute right-[-2px] top-1/2 -translate-y-1/2">
                <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                  <polygon points="0,0 10,5 0,10" fill="#6abf4b" />
                </svg>
              </div>
            </div> */}
            <div className="relative flex items-center w-[120px] h-[4px] bg-[#d8d80a] border border-black rounded-sm">
  {/* Left Stem End Cap */}
  <div className="absolute left-[-1px] top-[-1px] h-[4px] w-[1px] bg-black" />

  {/* Bordered Arrowhead SVG */}
  <div className="absolute right-[-1px] top-1/2 -translate-y-1/2 translate-x-1/2">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]" // Optional: premium depth
    >
      <path 
        d="M2 2L18 10L2 18V2Z" 
        fill="#FFD700" // Premium Gold/Yellow
        stroke="black" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
</div>
          </div>

          {/* ── Device Mockups row ── */}
          <div className="flex items-end gap-5">
            {/* Tablet — larger, left */}
         
            <div className="mobile-device-ipad">
              <Image 
  src="/product.png" 
  alt="Tablet Mockup" 
  width={420} 
  height={520} 
  className="w-[420px] h-auto"
/>
            </div>

          
          </div>
          {/* ── END Device Mockups ── */}
        </div>
        {/* ── END LEFT COLUMN ── */}

        {/* ════════════════════════════════════════════════
              RIGHT COLUMN — App Store Buttons
          ════════════════════════════════════════════════ */}
        <div
          className="hero-video-col"
          style={{
            flex: "0 0 340px",
            width: "340px",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "2px",
          }}
        >
          {/* Google Play */}
          {/* <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
                <path
                  d="M3.18 1L13.88 12 3.18 23c-.34-.17-.57-.52-.57-.92V1.92C2.61 1.52 2.84 1.17 3.18 1z"
                  fill="#EA4335"
                />
                <path
                  d="M17.82 8.18L5.45 1.35l9.52 9.52 2.85-2.69z"
                  fill="#FBBC04"
                />
                <path
                  d="M21.39 12c0 .6-.34 1.14-.88 1.42l-2.69 1.4-3.14-2.82 3.14-2.82 2.69 1.4c.54.28.88.82.88 1.42z"
                  fill="#4285F4"
                />
                <path
                  d="M5.45 22.65l12.37-6.83-2.85-2.69-9.52 9.52z"
                  fill="#34A853"
                />
              </svg>
              <div className="flex flex-col">
                <span
                  className="text-[8px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  GET IT ON
                </span>
                <span
                  className="text-[14px] leading-tight text-white"
                  style={{ fontFamily: "var(--font-seravek)", fontWeight: 500 }}
                >
                  Google Play
                </span>
              </div>
            </div> */}
          {/* <div
  className="inline-block rounded-xl bg-black p-2"
  style={{
   
        width: "180px",
      height: "auto",
      
      padding: "8px",
      border: "2px solid #a4a933",

  }}
>
  <Image
    src="/google-play.png"
    alt="Get it on Google Play"
   width={180} height={40}
   
    className="rounded-xl"

  />
</div> */}
          <div
            className="inline-block w-[180px] overflow-visible mobile-store-button"
            style={{
              border: "1.5px solid #c7c84a",
              padding: "12px", // Space for the glow to breathe
            }}
          >
            {/* INNER DIV: The black button with the white "Halo" shadow */}
            <div
              className="flex items-center justify-center bg-black"
              style={{
                padding: "8px 10px",
                borderRadius: "8px",
                /* Multi-layered white shadow for the "foggy" glow effect */
                boxShadow: `
            0 0 15px 5px rgba(255, 255, 255, 0.35), 
            0 0 30px 10px rgba(255, 255, 255, 0.15)
          `,
              }}
            >
              <Image
                src="/google-play.png"
                alt="Get it on Google Play"
                /* Image scales automatically inside the 180px parent */
                width={180}
                height={55}
                className="rounded-md block h-auto w-full"
                priority
              />
            </div>
          </div>

          {/* App Store */}
          {/* <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 shrink-0"
                fill="white"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col">
                <span
                  className="text-[8px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  Download on the
                </span>
                <span
                  className="text-[14px] leading-tight text-white"
                  style={{ fontFamily: "var(--font-seravek)", fontWeight: 500 }}
                >
                  App Store
                </span>
              </div>
            </div> */}

          <div
            className="inline-block w-[180px] overflow-visible mobile-store-button"
            style={{
              border: "1.5px solid #c7c84a",
              padding: "12px", // Space for the glow to breathe
            }}
          >
            {/* INNER DIV: The black button with the white "Halo" shadow */}
            <div
              className="flex items-center justify-center bg-black"
              style={{
                padding: "8px 10px",
                borderRadius: "8px",
                /* Multi-layered white shadow for the "foggy" glow effect */
                boxShadow: `
            0 0 15px 5px rgba(255, 255, 255, 0.35), 
            0 0 30px 10px rgba(255, 255, 255, 0.15)
          `,
              }}
            >
              <Image
                src="/app-store.png"
                alt="Get it on App Store"
                /* Image scales automatically inside the 180px parent */
                width={180}
                height={55}
                className="rounded-md block h-auto w-full"
                priority
              />
            </div>
          </div>


        </div>
        {/* ── END RIGHT COLUMN ── */}
      </div>

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
            .mobile-headline-tryit {
              font-size: 18px !important;
            }
            .mobile-device-ipad {
              width: 120px !important;
            }
            .mobile-device-iphone {
              width: 90px !important;
            }
            .mobile-store-button {
              width: 100% !important;
              max-width: 250px !important;
              display: block !important;
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

export default TryItSection;
