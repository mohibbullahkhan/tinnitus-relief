// "use client";

// export default function HeroSection() {
//   return (
//     <section>
//       {/* ── TWO COLUMN FLEX ROW ──────────────────────────── */}
//       <div
//         className="hero-row"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           alignItems: "flex-start",

//           gap: "20px",
//           width: "100%",
//         }}
//       >
//         {/* ════════════════════════════════════════════════
//             LEFT COLUMN — Text
//         ════════════════════════════════════════════════ */}
//         <div
//           style={{
//             flex: "1 1 0",
//             minWidth: 0,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             marginLeft: "80px",
//             marginTop: "-20px",
//           }}
//         >
//           {/* ── HEADLINE BLOCK ────────────────────────────
//               Line 1: "750 Million people suffer from"
//               Line 2: "ringing in the ears."
//           ─────────────────────────────────────────────── */}
//           <div style={{ marginBottom: "8px" }}>
//             {/* Line 1 — "750 Million people" bold yellow + "suffer from" thinner olive */}
//             <p
//               style={{
//                 fontFamily: "'Kallisto', sans-serif",
//                 fontWeight: 900,
//                 fontSize: "22px",
//                 letterSpacing: "0.06em",
//                 lineHeight: 1.25,
//                 margin: 0,
//                 padding: 0,
//               }}
//             >
//               <span
//                 className="font-kallisto font-[#9DFF00] text-[26px] md:text-[35px] lg:text-[40px]"
//                 style={{ color: "#9DFF00", fontWeight: 900 }}
//               >
//                 750 Million people{" "}
//               </span>
//               <span
//                 className="font-kallisto font-[#9DFF00] text-[25px] md:text-[32px] lg:text-[36px]"
//                 style={{ color: "#9DFF00", fontWeight: 700 }}
//               >
//                 suffer from
//               </span>
//             </p>

//             {/* Line 2 — "ringing in the ears." bold olive-green */}
//             <p
//               style={{
//                 fontFamily: "'Kallisto', sans-serif",
//                 fontWeight: 900,
//                 fontSize: "22px",
//                 letterSpacing: "0.06em",
//                 lineHeight: 1.25,
//                 margin: 0,
//                 padding: 0,
//                 color: "#9DFF00",
//               }}
//             >
//               ringing in the ears.
//             </p>
//           </div>

//           {/* ── "Are you one of them?" ─────────────────── */}
//           <p
//             style={{
//               fontFamily: "'Seravek', sans-serif",
//               fontSize: "15px",
//               fontWeight: 400,
//               color: "#c8d0b8",
//               margin: "0 0 14px 0",
//               lineHeight: 1.5,
//             }}
//             className=""
//           >
//             Are{" "}
//             <strong style={{ fontWeight: 700, color: "#ffffff" }}>you</strong>{" "}
//             one of them?
//           </p>

//           {/* ── TINNITUS paragraph ────────────────────────
//               "TINNITUS" bold + "-- to date -- is not curable." muted
//               "But new research..." slightly brighter
//           ─────────────────────────────────────────────── */}
//           <div style={{ marginBottom: "14px" }}>
//             {/* Row 1 — TINNITUS bold + rest muted grey-green */}
//             <p
//               style={{
//                 fontFamily: "'Seravek', sans-serif",
//                 fontSize: "14px",
//                 lineHeight: 1.6,
//                 margin: 0,
//                 color: "#9aaa88",
//               }}
//             >
//               <strong
//                 style={{
//                   fontFamily: "'Kallisto', sans-serif",
//                   fontWeight: 700,
//                   color: "#b8c8a0",
//                   fontSize: "16px",
//                   letterSpacing: "0.04em",
//                   marginRight: "2px",
//                 }}
//               >
//                 TINNITUS
//               </strong>{" "}
//               -- to date -- is not curable.
//             </p>

//             {/* Row 2+3 — "But new research..." brighter */}
//             <p
//               style={{
//                 fontFamily: "'Seravek', sans-serif",
//                 fontSize: "11.5px",
//                 fontWeight: 400,
//                 color: "#b8c8a0",
//                 margin: "1px 0 0 0",
//                 lineHeight: 1.65,
//               }}
//             >
//               But new research shows significant success
//               <br />
//               in a alternative solution.{" "}
//               <span style={{ fontWeight: 600 }}>See and preview below:</span>
//             </p>
//           </div>

