import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative pt-32 pb-12"
      style={{
        background: "linear-gradient(to top, #000000 0%, #05110B 50%, transparent 100%)",
      }}
    >
      <div className="max-w-[960px] mx-auto px-9">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">

          {/* ── Logo + tagline ── */}
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <h2 className="text-[24px] text-white/90 lowercase leading-none m-0">
              <span
                className="font-black tracking-[0.08em] text-white/90"
                style={{ fontFamily: "'Kallisto', sans-serif" }}
              >
                tinnitus
              </span>
              <span
                className="font-medium tracking-[0.08em] text-[#2D6CFF]"
                style={{ fontFamily: "'Kallisto', sans-serif" }}
              >
                relief
              </span>
            </h2>
            <p
              className="text-[10px] text-white/20 uppercase tracking-widest font-bold m-0"
              style={{ fontFamily: "'Seravek', sans-serif" }}
            >
              professional masking solution by earvana
            </p>
          </div>

          {/* ── Nav links ── */}
          <div
            className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[11px] font-medium text-white/40 uppercase tracking-widest text-center"
            style={{ fontFamily: "'Seravek', sans-serif" }}
          >
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-[#8FFF20] transition-colors uppercase tracking-widest no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/40 hover:text-[#8FFF20] transition-colors uppercase tracking-widest no-underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/faq"
              className="text-white/40 hover:text-[#8FFF20] transition-colors uppercase tracking-widest no-underline"
            >
              FAQ
            </Link>
          </div>

          {/* ── Copyright ── */}
          <p
            className="text-[10px] text-white/20 font-light m-0 text-center"
            style={{ fontFamily: "'Seravek', sans-serif" }}
          >
            © {currentYear} earvana labs. all rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}