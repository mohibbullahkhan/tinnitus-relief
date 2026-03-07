// "use client";

// import React from "react";

// const TryItSection = () => {
//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-4 w-full">
//         {/* ── FIRST 3 COLUMNS ── */}
//         <div className="col-span-3 flex items-start gap-8 pl-20 pr-0 pt-6 pb-8">
//           {/* ══════════════════════════════════
//               LEFT — "TRY IT" heading + Device mockups
//           ══════════════════════════════════ */}
//           <div className="flex flex-col items-start min-w-0 flex-1">
//             {/* ── "TRY IT FOR 7 days:: FREE" + arrow ── */}
//             <div className="flex items-center gap-3 mb-5">
//               <p
//                 className="text-[15px] leading-none m-0 tracking-[0.06em]"
//                 style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
//               >
//                 <span className="text-[#9DFF00]">TRY IT FOR 7 days:: </span>
//                 <span className="text-white"> FREE</span>
//               </p>

//               {/* Arrow */}
//               <div className="relative flex items-center w-[52px] h-[2px] bg-[#4a6a3a]">
//                 <div className="absolute left-0 top-0 h-full w-full bg-[#6abf4b]" />
//                 <div className="absolute right-[-1px] top-1/2 -translate-y-1/2">
//                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                     <polygon points="0,0 10,5 0,10" fill="#6abf4b" />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* ── Device Mockups row ── */}
//             <div className="flex items-end gap-4">
//               {/* Tablet — larger, left */}
//               <div
//                 className="relative bg-[#0a0a0a] rounded-[6px] border border-[rgba(255,255,255,0.12)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
//                 style={{ width: "130px", height: "185px" }}
//               >
//                 {/* Screen */}
//                 <div className="absolute inset-[3px] rounded-[4px] bg-[#111a0e] overflow-hidden">
//                   {/* App header bar */}
//                   <div className="w-full px-2 pt-1.5 pb-1">
//                     <p
//                       className="text-[6px] text-[#9DFF00] leading-none m-0 tracking-[0.04em]"
//                       style={{
//                         fontFamily: "var(--font-kallisto)",
//                         fontWeight: 700,
//                       }}
//                     >
//                       tinnitus<span className="text-white">relief</span>
//                     </p>
//                   </div>
//                   {/* Leaf image placeholder */}
//                   <div className="w-full h-[60px] bg-gradient-to-b from-[#1a3a10] to-[#0d1f08] flex items-center justify-center">
//                     <svg
//                       width="36"
//                       height="36"
//                       viewBox="0 0 36 36"
//                       fill="none"
//                       className="opacity-70"
//                     >
//                       <ellipse
//                         cx="18"
//                         cy="20"
//                         rx="10"
//                         ry="14"
//                         fill="#2a6a18"
//                         transform="rotate(-20 18 20)"
//                       />
//                       <path
//                         d="M18 34 Q10 20 18 8"
//                         stroke="#4a9a28"
//                         strokeWidth="1"
//                         fill="none"
//                       />
//                     </svg>
//                   </div>
//                   {/* Track list lines */}
//                   <div className="px-2 pt-1.5 flex flex-col gap-[4px]">
//                     {[...Array(9)].map((_, i) => (
//                       <div key={i} className="flex items-center gap-1.5">
//                         <div className="w-1 h-1 rounded-full bg-[#4a7a30] shrink-0" />
//                         <div
//                           className="h-[3px] rounded-full bg-[#2a4a20]"
//                           style={{ width: `${48 + (i % 4) * 12}px` }}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* Bottom home bar */}
//                 <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[30px] h-[2px] bg-[rgba(255,255,255,0.2)] rounded-full" />
//               </div>