//           {/* ── ENT's / masking paragraph ─────────────── */}
//           <div>
//             {/* "ENT's and Audiologists recommend" — normal weight, lighter */}
//             <p
//               style={{
//                 fontFamily: "'Seravek', sans-serif",
//                 fontSize: "13px",
//                 fontWeight: 400,
//                 color: "#c8d0b8",
//                 margin: 0,
//                 lineHeight: 1.6,
//               }}
//             >
//               ENT&apos;s and Audiologists recommend
//             </p>

//             {/* "masking," HUGE bold white + "a technique used for years." normal */}
//             <p
//               style={{
//                 fontFamily: "'Seravek', sans-serif",
//                 fontSize: "13px",
//                 fontWeight: 400,
//                 color: "#c8d0b8",
//                 margin: 0,
//                 lineHeight: 1.5,
//                 display: "flex",
//                 alignItems: "baseline",
//                 flexWrap: "wrap",
//                 gap: "5px",
//               }}
//             >
//               <span
//                 style={{
//                   fontFamily: "'Kallisto', sans-serif",
//                   fontWeight: 900,
//                   fontSize: "22px",
//                   color: "#ffffff",
//                   letterSpacing: "0.01em",
//                   lineHeight: 1,
//                 }}
//               >
//                 masking,
//               </span>
//               <span style={{ fontSize: "13px", color: "#c8d0b8" }}>
//                 a technique used for years.
//               </span>
//             </p>
//           </div>
//         </div>
//         {/* ── END LEFT COLUMN ─────────────────────────── */}

//         {/* ════════════════════════════════════════════════
//             RIGHT COLUMN — Video Player
//         ════════════════════════════════════════════════ */}
//         <div
//           className="hero-video-col"
//           style={{
//             flex: "0 0 340px",
//             width: "340px",
//             flexShrink: 0,
//             marginTop: "2px",
//           }}
//         >
//           {/* Video outer box */}
//           <div
//             style={{
//               width: "100%",
//               aspectRatio: "16 / 10",
//               background: "#0a0a0a",
//               borderRadius: "3px",
//               position: "relative",
//               overflow: "hidden",
//               border: "1px solid rgba(40,50,30,0.8)",
//               boxShadow: "0 8px 36px rgba(0,0,0,0.75)",
//             }}
//           >
//             {/* BG dark */}
//             <div
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "#0e0e0e",
//               }}
//             />

//             {/* ── CENTER PLAY BUTTON ──────────────────── */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "46%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "54px",
//                 height: "54px",
//                 borderRadius: "50%",
//                 background: "rgba(120,120,120,0.25)",
//                 border: "2px solid rgba(190,190,190,0.75)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 zIndex: 10,
//               }}
//             >
//               {/* Play triangle */}
//               <div
//                 style={{
//                   width: 0,
//                   height: 0,
//                   borderStyle: "solid",
//                   borderWidth: "10px 0 10px 18px",
//                   borderColor:
//                     "transparent transparent transparent rgba(220,220,220,0.90)",
//                   marginLeft: "6px",
//                 }}
//               />
//             </div>

//             {/* ── CONTROLS BAR ────────────────────────── */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 height: "28px",
//                 background: "rgba(6,6,6,0.95)",
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0 8px",
//                 gap: "6px",
//                 zIndex: 20,
//               }}
//             >
//               {/* Prev ⏮ */}
//               <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
//                 <rect x="0" y="0.5" width="2" height="10" fill="#aaaaaa" />
//                 <polygon points="12,0.5 12,10.5 2.5,5.5" fill="#aaaaaa" />
//               </svg>

//               {/* Play ▶ */}
//               <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
//                 <polygon points="0,0.5 9,5.5 0,10.5" fill="#aaaaaa" />
//               </svg>

//               {/* Next ⏭ */}
//               <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
//                 <rect x="11" y="0.5" width="2" height="10" fill="#aaaaaa" />
//                 <polygon points="1,0.5 1,10.5 10.5,5.5" fill="#aaaaaa" />
//               </svg>

