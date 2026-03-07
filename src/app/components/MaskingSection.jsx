// "use client";

// import React from "react";

// const MaskingSection = () => {
//   return (
//     <section className="w-full">
//       <div className="grid grid-cols-4 w-full">
//         {/* ── FIRST 3 COLUMNS — flex row ── */}
//         <div className="col-span-3 flex items-start gap-8 pl-20 pr-0 pt-6 pb-8">
//           {/* ══════════════════════════════════
//               LEFT — Text Content (2/3 width)
//           ══════════════════════════════════ */}
//           <div className="flex flex-col items-start min-w-0 flex-1">
//             {/* ── Masking line ── */}
//             <p
//               className="text-[11.5px] leading-[1.6] text-[#c8d0b8] m-0"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               Masking is the use of{" "}
//               <span className="text-white" style={{ fontWeight: 600 }}>
//                 EXTERNAL sound,
//               </span>
//             </p>
//             <p
//               className="text-[11.5px] leading-[1.6] text-[#c8d0b8] m-0 mb-4"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               to overshadow the{" "}
//               <span className="text-white" style={{ fontWeight: 600 }}>
//                 INTERNAL ringing.
//               </span>
//             </p>

//             {/* ── The old way heading ── */}
//             <p
//               className="text-[13px] leading-[1.6] text-[#c8d0b8] m-0 mb-1"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               The old way:{" "}
//               <span
//                 className="text-white tracking-[0.04em] text-[15px]"
//                 style={{
//                   fontFamily: "var(--font-kallisto)",
//                   fontWeight: 700,
//                 }}
//               >
//                 WHITE NOISE AUDIO
//               </span>
//             </p>

//             {/* ── White noise sub ── */}
//             <p
//               className="text-[10px] leading-[1.6] text-[#8a9878] m-0 mb-1"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               White noise is the presence of ALL audio frequencies
//               <br />
//               blasting at you simultaneously.
//             </p>

//             {/* ── Body paragraph ── */}
//             <p
//               className="text-[10px] leading-[1.65] text-[#8a9878] m-0 mb-4"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               While it can be effective in drowning out your internal ringing,
//               <br />
//               it is an extremely annoying sound, akin to standing behind a jet
//               engine.
//               <br />
//               Studies have shown a connection with listening to white noise and
//               high
//               <br />
//               blood pressure.
//             </p>

//             {/* ── The NEW way ── */}
//             <p
//               className="text-[13px] leading-[1.6] m-0 mb-3"
//               style={{ fontFamily: "var(--font-seravek)" }}
//             >
//               <span
//                 className="text-[#9DFF00]"
//                 style={{ fontFamily: "var(--font-kallisto)", fontWeight: 700 }}
//               >
//                 The NEW way:{" "}
//               </span>
//               <span className="text-[#9DFF00]">
//                 Replace the annoying ringing with
//                 <br />
//                 a specialized nature soundtrack - digitally designed to
//                 <br />
//                 mask the most common tinnitus frequencies.
//               </span>
//             </p>

//             {/* ── the innovative new ── */}
//             <p
//               className="text-[11px] leading-none text-[#a0b090] m-0 mb-0.5"
//               style={{ fontFamily: "var(--font-seravek)", fontWeight: 300 }}
//             >
//               the innovative new
//             </p>

//             {/* ── tinnitus relief app ── */}
//             <p className="m-0 mb-0.5 leading-none">
//               <span
//                 className="text-white tracking-[0.02em] text-[26px]"
//                 style={{
//                   fontFamily: "var(--font-kallisto)",
//                   fontWeight: 900,
//                 }}
//               >
//                 tinnitus relief
//               </span>{" "}
//               <span
//                 className="text-[#9DFF00] tracking-[0.02em] text-[26px]"
//                 style={{
//                   fontFamily: "var(--font-kallisto)",
//                   fontWeight: 900,
//                 }}
//               >
//                 app
//               </span>
//             </p>

//             {/* ── by earvana ── */}
//             <p
//               className="text-[11px] leading-none text-[#a0b090] m-0"
//               style={{ fontFamily: "var(--font-seravek)", fontWeight: 300 }}
//             >
//               by{" "}
//               <span
//                 className="text-[#c8d0b8] text-[13px]"
//                 style={{
//                   fontFamily: "var(--font-kallisto)",
//                   fontWeight: 700,
//                 }}
//               >
//                 earvana.
//               </span>
//             </p>
//           </div>
//           {/* ── END LEFT TEXT ── */}

//           {/* ══════════════════════════════════
//               RIGHT — App Stores + Reviews
//           ══════════════════════════════════ */}
//           <div className="flex flex-col items-start flex-1 min-w-0 pt-0">
//             {/* ── App Store Buttons ── */}
//             <div className="flex flex-col gap-2 mb-5">
//               {/* Google Play */}
//               <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-1.5 w-[148px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="w-5 h-5 shrink-0"
//                   fill="none"
//                 >
//                   <path
//                     d="M3.18 1L13.88 12 3.18 23c-.34-.17-.57-.52-.57-.92V1.92C2.61 1.52 2.84 1.17 3.18 1z"
//                     fill="#EA4335"
//                   />
//                   <path
//                     d="M17.82 8.18L5.45 1.35l9.52 9.52 2.85-2.69z"
//                     fill="#FBBC04"
//                   />
//                   <path
//                     d="M21.39 12c0 .6-.34 1.14-.88 1.42l-2.69 1.4-3.14-2.82 3.14-2.82 2.69 1.4c.54.28.88.82.88 1.42z"
//                     fill="#4285F4"
//                   />
//                   <path
//                     d="M5.45 22.65l12.37-6.83-2.85-2.69-9.52 9.52z"
//                     fill="#34A853"
//                   />
//                 </svg>
//                 <div className="flex flex-col">
//                   <span
//                     className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
//                     style={{ fontFamily: "var(--font-seravek)" }}
//                   >
//                     GET IT ON
//                   </span>
//                   <span
//                     className="text-[12px] leading-tight text-white"
//                     style={{
//                       fontFamily: "var(--font-seravek)",
//                       fontWeight: 500,
//                     }}
//                   >
//                     Google Play
//                   </span>
//                 </div>
//               </div>

