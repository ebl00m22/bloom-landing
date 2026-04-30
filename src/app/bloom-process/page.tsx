"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, RocketIcon } from "@/components/Icons";

// ─── Phase data ────────────────────────────────────────────────────────────

const phases = [
  {
    letter: "B",
    rest: "EGIN",
    label: "Strategy Alignment",
    timing: "First 30 days",
    timingVariant: "green" as const,
    description:
      "We start by getting to know you — your brand, your audience, your voice, and your goals. This is where strategy is built from the ground up, not borrowed from a template.",
    bullets: [
      "Meet the team & key stakeholders",
      "Define your brand pillars & voice",
      "Build the initial content strategy",
      "Connect and audit all accounts",
    ],
  },
  {
    letter: "L",
    rest: "AUNCH",
    label: "Go Live",
    timing: "First 30 days",
    timingVariant: "green" as const,
    description:
      "Your content calendar goes live. Every post is written in your voice, designed to fit your brand, and scheduled with intention. No guessing. No scrambling.",
    bullets: [
      "Create a full content calendar",
      "Write copy & design visuals",
      "Capture authentic media",
      "Schedule posts across platforms",
    ],
  },
  {
    letter: "O",
    rest: "BSERVE",
    label: "Review & Refine",
    timing: "Every 90 days",
    timingVariant: "orange" as const,
    description:
      "We watch what's working and what's not. Reach, engagement, shareability, and audience feedback all feed into how we adjust your strategy going forward.",
    bullets: [
      "Analyze reach & impressions",
      "Review engagement metrics",
      "Measure shareability signals",
      "Collect & review audience feedback",
    ],
  },
  {
    letter: "O",
    rest: "PTIMIZE",
    label: "Strengthen Presence",
    timing: "Every 90 days",
    timingVariant: "orange" as const,
    description:
      "We double down on what's working and evolve what isn't. Your messaging gets sharper, your content more targeted, your presence more powerful.",
    bullets: [
      "Evolve your storytelling approach",
      "Continue to test new formats",
      "Lean into proven successes",
      "Enhance & sharpen messaging",
    ],
  },
  {
    letter: "M",
    rest: "EASURE",
    label: "Track & Grow",
    timing: "Every 90 days",
    timingVariant: "orange" as const,
    description:
      "Every 90 days, you get a clear picture of where you've been and where you're going. Data-backed recommendations, aligned to your actual business goals.",
    bullets: [
      "Quarterly strategy review sessions",
      "Monthly analytics deep-dive",
      "Recommend next steps & pivots",
      "Align goals for the next quarter",
    ],
  },
];

// ─── Hero animated letters ─────────────────────────────────────────────────

