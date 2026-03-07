"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ── UPDATED SECTIONS — client content March 2026 ────────
const sections = [
  {
    number: "01",
    title: "Introduction",
    content:
      "At Earvana, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.",
  },
  {
    number: "02",
    title: "Data Collection",
    content: null,
    isDataCollection: true,
  },
  {
    number: "03",
    title: "Local Storage",
    content:
      "The app uses local storage on your mobile device to save your configuration and playback preferences. This data remains on your device and is deleted if you uninstall the application.",
  },
  {
    number: "04",
    title: "Third-Party Services",
    content:
      "We do not use any third-party analytics, tracking, or advertising services that collect data from our users.",
  },
  {
    number: "05",
    title: "Children's Privacy",
    content:
      "Tinnitus Relief does not knowingly collect information from children under the age of 13. Since we do not collect any user information, our app is safe for all ages in terms of data privacy.",
  },
  {
    number: "06",
    title: "Changes to This Policy",
    content:
      "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the application. You are advised to review this Privacy Policy periodically for any changes.",
  },
  {
    number: "07",
    title: "Contact Us",
    content: null,
    isContact: true,
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

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div className="px-6 pb-5">

          {/* ── Data Collection — two sub-sections ── */}
          {section.isDataCollection && (
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-[#8FFF20] font-bold text-[12px] uppercase tracking-[0.15em] mb-1 m-0"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  Non-Personal Content
                </p>
                <p
                  className="text-white/70 leading-relaxed text-[13px] m-0"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  The Earvana app is designed to function entirely offline. We do
                  not collect, store, or transmit any personal data such as your
                  name, email address, or location.
                </p>
              </div>
              <div>
                <p
                  className="text-[#8FFF20] font-bold text-[12px] uppercase tracking-[0.15em] mb-1 m-0"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  Usage Information
                </p>
                <p
                  className="text-white/70 leading-relaxed text-[13px] m-0"
                  style={{ fontFamily: "var(--font-seravek)" }}
                >
                  Any settings or preferences you adjust within the app (such as
                  sound levels or favorite sounds) are stored locally on your
                  device and are never shared with us or any third party.
                </p>
              </div>
            </div>
          )}

          {/* ── Contact ── */}
          {section.isContact && (
            <p
              className="text-white/70 leading-relaxed text-[13px] m-0"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              If you have any questions about this Privacy Policy, please contact
              us at{" "}
              <a
                href="mailto:privacy@tinnitusrelief.app"
                className="text-[#8FFF20] font-bold hover:underline"
              >
                privacy@tinnitusrelief.app
              </a>
            </p>
          )}

          {/* ── Regular content ── */}
          {section.content && (
            <p
              className="text-white/70 leading-relaxed text-[13px] m-0"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              {section.content}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────
export default function PrivacyPolicyPage() {
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
            privacy<br />
            <span className="text-[#8FFF20]">policy</span>
          </h1>
          <p
            className="mt-4 text-white/50 text-[14px] max-w-xl m-0"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            Last Updated: March 2026 — We keep things simple: no data collected,
            no tracking, no ads.
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
            TL;DR — Earvana does not collect, store, or share any personal
            information. All functionality works offline, and any settings are
            stored locally on your device only.
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
              href="mailto:privacy@tinnitusrelief.app"
              className="px-6 py-3 rounded-full bg-[#8FFF20] text-[#0E2A1F] font-bold text-[13px] hover:opacity-90 transition-opacity no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              privacy@tinnitusrelief.app
            </a>
            <Link
              href="/terms-of-service"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px] hover:border-[#8FFF20]/50 transition-colors no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              Terms of Service
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