//               {/* App Store */}
//               <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-1.5 w-[148px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="w-5 h-5 shrink-0"
//                   fill="white"
//                 >
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//                 </svg>
//                 <div className="flex flex-col">
//                   <span
//                     className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
//                     style={{ fontFamily: "var(--font-seravek)" }}
//                   >
//                     Download on the
//                   </span>
//                   <span
//                     className="text-[12px] leading-tight text-white"
//                     style={{
//                       fontFamily: "var(--font-seravek)",
//                       fontWeight: 500,
//                     }}
//                   >
//                     App Store
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* ── Reviews ── */}
//             <div className="flex flex-col gap-3">
//               {/* Review 1 */}
//               <div>
//                 <div className="flex gap-0.5 mb-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       width="11"
//                       height="11"
//                       viewBox="0 0 24 24"
//                       fill="#f5c518"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p
//                   className="text-[10px] leading-[1.6] text-[#9aaa88] m-0 italic"
//                   style={{ fontFamily: "var(--font-seravek)" }}
//                 >
//                   &ldquo;No joke, this has literally changed my life.&rdquo;
//                 </p>
//               </div>

//               {/* Review 2 */}
//               <div>
//                 <div className="flex gap-0.5 mb-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       width="11"
//                       height="11"
//                       viewBox="0 0 24 24"
//                       fill="#f5c518"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p
//                   className="text-[10px] leading-[1.6] text-[#9aaa88] m-0 italic"
//                   style={{ fontFamily: "var(--font-seravek)" }}
//                 >
//                   &ldquo;Without the constant nag of that high squeal
//                   <br />
//                   in my head, my BP has gone down!!&rdquo;
//                 </p>
//               </div>

//               {/* Review 3 */}
//               <div>
//                 <div className="flex gap-0.5 mb-0.5">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       width="11"
//                       height="11"
//                       viewBox="0 0 24 24"
//                       fill="#f5c518"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p
//                   className="text-[10px] leading-[1.6] text-[#9aaa88] m-0 italic"
//                   style={{ fontFamily: "var(--font-seravek)" }}
//                 >
//                   &ldquo;I&apos;m now in a constant state of deep relaxation
//                   <br />
//                   and I&apos;ve never felt better.&rdquo;
//                 </p>
//               </div>
//             </div>
//             {/* ── END REVIEWS ── */}
//           </div>
//           {/* ── END RIGHT ── */}
//         </div>
//         {/* ── END col-span-3 ── */}

//         {/* ── 4th COLUMN — empty ── */}
//         <div className="col-span-1 p-0 m-0" />
//       </div>

//       {/* Mobile responsive */}
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

// export default MaskingSection;

"use client";

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
                className="text-white tracking-[0.02em] text-[44px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
              >
                tinnitus relief
              </span>{" "}
              <span
                className="text-[#9DFF00] tracking-[0.02em] text-[44px]"
                style={{ fontFamily: "var(--font-kallisto)", fontWeight: 900 }}
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
          <div className="flex flex-col items-start flex-1 min-w-0 pt-0">
            {/* ── App Store Buttons ── */}
            <div className="flex flex-col gap-2 mb-5">
              {/* Google Play */}
              <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-1.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 shrink-0"
                  fill="none"
                >
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
                    className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
                    style={{ fontFamily: "var(--font-seravek)" }}
                  >
                    GET IT ON
                  </span>
                  <span
                    className="text-[13px] leading-tight text-white"
                    style={{
                      fontFamily: "var(--font-seravek)",
                      fontWeight: 500,
                    }}
                  >
                    Google Play
                  </span>
                </div>
              </div>

              {/* App Store */}
              <div className="flex items-center gap-2.5 bg-black border border-[rgba(255,255,255,0.15)] rounded px-3 py-1.5 w-[160px] cursor-pointer hover:border-[rgba(255,255,255,0.3)] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 shrink-0"
                  fill="white"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col">
                  <span
                    className="text-[7px] leading-none text-[#b0b8a8] uppercase tracking-[0.06em]"
                    style={{ fontFamily: "var(--font-seravek)" }}
                  >
                    Download on the
                  </span>
                  <span
                    className="text-[13px] leading-tight text-white"
                    style={{
                      fontFamily: "var(--font-seravek)",
                      fontWeight: 500,
                    }}
                  >
                    App Store
                  </span>
                </div>
              </div>
            </div>

            {/* ── Reviews ── */}
            <div className="flex flex-col gap-3">
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
                    className="text-[11px] leading-[1.6] text-[#9aaa88] m-0 italic"
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
