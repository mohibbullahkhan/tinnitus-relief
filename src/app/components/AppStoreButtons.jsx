import Image from "next/image";

// ── Props (no TypeScript):
// className   → extra classes on the wrapper  (default: "")
// variant     → "default" | "glow"            (default: "default")
// direction   → "vertical" | "horizontal"     (default: "vertical")

export default function AppStoreButtons({
  className = "",
  variant = "default",
  direction = "vertical",
}) {
  const isGlow = variant === "glow";
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={`flex ${isHorizontal ? "flex-row" : "flex-col"} gap-3 ${className}`}
    >

      {/* ── Google Play ───────────────────────────── */}
      {isGlow ? (
        <div
          style={{
            padding: "16px",
            border: "1px solid rgba(255,215,0,0.6)",
            display: "inline-block",
            background: "transparent",
          }}
        >
          <Image
            src="/google-play.png"
            alt="Get it on Google Play"
            width={180}
            height={54}
            className="block rounded-xl"
            style={{
              background: "#000",
              boxShadow:
                "0 0 15px 5px rgba(255,255,255,0.35), 0 0 30px 8px rgba(255,255,255,0.15)",
              width: "180px",
              height: "auto",
            }}
          />
        </div>
      ) : (
        <Image
          src="/app-store.png"
          alt="Get it on Google Play"
          width={180}
          height={54}
          className="block rounded-xl"
          style={{
            background: "#000",
            width: "180px",
            height: "auto",
          }}
        />
      )}

      {/* ── App Store ─────────────────────────────── */}
      {isGlow ? (
        <div
          style={{
            padding: "16px",
            border: "1px solid rgba(255,215,0,0.6)",
            display: "inline-block",
            background: "transparent",
          }}
        >
          <Image
            src="/images/app-store.png"
            alt="Download on the App Store"
            width={180}
            height={54}
            className="block rounded-xl"
            style={{
              background: "#000",
              boxShadow:
                "0 0 15px 5px rgba(255,255,255,0.35), 0 0 30px 8px rgba(255,255,255,0.15)",
              width: "180px",
              height: "auto",
            }}
          />
        </div>
      ) : (
        <Image
          src="/images/app-store.png"
          alt="Download on the App Store"
          width={180}
          height={54}
          className="block rounded-xl"
          style={{
            background: "#000",
            width: "180px",
            height: "auto",
          }}
        />
      )}

    </div>
  );
}