//               {/* Progress bar */}
//               <div
//                 style={{
//                   flex: 1,
//                   height: "3px",
//                   background: "rgba(255,255,255,0.08)",
//                   borderRadius: "2px",
//                   overflow: "hidden",
//                   margin: "0 2px",
//                 }}
//               >
//                 {/* Red filled portion */}
//                 <div
//                   style={{
//                     width: "30%",
//                     height: "100%",
//                     background: "#cc1f1f",
//                     borderRadius: "2px",
//                   }}
//                 />
//               </div>

//               {/* Right icons */}
//               <div
//                 style={{ display: "flex", alignItems: "center", gap: "5px" }}
//               >
//                 {/* Gear ⚙ */}
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <circle cx="6" cy="6" r="2" stroke="#888" strokeWidth="1.2" />
//                   <path
//                     d="M6 0.5v2M6 9.5v2M0.5 6h2M9.5 6h2M2.1 2.1l1.4 1.4M8.5 8.5l1.4 1.4M9.9 2.1L8.5 3.5M3.5 8.5L2.1 9.9"
//                     stroke="#888"
//                     strokeWidth="1"
//                     strokeLinecap="round"
//                   />
//                 </svg>

//                 {/* Square □ */}
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <rect
//                     x="1"
//                     y="1"
//                     width="10"
//                     height="10"
//                     stroke="#888"
//                     strokeWidth="1.2"
//                     rx="1"
//                   />
//                 </svg>

//                 {/* Fullscreen ⛶ */}
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path
//                     d="M1 4.5V1h3.5M7.5 1H11v3.5M11 7.5V11H7.5M4.5 11H1V7.5"
//                     stroke="#888"
//                     strokeWidth="1.2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//             {/* ── END CONTROLS BAR ────────────────────── */}
//           </div>
//           {/* ── END VIDEO BOX ───────────────────────── */}
//         </div>
//         {/* ── END RIGHT COLUMN ────────────────────────── */}
//       </div>
//       {/* ── END FLEX ROW ────────────────────────────── */}

//       {/* ── MOBILE RESPONSIVE ─────────────────────────
//           On mobile: stack columns, video goes below text
//       ─────────────────────────────────────────────── */}
//       <style>{`
//         @media (max-width: 767px) {
//           .hero-row {
//             flex-direction: column !important;
//           }
//           .hero-video-col {
//             flex: unset !important;
//             width: 100% !important;
//             margin-top: 20px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