function BloomHeroLetters() {
  const letters = ["B", ".", "L", ".", "O", ".", "O", ".", "M", "."];

  return (
    <div className="flex items-baseline gap-0 leading-none select-none whitespace-nowrap" aria-label="B.L.O.O.M.">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.75,
            delay: 0.3 + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={
            char === "."
              ? "text-[5.5vw] sm:text-[7vw] md:text-[8vw] text-bloom-green/40 font-extrabold tracking-tight"
              : "text-[10.5vw] sm:text-[13vw] md:text-[15vw] text-bloom-green font-extrabold tracking-tight"
          }
          style={{ lineHeight: 0.9 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

// ─── Timing header bar ─────────────────────────────────────────────────────

function TimingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.3 }}
      className="mt-10 max-w-3xl mx-auto"
      aria-hidden="true"
    >
      <div className="flex items-start gap-0">
        {/* First 30 days — B + L */}
        <div className="flex-[2] flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-bloom-green/70 whitespace-nowrap">
            ── First 30 days ──
          </span>
          <div className="w-full border-t border-dashed border-bloom-green/30" />
        </div>

        <div className="w-px h-6 bg-white/10 mt-5 mx-3" />

        {/* Every 90 days — O + O + M */}
        <div className="flex-[3] flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-bloom-orange/70 whitespace-nowrap">
            ────── Every 90 days ──────
          </span>
          <div className="w-full border-t border-dashed border-bloom-orange/30" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Single phase band ─────────────────────────────────────────────────────

function PhaseBand({
  phase,
  index,
  isActive,
  bandRef,
}: {
  phase: (typeof phases)[0];
  index: number;
  isActive: boolean;
  bandRef: (el: HTMLDivElement | null) => void;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      ref={bandRef}
      className="relative py-20 overflow-hidden transition-all duration-500"
      style={{
        borderLeft: isActive ? "4px solid #e17339" : "4px solid transparent",
      }}
    >
      {/* Giant watermark letter */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center pointer-events-none select-none"
        style={{ justifyContent: isEven ? "flex-end" : "flex-start" }}
      >
        <span
          className="font-extrabold leading-none transition-all duration-700"
          style={{
            fontSize: "clamp(180px, 26vw, 360px)",
            color: isActive ? "rgba(0,72,69,0.18)" : "rgba(0,72,69,0.05)",
            lineHeight: 1,
            userSelect: "none",
            paddingRight: isEven ? "2vw" : undefined,
            paddingLeft: isEven ? undefined : "2vw",
          }}
        >
          {phase.letter}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}
        >
          {/* Text block */}
          <div className="flex-1 max-w-xl">
            {/* Timing badge */}
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 ${
                phase.timingVariant === "green"
                  ? "bg-bloom-green/[0.08] text-bloom-green border border-bloom-green/15"
                  : "bg-bloom-orange/10 text-bloom-orange border border-bloom-orange/20"
              }`}
            >
              {phase.timing}
            </span>

            {/* Phase label */}
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-bloom-orange mb-2">
              {phase.label}
            </p>

            {/* Big letter + rest */}
            <h2
              className={`text-5xl md:text-6xl font-extrabold leading-tight mb-5 transition-colors duration-500 ${
                isActive ? "text-bloom-orange" : "text-gray-900"
              }`}
            >
              <span className="text-bloom-green">{phase.letter}</span>
              {phase.rest}
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-8">{phase.description}</p>

            {/* Bullet list */}
            <ul className="space-y-3">
              {phase.bullets.map((bullet, j) => (
                <li key={j} className="flex items-start gap-3 text-gray-700 text-base">
                  <span className="shrink-0 mt-0.5 text-bloom-orange">
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Phase number accent */}
          <div className="hidden lg:flex flex-col items-center gap-3 shrink-0">
            <div
              className={`w-20 h-20 rounded-3xl flex items-center justify-center font-extrabold text-2xl text-white transition-all duration-500 ${
                isActive
                  ? "bg-bloom-orange shadow-lg shadow-bloom-orange/30"
                  : "bg-bloom-green/80"
              }`}
            >
              0{index + 1}
            </div>
            <div
              className={`h-16 w-0.5 rounded-full transition-all duration-500 ${
                isActive ? "bg-bloom-orange/40" : "bg-bloom-green/15"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Five phases section ───────────────────────────────────────────────────

function PhasesSection() {
  const [activePhase, setActivePhase] = useState(-1);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = phaseRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActivePhase(i);
          }
        },
        { threshold: 0, rootMargin: "-20% 0px -55% 0px" }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center pt-24 pb-12"
      >
        <p className="text-sm font-bold tracking-widest uppercase text-bloom-orange mb-3">
          The Framework
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight">
          Five Stages. One System.
        </h2>
      </motion.div>

      <div className="divide-y divide-gray-100">
        {phases.map((phase, i) => (
          <PhaseBand
            key={i}
            phase={phase}
            index={i}
            isActive={activePhase === i}
            bandRef={(el) => {
              phaseRefs.current[i] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function BloomProcessPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="hero-mesh relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: "#0c0a14" }}
      >
        <div className="noise-overlay opacity-[0.055] z-[1]" aria-hidden="true" />

        {/* Ambient glow blobs */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[160px] pointer-events-none z-[1]"
          style={{
            width: 650,
            height: 650,
            top: "-15%",
            right: "-10%",
            backgroundColor: "#004845",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[150px] pointer-events-none z-[1]"
          style={{
            width: 450,
            height: 450,
            bottom: "-12%",
            left: "-8%",
            backgroundColor: "#2a0a3a",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[120px] pointer-events-none z-[1]"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "30%",
            backgroundColor: "#004845",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        <div className="relative z-[3] max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs font-bold tracking-[0.25em] uppercase text-bloom-orange mb-8"
          >
            The Bloom Proven Process
          </motion.p>

          {/* B.L.O.O.M. badge top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-bloom-green/[0.12] border border-bloom-green/25 rounded-full mb-6"
          >
            <span className="text-xs font-bold tracking-widest text-bloom-green">
              B.L.O.O.M.©
            </span>
          </motion.div>

          {/* Giant animated letters */}
          <BloomHeroLetters />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-xl md:text-2xl text-white/60 font-semibold mt-6 mb-3"
          >
            Five intentional stages. One proven system.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-base text-white/40 max-w-2xl leading-relaxed"
          >
            This isn&apos;t a one-person process. It&apos;s a proven system — built on EOS,
            operating in 90-day worlds, with transparent scorecards and quarterly rocks.
          </motion.p>

          {/* Timing grouping visual */}
          <TimingHeader />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FIVE PHASES
      ════════════════════════════════════════════════════════════════ */}
      <PhasesSection />

      {/* ═══════════════════════════════════════════════════════════════
          PULL QUOTE
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#001a19] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-bloom-green/30 text-8xl font-serif leading-none mb-6 select-none">
              &ldquo;
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-[1.4] max-w-3xl mx-auto">
              At Bloom Social, we&apos;ve built a proven system that transforms social media from a
              time-consuming task into a strategic growth engine for your brand.
            </p>
            <div className="mt-10 w-16 h-0.5 bg-bloom-orange mx-auto" />
            <p className="mt-5 text-white/35 text-sm font-semibold tracking-widest uppercase">
              The B.L.O.O.M. Framework
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-green relative overflow-hidden py-24 md:py-32">
        {/* Watermark B mark */}
        <div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[42vw] max-w-[540px] pointer-events-none select-none"
          style={{
            opacity: 0.12,
            filter: "brightness(0) invert(1)",
            mixBlendMode: "screen",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bloom-social-b-mark-bg.png"
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-bloom-orange mb-4">
              Ready to Start?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to start your B.L.O.O.M. journey?
            </h2>
            <p className="text-white/65 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy session. We&apos;ll learn about your goals, show you what&apos;s
              possible, and walk you through exactly how the B.L.O.O.M. framework applies to your
              brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-full text-lg transition-all duration-200 shadow-xl shadow-bloom-orange/30 hover:-translate-y-0.5"
              >
                Book a Free Strategy Session <ArrowRightIcon />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/[0.10] border border-white/20 hover:bg-white/[0.18] text-white font-semibold rounded-full text-lg transition-all duration-200"
              >
                <RocketIcon className="w-5 h-5" />
                See Our Full Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
