"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ── UPDATED SECTIONS — client content ───────────────────
const sections = [
  {
    number: "01",
    title: "Terms of Service",
    content:
      "By accessing the Earvana application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
  },
  {
    number: "02",
    title: "Use License",
    content:
      "Permission is granted to temporarily download one copy of the materials (information or software) on Tinnitus Relief's application for personal, non-commercial transitory viewing only.",
  },
  {
    number: "03",
    title: "Disclaimer & Health Warning",
    content:
      "The materials on Earvana's app are provided on an 'as is' basis. Earvana makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    isMedical: true,
  },
  {
    number: "04",
    title: "Limitations",
    content:
      "In no event shall Earvana or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Earvana's app.",
  },
  {
    number: "05",
    title: "Accuracy of Materials",
    content:
      "The materials appearing on Earvana's app could include technical, typographical, or photographic errors. Earvana does not warrant that any of the materials on its app are accurate, complete or current. Earvana may make changes to the materials contained on its app at any time without notice.",
  },
  {
    number: "06",
    title: "Links",
    content:
      "Earvana has not reviewed all of the sites linked to its app and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Earvana of the site. Use of any such linked website is at the user's own risk.",
  },
  {
    number: "07",
    title: "Modifications",
    content:
      "Earvana may revise these terms of service for its app at any time without notice. By using this app you are agreeing to be bound by the then current version of these terms of service.",
  },
  {
    number: "08",
    title: "Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
  },
];

// ── ACCORDION ITEM ───────────────────────────────────────
function SectionItem({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: open ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)" }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <div className="flex items-center gap-4">
          <span
            className="text-[#8FFF20]/40 font-black text-[13px] tracking-widest"
            style={{ fontFamily: "var(--font-kallisto)" }}
          >
            {section.number}
          </span>
          <span
            className="text-white font-bold leading-snug text-[14px]"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            {section.title}
          </span>
        </div>

        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[#8FFF20]/50 flex items-center justify-center text-lg font-bold transition-all duration-300"
          style={{
            background: open ? "#8FFF20" : "transparent",
            color: open ? "#0E2A1F" : "#8FFF20",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "600px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5 flex flex-col gap-4">

          {/* Medical disclaimer block — section 03 only */}
          {section.isMedical && (
            <div
              className="p-4 rounded-xl border border-red-500/20"
              style={{ background: "rgba(239,68,68,0.08)" }}
            >
              <p
                className="text-red-400 font-bold uppercase tracking-tight text-[11px] mb-2 m-0"
                style={{ fontFamily: "var(--font-seravek)" }}
              >
                ⚠️ Medical Disclaimer
              </p>
              <p
                className="text-red-300/80 text-[13px] leading-relaxed italic m-0"
                style={{ fontFamily: "var(--font-seravek)" }}
              >
                The content within this Earvana application is for informational
                and relaxation purposes only. It is not intended to be a
                substitute for professional medical advice, diagnosis, or
                treatment. Always seek the advice of your physician or other
                qualified health provider with any questions you may have
                regarding a medical condition.
              </p>
            </div>
          )}

          {/* Main content text */}
          <p
            className="text-white/70 leading-relaxed text-[13px] m-0"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            {section.content}
          </p>

        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────
export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full">
        <Header></Header>
      <div className="max-w-[960px] mx-auto px-9 pt-12 pb-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8FFF20] hover:text-[#8FFF20]/80 transition-colors mb-10 font-bold text-[13px] no-underline group"
          style={{ fontFamily: "var(--font-seravek)" }}
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">
            ←
          </span>
          Back to Home
        </Link>

        {/* Page heading */}
        <div className="mb-12">
          <h1
            className="text-[56px] md:text-[72px] font-black text-white lowercase tracking-tight leading-none m-0"
            style={{ fontFamily: "var(--font-kallisto)" }}
          >
            terms of<br />
            <span className="text-[#8FFF20]">service</span>
          </h1>
          <p
            className="mt-4 text-white/50 text-[14px] max-w-xl m-0"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            Last Updated: March 2026 — Please read these terms carefully before
            using the app.
          </p>
        </div>

        {/* TL;DR highlight card */}
        <div
          className="mb-10 rounded-2xl border border-[#8FFF20]/20 px-8 py-6"
          style={{ background: "rgba(143,255,32,0.08)" }}
        >
          <p
            className="text-[#8FFF20] font-bold leading-relaxed text-[14px] m-0"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            TL;DR — By using Earvana, you agree to use it for personal purposes
            only. This app is not a medical device and does not replace
            professional healthcare advice. Use at your own discretion.
          </p>
        </div>

        {/* Accordion sections */}
        <div className="max-w-3xl flex flex-col gap-3 mb-16">
          {sections.map((section) => (
            <SectionItem key={section.number} section={section} />
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="max-w-3xl rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div>
            <p
              className="text-white font-black text-[22px] lowercase tracking-tight m-0"
              style={{ fontFamily: "var(--font-kallisto)" }}
            >
              Have more questions?
            </p>
            <p
              className="text-white/50 text-[13px] mt-1 m-0"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              We&apos;re happy to clarify anything.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="mailto:support@tinnitusrelief.app"
              className="px-6 py-3 rounded-full bg-[#8FFF20] text-[#0E2A1F] font-bold text-[13px] hover:opacity-90 transition-opacity no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              support@tinnitusrelief.app
            </a>
            <Link
              href="/privacy-policy"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px] hover:border-[#8FFF20]/50 transition-colors no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px] hover:border-[#8FFF20]/50 transition-colors no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              FAQ
            </Link>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  );
}