//               {/* Phone — smaller, right */}
//               <div
//                 className="relative bg-[#0a0a0a] rounded-[6px] border border-[rgba(255,255,255,0.12)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
//                 style={{ width: "88px", height: "148px" }}
//               >
//                 {/* Screen */}
//                 <div className="absolute inset-[3px] rounded-[4px] bg-[#111a0e] overflow-hidden">
//                   {/* App header bar */}
//                   <div className="w-full px-1.5 pt-1.5 pb-0.5">
//                     <p
//                       className="text-[5px] text-[#9DFF00] leading-none m-0 tracking-[0.04em]"
//                       style={{
//                         fontFamily: "var(--font-kallisto)",
//                         fontWeight: 700,
//                       }}
//                     >
//                       tinnitus<span className="text-white">relief</span>
//                     </p>
//                   </div>
//                   {/* Leaf image placeholder */}
//                   <div className="w-full h-[42px] bg-gradient-to-b from-[#1a3a10] to-[#0d1f08] flex items-center justify-center">
//                     <svg
//                       width="26"
//                       height="26"
//                       viewBox="0 0 36 36"
//                       fill="none"
//                       className="opacity-70"
//                     >
//                       <ellipse
//                         cx="18"
//                         cy="20"
//                         rx="10"
//                         ry="14"
//                         fill="#2a6a18"
//                         transform="rotate(-20 18 20)"
//                       />
//                       <path
//                         d="M18 34 Q10 20 18 8"
//                         stroke="#4a9a28"
//                         strokeWidth="1"
//                         fill="none"
//                       />
//                     </svg>
//                   </div>
//                   {/* Track list lines */}
//                   <div className="px-1.5 pt-1 flex flex-col gap-[3.5px]">
//                     {[...Array(8)].map((_, i) => (
//                       <div key={i} className="flex items-center gap-1">
//                         <div className="w-[3px] h-[3px] rounded-full bg-[#4a7a30] shrink-0" />
//                         <div
//                           className="h-[2.5px] rounded-full bg-[#2a4a20]"
//                           style={{ width: `${32 + (i % 3) * 8}px` }}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 {/* Bottom home bar */}
//                 <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[22px] h-[2px] bg-[rgba(255,255,255,0.2)] rounded-full" />
//               </div>
//             </div>
//             {/* ── END Device Mockups ── */}
//           </div>
//           {/* ── END LEFT ── */}

//           {/* ══════════════════════════════════
//               RIGHT — App Store Buttons (aligned to top-right of col-span-3)
//           ══════════════════════════════════ */}
//           <div className="flex flex-col gap-2.5 flex-1 min-w-0 pt-0">
//             {/* Google Play */}
//             <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2 w-[152px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
//               <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
//                 <path
//                   d="M3.18 1L13.88 12 3.18 23c-.34-.17-.57-.52-.57-.92V1.92C2.61 1.52 2.84 1.17 3.18 1z"
//                   fill="#EA4335"
//                 />
//                 <path
//                   d="M17.82 8.18L5.45 1.35l9.52 9.52 2.85-2.69z"
//                   fill="#FBBC04"
//                 />
//                 <path
//                   d="M21.39 12c0 .6-.34 1.14-.88 1.42l-2.69 1.4-3.14-2.82 3.14-2.82 2.69 1.4c.54.28.88.82.88 1.42z"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M5.45 22.65l12.37-6.83-2.85-2.69-9.52 9.52z"
//                   fill="#34A853"
//                 />
//               </svg>
//               <div className="flex flex-col">
//                 <span
//                   className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
//                   style={{ fontFamily: "var(--font-seravek)" }}
//                 >
//                   GET IT ON
//                 </span>
//                 <span
//                   className="text-[12px] leading-tight text-white"
//                   style={{ fontFamily: "var(--font-seravek)", fontWeight: 500 }}
//                 >
//                   Google Play
//                 </span>
//               </div>
//             </div>

//             {/* App Store */}
//             <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2 w-[152px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="w-5 h-5 shrink-0"
//                 fill="white"
//               >
//                 <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//               </svg>
//               <div className="flex flex-col">
//                 <span
//                   className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
//                   style={{ fontFamily: "var(--font-seravek)" }}
//                 >
//                   Download on the
//                 </span>
//                 <span
//                   className="text-[12px] leading-tight text-white"
//                   style={{ fontFamily: "var(--font-seravek)", fontWeight: 500 }}
//                 >
//                   App Store
//                 </span>
//               </div>
//             </div>
//           </div>
//           {/* ── END RIGHT ── */}
//         </div>
//         {/* ── END col-span-3 ── */}

//         {/* ── 4th COLUMN — empty ── */}
//         <div className="col-span-1 p-0 m-0" />
//       </div>

//       {/* Mobile */}
//       <style>{`
//         @media (max-width: 767px) {
//           section .grid {
//             grid-template-columns: 1fr !important;
//           }
//           section .col-span-3 {
//             flex-direction: column !important;
//             padding-left: 1rem !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TryItSection;
"use client";

import React from "react";

const TryItSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 w-full">
        {/* ── FIRST 3 COLUMNS ── */}
        <div className="col-span-3 flex items-start gap-8 pl-20 pr-0 pt-6 pb-8">
          {/* ══════════════════════════════════
              LEFT — "TRY IT" heading + Device mockups
          ══════════════════════════════════ */}
          <div className="flex flex-col items-start min-w-0 flex-1">
            {/* ── "TRY IT FOR 7 days:: FREE" + arrow ── */}
            <div className="flex items-center gap-4 mb-6">
              <p
                className="text-[24px] leading-none m-0 tracking-[0.06em] uppercase"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
              >
                <span className="text-[#9DFF00]">TRY IT FOR 7 days:: </span>
                <span className="text-white">FREE</span>
              </p>

              {/* Arrow */}
              <div className="relative flex items-center w-[80px] h-[2px] bg-[#4a6a3a]">
                <div className="absolute left-0 top-0 h-full w-full bg-[#6abf4b]" />
                <div className="absolute right-[-2px] top-1/2 -translate-y-1/2">
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <polygon points="0,0 10,5 0,10" fill="#6abf4b" />
                  </svg>
                </div>
              </div>
            </div>

            {/* ── Device Mockups row ── */}
            <div className="flex items-end gap-5">
              {/* Tablet — larger, left */}
              <div
                className="relative bg-[#0a0a0a] rounded-[6px] border border-[rgba(255,255,255,0.12)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
                style={{ width: "150px", height: "210px" }}
              >
                <div className="absolute inset-[3px] rounded-[4px] bg-[#111a0e] overflow-hidden">
                  {/* App header bar */}
                  <div className="w-full px-2 pt-1.5 pb-1">
                    <p
                      className="text-[7px] text-[#9DFF00] leading-none m-0 tracking-[0.04em]"
                      style={{
                        fontFamily: "var(--font-kallisto)",
                        fontWeight: 700,
                      }}
                    >
                      tinnitus<span className="text-white">relief</span>
                    </p>
                  </div>
                  {/* Leaf image placeholder */}
                  <div className="w-full h-[70px] bg-gradient-to-b from-[#1a3a10] to-[#0d1f08] flex items-center justify-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 36 36"
                      fill="none"
                      className="opacity-70"
                    >
                      <ellipse
                        cx="18"
                        cy="20"
                        rx="10"
                        ry="14"
                        fill="#2a6a18"
                        transform="rotate(-20 18 20)"
                      />
                      <path
                        d="M18 34 Q10 20 18 8"
                        stroke="#4a9a28"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Track list lines */}
                  <div className="px-2 pt-2 flex flex-col gap-[5px]">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4a7a30] shrink-0" />
                        <div
                          className="h-[3px] rounded-full bg-[#2a4a20]"
                          style={{ width: `${52 + (i % 4) * 12}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[34px] h-[2px] bg-[rgba(255,255,255,0.2)] rounded-full" />
              </div>

              {/* Phone — smaller, right */}
              <div
                className="relative bg-[#0a0a0a] rounded-[6px] border border-[rgba(255,255,255,0.12)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
                style={{ width: "100px", height: "168px" }}
              >
                <div className="absolute inset-[3px] rounded-[4px] bg-[#111a0e] overflow-hidden">
                  {/* App header bar */}
                  <div className="w-full px-1.5 pt-1.5 pb-0.5">
                    <p
                      className="text-[6px] text-[#9DFF00] leading-none m-0 tracking-[0.04em]"
                      style={{
                        fontFamily: "var(--font-kallisto)",
                        fontWeight: 700,
                      }}
                    >
                      tinnitus<span className="text-white">relief</span>
                    </p>
                  </div>
                  {/* Leaf image placeholder */}
                  <div className="w-full h-[50px] bg-gradient-to-b from-[#1a3a10] to-[#0d1f08] flex items-center justify-center">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 36 36"
                      fill="none"
                      className="opacity-70"
                    >
                      <ellipse
                        cx="18"
                        cy="20"
                        rx="10"
                        ry="14"
                        fill="#2a6a18"
                        transform="rotate(-20 18 20)"
                      />
                      <path
                        d="M18 34 Q10 20 18 8"
                        stroke="#4a9a28"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Track list lines */}
                  <div className="px-1.5 pt-1.5 flex flex-col gap-[4px]">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#4a7a30] shrink-0" />
                        <div
                          className="h-[2.5px] rounded-full bg-[#2a4a20]"
                          style={{ width: `${36 + (i % 3) * 8}px` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[26px] h-[2px] bg-[rgba(255,255,255,0.2)] rounded-full" />
              </div>
            </div>
            {/* ── END Device Mockups ── */}
          </div>
          {/* ── END LEFT ── */}

          {/* ══════════════════════════════════
              RIGHT — App Store Buttons
          ══════════════════════════════════ */}
          <div className="flex flex-col gap-3 flex-1 min-w-0 pt-0">
            {/* Google Play */}
            <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
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
            </div>

            {/* App Store */}
            <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-2.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
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
            </div>
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

export default TryItSection;
