

"use client";
import Image from "next/image";
// At the top of ListenSection.jsx, after imports

import React from "react";

const MaskingSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 w-full">
        {/* ── FIRST 3 COLUMNS — flex row ── */}
        <div className="col-span-3 flex items-start gap-8 pl-20 pr-0 pt-6 pb-8">
          {/* ══════════════════════════════════
              LEFT — Text Content
          ══════════════════════════════════ */}
          <div className="flex flex-col items-start min-w-0 flex-1">
            {/* ── Masking line ── */}
            <p
              className="text-[14px] leading-[1.6] text-[#c8d0b8] m-0"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              Masking is the use of{" "}
              <span className="text-white font-semibold">EXTERNAL sound,</span>
            </p>
            <p
              className="text-[14px] leading-[1.6] text-[#c8d0b8] m-0 mb-4"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              to overshadow the{" "}
              <span className="text-white font-semibold">
                INTERNAL ringing.
              </span>
            </p>

            {/* ── The old way heading ── */}
            <p
              className="text-[16px] leading-[1.6] text-[#c8d0b8] m-0 mb-1"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              The old way:{" "}
              <span
                className="text-white tracking-[0.04em] text-[17px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
              >
                WHITE NOISE AUDIO
              </span>
            </p>

            {/* ── White noise sub ── */}
            <p
              className="text-[13px] leading-[1.6] text-[#8a9878] m-0 mb-1"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              <span style={{ fontWeight: 700 }}>White noise</span> is the
              presence of ALL audio frequencies
              <br />
              blasting at you simultaneously.
            </p>

            {/* ── Body paragraph ── */}
            <p
              className="text-[13px] leading-[1.65] text-[#8a9878] m-0 mb-4"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              While it can be effective in drowning out your internal ringing,
              <br />
              it is an extremely annoying sound, akin to standing behind a jet
              engine.
              <br />
              Studies have shown a connection with listening to white noise and
              high
              <br />
              blood pressure.
            </p>

            {/* ── The NEW way ── */}
            <p
              className="text-[15px] leading-[1.6] m-0 mb-3"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              <span
                className="text-[#9DFF00] text-[17px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
              >
                The NEW way:{" "}
              </span>
              <span className="text-[#9DFF00]">
                Replace the annoying ringing with
                <br />
                a specialized nature soundtrack - digitally designed to
                <br />
                mask the most common tinnitus frequencies.
              </span>
            </p>

            {/* ── the innovative new ── */}
            <p
              className="text-[16px] leading-none text-[#a0b090] m-0 mb-0.5"
              style={{ fontFamily: "var(--font-seravek)", fontWeight: 300 }}
            >
              the innovative new
            </p>

            {/* ── tinnitus relief app ── */}
            <p className="m-0 mb-0.5 leading-none">
              <span
                className="text-[#9DFF00] tracking-[0.02em] text-[44px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
              >
                tinnitus relief
              </span>{" "}
              <span
                className="text-[#9DFF00] tracking-[0.02em] text-[44px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
              >
                app
              </span>
            </p>

            {/* ── by earvana ── */}
            <p
              className="text-[16px] leading-none text-[#a0b090] m-0"
              style={{ fontFamily: "var(--font-seravek)", fontWeight: 300 }}
            >
              by{" "}
              <span
                className="text-[#c8d0b8] text-[18px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
              >
                earvana.
              </span>
            </p>
          </div>
          {/* ── END LEFT TEXT ── */}

          {/* ══════════════════════════════════
              RIGHT — App Stores + Reviews
          ══════════════════════════════════ */}
          <div className="flex flex-col items-start flex-1  min-w-0 pt-0 justify-end">
            {/* ── App Store Buttons ── */}
            <div className="flex flex-col gap-2 mb-5">
              {/* Google Play */}
              
              <div className="bg-black rounded-md">
                <Image src="/google-play.png" alt="Get it on Google Play" width={160} height={40} />
              </div>

              {/* App Store */}
        
              <div className="bg-black rounded-md">
                <Image src="/app-store.png" alt="Get it on App Store" width={160} height={40} />
              </div>
            </div>

            {/* ── Reviews ── */}
            <div className="flex  flex-col gap-3">
              {[
                "No joke, this has literally changed my life.",
                "Without the constant nag of that high squeal\nin my head, my BP has gone down!!",
                "I'm now in a constant state of deep relaxation\nand I've never felt better.",
              ].map((quote, i) => (
                <div key={i}>
                  <div className="flex gap-0.5 mb-1">
                    {[...Array(5)].map((_, j) => (
                      <svg
                        key={j}
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="#f5c518"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p
                    className="text-[11px] leading-[1.6] text-black m-0 italic"
                    style={{ fontFamily: "var(--font-seravek)" }}
                  >
                    &ldquo;
                    {quote.split("\n").map((line, k, arr) => (
                      <React.Fragment key={k}>
                        {line}
                        {k < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                    &rdquo;
                  </p>
                </div>
              ))}
            </div>
            {/* ── END REVIEWS ── */}
          </div>
          {/* ── END RIGHT ── */}
        </div>
        {/* ── END col-span-3 ── */}

        {/* ── 4th COLUMN — empty ── */}
        <div className="col-span-1 p-0 m-0" />
      </div>

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

export default MaskingSection;
