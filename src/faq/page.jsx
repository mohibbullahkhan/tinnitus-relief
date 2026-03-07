"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqSections = [
  {
    title: "General Questions",
    items: [
      { q: "What is Tinnitus Relief?", a: "Tinnitus Relief is a mobile app designed to help manage tinnitus symptoms through sound therapy. The app provides a variety of soothing sounds and white noise tracks that can help mask tinnitus sounds and provide relief." },
      { q: "How does sound therapy help with tinnitus?", a: "Sound therapy works by providing external sounds that can mask or distract from the ringing, buzzing, or other sounds caused by tinnitus. This can help reduce the perceived intensity of tinnitus and make it less bothersome over time." },
      { q: "Is this app a cure for tinnitus?", a: "No. Tinnitus Relief is a management tool, not a cure. While it may help reduce symptoms and provide comfort, it does not treat the underlying causes of tinnitus. Always consult with a healthcare professional for medical advice." },
    ],
  },
  {
    title: "Using the App",
    items: [
      { q: "What sound options are available?", a: "The app includes White Noise (Standard & WAV), Rain (Light & Medium), Storm (Light & Active), River & Stream, Wind, Crickets, and Ocean Ambient Audio — all designed to provide effective tinnitus masking." },
      { q: "How do I adjust the volume?", a: "Use the vertical slider on the right side of the screen (drag up or down), or use the dot volume meter at the bottom — tap or drag to select your desired level." },
      { q: "Can I play sounds continuously?", a: "Yes! Choose Continuous Mode for indefinite playback, or Timer Mode to automatically stop after 5, 10, 15, 30, 45, or 60 minutes." },
      { q: "Can I use the app while doing other activities?", a: "Yes! The app plays in the background, so you can use other apps, lock your phone, or let it run while you sleep." },
    ],
  },
  {
    title: "Technical Questions",
    items: [
      { q: "Does the app require an internet connection?", a: "No. All sounds are stored locally on your device, so the app works completely offline after installation." },
      { q: "Does the app collect my personal data?", a: "No. Tinnitus Relief does not collect, store, or share any personal information. The app works entirely on your device with no external data transmission." },
      { q: "How much storage does the app require?", a: "The app requires approximately 50–100 MB of storage space for the application and all audio files." },
    ],
  },
  {
    title: "Device & Compatibility",
    items: [
      { q: "Which devices are supported?", a: "Tinnitus Relief works on Android 5.0 (Lollipop) and above, iOS 11.0 and above, on both smartphones and tablets." },
      { q: "Can I use the app with headphones?", a: "Yes! The app works with wired headphones/earbuds, Bluetooth headphones, device speakers, and external speakers." },
      { q: "Will the app drain my battery?", a: "The app is optimized for battery efficiency. Using the timer feature can help conserve battery life when playing for extended periods." },
    ],
  },
  {
    title: "Best Practices",
    items: [
      { q: "How should I use the app for best results?", a: "Start at low volume and gradually adjust. Experiment with different sounds to find what works for you. Consistent regular use tends to provide better long-term relief." },
      { q: "What volume level should I use?", a: "Set the volume just below the level where you can clearly hear your tinnitus. It should be comfortable — loud enough to provide masking but not so loud it's uncomfortable." },
      { q: "Can I use the app while sleeping?", a: "Yes! Many users find it helpful for sleep. Use the timer to set a duration, or continuous mode if you prefer sound throughout the night." },
    ],
  },
  {
    title: "Account & Subscription",
    items: [
      { q: "Do I need to create an account?", a: "No account required. Simply download and start using the app immediately." },
      { q: "Is the app free?", a: "Yes, completely free with no ads or in-app purchases." },
      { q: "Are there any in-app purchases?", a: "Currently, all features are included with no additional purchases required." },
    ],
  },
  {
    title: "Support & Feedback",
    items: [
      { q: "How do I report a bug or issue?", a: "Please contact us at support@tinnitusrelief.app with a description of the issue, your device model and OS version, and steps to reproduce the problem." },
      { q: "How can I request a new feature or sound?", a: "We love hearing from our users! Send your suggestions to feedback@tinnitusrelief.app. We carefully consider all feedback for future updates." },
    ],
  },
  {
    title: "Safety & Health",
    items: [
      { q: "Are there any safety concerns I should know about?", a: "Never use at excessively high volumes — this can damage hearing. If you experience pain, discomfort, or worsening symptoms, stop using the app and consult a healthcare professional." },
      { q: "Can children use this app?", a: "While the app is generally safe, we recommend adult supervision for children. Ensure volume levels are safe and appropriate." },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border mt-[200px] border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: open ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span
          className="text-white font-bold leading-snug text-[14px]"
          style={{ fontFamily: "var(--font-seravek)" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-[#8FFF20]/50 flex items-center justify-center text-lg font-bold transition-all duration-300"
          style={{
            background: open ? "#8FFF20" : "transparent",
            color: open ? "#0E2A1F" : "#8FFF20",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            lineHeight: 1,
            borderColor: open ? "#8FFF20" : "rgba(143,255,32,0.5)",
          }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p
          className="px-6 pb-5 text-white/70 leading-relaxed text-[13px] m-0"
          style={{ fontFamily: "var(--font-seravek)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-[960px] mx-auto px-9 pt-12 pb-24 ">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#8FFF20] hover:text-[#8FFF20]/80 transition-colors mb-10 font-bold text-[13px] no-underline group"
          style={{ fontFamily: "var(--font-seravek)" }}
        >
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span>
          Back to Home
        </Link>

        {/* Page heading */}
        <div className="mb-12">
          <h1
            className="text-[56px] md:text-[72px] font-black text-white lowercase tracking-tight leading-none m-0"
            style={{ fontFamily: "var(--font-kallisto)" }}
          >
            frequently<br />
            <span className="text-[#8FFF20]">asked</span> questions
          </h1>
          <p
            className="mt-4 text-white/50 text-[14px] max-w-xl m-0"
            style={{ fontFamily: "var(--font-seravek)" }}
          >
            Everything you need to know about Tinnitus Relief — from setup to sound therapy best practices.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-[11px] font-bold text-[#8FFF20] uppercase tracking-[0.25em] mb-4 m-0"
                style={{ fontFamily: "var(--font-seravek)" }}
              >
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="rounded-3xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <div>
            <p
              className="text-white font-black text-[22px] lowercase tracking-tight m-0"
              style={{ fontFamily: "var(--font-kallisto)" }}
            >
              Still have questions?
            </p>
            <p
              className="text-white/50 text-[13px] mt-1 m-0"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              Our team is happy to help.
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
              href="/terms-of-service"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-bold text-[13px] hover:border-[#8FFF20]/50 transition-colors no-underline"
              style={{ fontFamily: "var(--font-seravek)" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}