export default function HeroSection() {
  return (
    <section>
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
            LEFT COLUMN — Text
        ════════════════════════════════════════════════ */}
        <div
          style={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "80px",
            marginTop: "-20px",
          }}
        >
          {/* ── HEADLINE BLOCK ── */}
          <div style={{ marginBottom: "8px" }}>
            {/* Line 1 */}
            <p
              style={{
                fontFamily: "'Kallisto', sans-serif",
                fontWeight: 900,
                fontSize: "44px",
                letterSpacing: "0.06em",
                lineHeight: 1.05,
                margin: 0,
                padding: 0,
              }}
            >
              <span style={{ color: "#9DFF00", fontWeight: 900 }}>
                750 Million people{" "}
              </span>
              <span style={{ color: "#9DFF00", fontWeight: 700 }}>
                suffer from
              </span>
            </p>

            {/* Line 2 */}
            <p
              style={{
                fontFamily: "'Kallisto', sans-serif",
                fontWeight: 900,
                fontSize: "44px",
                letterSpacing: "0.06em",
                lineHeight: 1.05,
                margin: 0,
                padding: 0,
                color: "#9DFF00",
              }}
            >
              ringing in the ears.
            </p>
          </div>

          {/* ── "Are you one of them?" ── */}
          <p
            style={{
              fontFamily: "'Seravek', sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              color: "#c8d0b8",
              margin: "0 0 14px 0",
              lineHeight: 1.5,
            }}
          >
            Are{" "}
            <strong style={{ fontWeight: 700, color: "#ffffff" }}>you</strong>{" "}
            one of them?
          </p>

          {/* ── TINNITUS paragraph ── */}
          <div style={{ marginBottom: "14px" }}>
            {/* Row 1 — TINNITUS bold */}
            <p
              style={{
                fontFamily: "'Seravek', sans-serif",
                fontSize: "14px",
                lineHeight: 1.6,
                margin: 0,
                color: "#9aaa88",
              }}
            >
              <strong
                style={{
                  fontFamily: "'Kallisto', sans-serif",
                  fontWeight: 700,
                  color: "#b8c8a0",
                  fontSize: "16px",
                  letterSpacing: "0.04em",
                  marginRight: "2px",
                }}
              >
                TINNITUS
              </strong>{" "}
              -- to date -- is not curable.
            </p>

            {/* Row 2+3 */}
            <p
              style={{
                fontFamily: "'Seravek', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                color: "#b8c8a0",
                margin: "1px 0 0 0",
                lineHeight: 1.65,
              }}
            >
              But new research shows significant success
              <br />
              in a alternative solution.{" "}
              <span style={{ fontWeight: 600 }}>See and preview below:</span>
            </p>
          </div>

          {/* ── ENT's / masking paragraph ── */}
          <div>
            <p
              style={{
                fontFamily: "'Seravek', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#c8d0b8",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              ENT&apos;s and Audiologists recommend
            </p>

            <p
              style={{
                fontFamily: "'Seravek', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                color: "#c8d0b8",
                margin: 0,
                lineHeight: 1.5,
                display: "flex",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: "5px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Kallisto', sans-serif",
                  fontWeight: 900,
                  fontSize: "26px",
                  color: "#ffffff",
                  letterSpacing: "0.01em",
                  lineHeight: 1,
                }}
              >
                masking,
              </span>
              <span style={{ fontSize: "16px", color: "#c8d0b8" }}>
                a technique used for years.
              </span>
            </p>
          </div>
        </div>
        {/* ── END LEFT COLUMN ── */}

        {/* ════════════════════════════════════════════════
            RIGHT COLUMN — Video Player
        ════════════════════════════════════════════════ */}
        <div
          className="hero-video-col"
          style={{
            flex: "0 0 340px",
            width: "340px",
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 10",
              background: "#0a0a0a",
              borderRadius: "3px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(40,50,30,0.8)",
              boxShadow: "0 8px 36px rgba(0,0,0,0.75)",
            }}
          >
            <div
              style={{ position: "absolute", inset: 0, background: "#0e0e0e" }}
            />

            {/* Center Play Button */}
            <div
              style={{
                position: "absolute",
                top: "46%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                background: "rgba(120,120,120,0.25)",
                border: "2px solid rgba(190,190,190,0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: "10px 0 10px 18px",
                  borderColor:
                    "transparent transparent transparent rgba(220,220,220,0.90)",
                  marginLeft: "6px",
                }}
              />
            </div>

            {/* Controls Bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "28px",
                background: "rgba(6,6,6,0.95)",
                display: "flex",
                alignItems: "center",
                padding: "0 8px",
                gap: "6px",
                zIndex: 20,
              }}
            >
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                <rect x="0" y="0.5" width="2" height="10" fill="#aaaaaa" />
                <polygon points="12,0.5 12,10.5 2.5,5.5" fill="#aaaaaa" />
              </svg>
              <svg width="9" height="11" viewBox="0 0 9 11" fill="none">
                <polygon points="0,0.5 9,5.5 0,10.5" fill="#aaaaaa" />
              </svg>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                <rect x="11" y="0.5" width="2" height="10" fill="#aaaaaa" />
                <polygon points="1,0.5 1,10.5 10.5,5.5" fill="#aaaaaa" />
              </svg>

              <div
                style={{
                  flex: 1,
                  height: "3px",
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  margin: "0 2px",
                }}
              >
                <div
                  style={{
                    width: "30%",
                    height: "100%",
                    background: "#cc1f1f",
                    borderRadius: "2px",
                  }}
                />
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="2" stroke="#888" strokeWidth="1.2" />
                  <path
                    d="M6 0.5v2M6 9.5v2M0.5 6h2M9.5 6h2M2.1 2.1l1.4 1.4M8.5 8.5l1.4 1.4M9.9 2.1L8.5 3.5M3.5 8.5L2.1 9.9"
                    stroke="#888"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="10"
                    height="10"
                    stroke="#888"
                    strokeWidth="1.2"
                    rx="1"
                  />
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 4.5V1h3.5M7.5 1H11v3.5M11 7.5V11H7.5M4.5 11H1V7.5"
                    stroke="#888"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* ── END RIGHT COLUMN ── */}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-row {
            flex-direction: column !important;
          }
          .hero-video-col {
            flex: unset !important;
            width: 100% !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
