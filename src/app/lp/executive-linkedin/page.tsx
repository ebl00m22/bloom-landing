"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import {
  StarIcon,
  ArrowRightIcon,
  PenIcon,
  ChartIcon,
  UsersIcon,
  LinkedInIcon,
  CheckIcon,
  MapPinIcon,
} from "@/components/Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: PenIcon,
    title: "Your voice, our words",
    body: "We study how you think and sound. Every post sounds like you wrote it — because it reflects your real perspective.",
  },
  {
    icon: UsersIcon,
    title: "One monthly review",
    body: "See your full content calendar on the 15th. Approve everything in 30 minutes. We handle the rest.",
  },
  {
    icon: ChartIcon,
    title: "Results you can measure",
    body: "Impressions, DMs, inbound leads. We report on what moves the needle — not vanity metrics.",
  },
];

const STATS = [
  { end: 50, suffix: "+", label: "Executives served" },
  { end: 12, suffix: "×", label: "Avg impressions growth" },
  { end: 30, suffix: " min", label: "Weekly time investment" },
];

const STEPS = [
  {
    n: "01",
    title: "Strategy Call",
    body: "We learn your voice, goals, and target audience. No templates — everything is built around you.",
  },
  {
    n: "02",
    title: "Monthly Calendar",
    body: "Full content plan delivered on the 15th. Every post mapped to your business objectives.",
  },
  {
    n: "03",
    title: "You Approve",
    body: "30 minutes in Monday.com. Review, edit, or approve. Your final say, always.",
  },
  {
    n: "04",
    title: "We Publish",
    body: "Posting, engagement, and monthly reporting. Done-for-you LinkedIn — no effort required.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Bloom transformed my LinkedIn from a digital resume into a genuine business development tool. More inbound conversations in 90 days than the previous two years combined.",
    name: "Michael R.",
    title: "CEO, Manufacturing Company",
  },
  {
    quote:
      "They captured my voice from day one. My own team asks if I wrote the posts myself. The quality is remarkable.",
    name: "Sarah T.",
    title: "Founder, HR Consulting",
  },
  {
    quote:
      "Three enterprise clients in six months, all from LinkedIn content Bloom created. The ROI is undeniable.",
    name: "David M.",
    title: "VP Sales, B2B SaaS",
  },
];

const NENA_BEFORE = [
  "5×/week posting schedule",
  "AI-generated generic content",
  "Flat engagement, no growth",
  "Hours wasted every week",
];

const NENA_AFTER = [
  "2×/week — focused, intentional",
  "Value-first, authentic content",
  "Inbound inquiries rolling in",
  "Time fully reclaimed",
];

const NENA_STATS = [
  { end: 127379, label: "Total Impressions", suffix: "" },
  { end: 4718, label: "Avg Impressions/Post", suffix: "" },
  { end: 1475, label: "Total Reactions", suffix: "" },
  { end: 314, label: "Total Comments", suffix: "" },
  { end: 54, label: "Reactions/Post", suffix: ".6" },
  { end: 47651, label: "Top Post Impressions", suffix: "" },
];

// ─── Floating Bubbles ─────────────────────────────────────────────────────────

const BUBBLES = [
  { size: 90,  left: "8%",  delay: "-2s",  duration: "11s", bg: "rgba(225,115,57,0.05)" },
  { size: 65,  left: "22%", delay: "-6s",  duration: "9s",  bg: "rgba(255,255,255,0.04)" },
  { size: 110, left: "38%", delay: "-4s",  duration: "13s", bg: "rgba(225,115,57,0.04)" },
  { size: 75,  left: "58%", delay: "-9s",  duration: "10s", bg: "rgba(255,255,255,0.05)" },
  { size: 95,  left: "74%", delay: "-3s",  duration: "12s", bg: "rgba(225,115,57,0.06)" },
  { size: 60,  left: "89%", delay: "-7s",  duration: "8s",  bg: "rgba(255,255,255,0.03)" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExecutiveLinkedInLP() {
  const prefersReduced = useReducedMotion();
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormLoading(true);
    const data = new FormData(e.currentTarget);
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        source: "executive_linkedin_lp",
        extra: { platform: data.get("platform"), message: data.get("message") },
      }),
    });
    setFormLoading(false);
    setFormSubmitted(true);
  }

  return (
    <main className="overflow-x-hidden bg-[#0c0a14]">
      <style>{`
        @keyframes bubble-rise {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-90vh) scale(0.85); opacity: 0; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════
          HERO — two-column with inline form
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-mesh relative min-h-[100svh] flex items-center overflow-hidden">
        <div className="noise-overlay opacity-[0.055]" aria-hidden="true" />

        {/* Orb — teal */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[120px] pointer-events-none"
          style={{ width: 620, height: 620, top: "-10%", right: "-6%", background: "#004845", opacity: 0.48 }}
          animate={prefersReduced ? {} : { x: [0, 38, -18, 0], y: [0, -28, 14, 0], scale: [1, 1.06, 0.97, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb — purple */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[140px] pointer-events-none"
          style={{ width: 500, height: 500, bottom: "-5%", left: "-5%", background: "#301730", opacity: 0.5 }}
          animate={prefersReduced ? {} : { x: [0, -24, 18, 0], y: [0, 20, -14, 0], scale: [1, 0.93, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Orb — orange accent */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[100px] pointer-events-none"
          style={{ width: 340, height: 340, top: "42%", left: "38%", background: "rgba(225,115,57,0.18)" }}
          animate={prefersReduced ? {} : { x: [0, 18, -22, 10, 0], y: [0, -18, 10, -6, 0], scale: [1, 1.1, 0.9, 1.05, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Floating speech bubbles */}
        {!prefersReduced && BUBBLES.map((b, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="absolute bottom-0 rounded-full pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              background: b.bg,
              backdropFilter: "blur(2px)",
              animation: `bubble-rise ${b.duration} linear ${b.delay} infinite`,
              zIndex: 1,
            }}
          />
        ))}

        {/* Ghost B mark — BEHIND the right column */}
        <div
          aria-hidden="true"
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[680px] pointer-events-none select-none"
          style={{ opacity: 0.09, filter: "brightness(0) invert(1)", mixBlendMode: "screen", zIndex: 2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        {/* Hero content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-24" style={{ zIndex: 3 }}>
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* ── Left column — copy ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] text-white/55 text-xs font-semibold tracking-widest uppercase mb-10"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#3196cd]" />
                Executive LinkedIn Management
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold text-white leading-[1.04] tracking-tight mb-7"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
                }}
              >
                {["Your", "LinkedIn", "should", "be", "working", "as", "hard", "as", "you", "do."].map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.22em] last:mr-0"
                    variants={{
                      hidden:  { opacity: 0, y: 48, filter: "blur(7px)" },
                      visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.72 }}
                className="text-lg md:text-xl text-white/55 leading-relaxed mb-10"
              >
                We write, schedule, and publish your LinkedIn content in your voice. You review once a month. We handle everything else.
              </motion.p>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col gap-3"
              >
                {/* 5 star Google */}
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="w-4 h-4 text-[#e17339]" filled />
                    ))}
                  </div>
                  <span className="text-white/50 text-sm">5.0 on Google Reviews</span>
                </div>
                {/* 50+ executives */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e17339]/15 text-[#e17339] flex items-center justify-center flex-shrink-0">
                    <UsersIcon className="w-3 h-3" />
                  </div>
                  <span className="text-white/50 text-sm">50+ executives served</span>
                </div>
                {/* Grand Rapids */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#e17339]/15 text-[#e17339] flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-3 h-3" />
                  </div>
                  <span className="text-white/50 text-sm">Based in Grand Rapids, MI</span>
                </div>
              </motion.div>
            </div>

            {/* ── Right column — inline contact form ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
              style={{ zIndex: 4 }}
            >
              <div className="bg-white/[0.06] border border-white/[0.10] rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-white mb-1">Book a Free Strategy Call</h2>
                <p className="text-white/40 text-sm mb-7">Tell us about your goals and we will show you what is possible.</p>

                <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Company</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                    />
                  </div>

                  {/* Platform */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">What platform are you focused on?</label>
                    <select name="platform" className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all appearance-none" style={{ color: "rgba(255,255,255,0.85)" }}>
                      <option value="" style={{ background: "#1a1527" }}>Select a platform</option>
                      <option value="linkedin" style={{ background: "#1a1527" }}>LinkedIn</option>
                      <option value="instagram" style={{ background: "#1a1527" }}>Instagram</option>
                      <option value="facebook" style={{ background: "#1a1527" }}>Facebook</option>
                      <option value="multiple" style={{ background: "#1a1527" }}>Multiple Platforms</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Tell us about your goals</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="I want to grow my LinkedIn presence and generate more inbound leads..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.08] border border-white/[0.10] text-white placeholder-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  {formSubmitted ? (
                    <div className="text-center py-2">
                      <p className="text-[#e17339] font-semibold text-sm">✓ Got it! We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="w-full py-3.5 bg-[#e17339] hover:bg-[#c8622a] text-white font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 mt-1 disabled:opacity-60"
                      >
                        {formLoading ? "Sending…" : "Book My Free Strategy Call"}
                        {!formLoading && <ArrowRightIcon className="w-4 h-4" />}
                      </button>
                      <p className="text-white/30 text-xs text-center">We respond within 1 business day. No obligation.</p>
                    </>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SOCIAL PROOF STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white/[0.025] border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm font-semibold">
            <span>Trusted by executives across the Midwest</span>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <span>5.0 ★ Google Reviews</span>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <span>50+ clients served</span>
            <span className="hidden sm:block w-px h-4 bg-white/15" />
            <span>Grand Rapids, MI</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BENEFITS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0c0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Why it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-[1.1]">
              Your brand. Our execution. No guessing.
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-2xl leading-relaxed">
              Most LinkedIn ghostwriting services hand you templates and call it strategy. We go deeper — learning the nuances of how you communicate and why your audience should care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e17339]/10 text-[#e17339] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{b.body}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Extra value props */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              "No long-term contracts",
              "Onboarding in 5 business days",
              "Dedicated content strategist",
              "Monthly analytics report",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <CheckIcon className="w-4 h-4 text-[#00c49a] flex-shrink-0" />
                <span className="text-white/55 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#002422] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[36vw] max-w-[440px] pointer-events-none select-none"
          style={{ opacity: 0.07, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white/30 text-xs font-bold tracking-[0.25em] uppercase mb-10"
          >
            By the numbers
          </motion.p>
          <div className="grid grid-cols-3 gap-10 lg:divide-x lg:divide-white/[0.08]">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:px-8"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-white/40 text-xs leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0c0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] max-w-lg">
              From kickoff to live posts in five weeks.
            </h2>
            <p className="text-white/40 text-base mt-4 max-w-lg leading-relaxed">
              We keep it simple. No overwhelming onboarding. Just a clear, repeatable process that runs in the background while you focus on your business.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[9px] left-[3.5%] right-[3.5%] h-px bg-white/[0.08]" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="hidden lg:block w-[18px] h-[18px] rounded-full border-2 border-[#e17339] bg-[#0c0a14] mb-8 relative z-10" />
                  <p className="text-[#e17339] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">{step.n}</p>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          NENA SHIMP CASE STUDY
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#001a19] relative overflow-hidden">
        {/* Background texture */}
        <div className="noise-overlay opacity-[0.04]" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #004845 0%, transparent 70%)", opacity: 0.4 }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, #e17339 0%, transparent 70%)", opacity: 0.08 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow + heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-[#00c49a] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Client Results</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] mb-4">
              Less content. More impact. Better results.
            </h2>
            <p className="text-white/50 text-base leading-relaxed">
              Nena Shimp came to Bloom posting 5&times; a week with flat engagement. Here&apos;s what happened in her first 90 days.
            </p>
          </motion.div>

          {/* Client bio strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 mb-12 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07] w-fit"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#004845] to-[#001a19] border border-white/20 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
              NS
            </div>
            <div>
              <p className="text-white font-bold text-sm">Nena Shimp</p>
              <p className="text-white/40 text-xs">Change Consultant &amp; Keynote Speaker · Organizational Transformation</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">

            {/* ── Left: Before / After ── */}
            <div className="flex flex-col gap-5">

              {/* BEFORE */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-7 border"
                style={{ background: "rgba(80,20,20,0.35)", borderColor: "rgba(180,60,60,0.2)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 rounded-full bg-red-900/40 border border-red-800/30 text-red-400 text-[10px] font-bold tracking-widest uppercase">Before</span>
                </div>
                <div className="flex flex-col gap-3">
                  {NENA_BEFORE.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-900/50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AFTER */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-7 border"
                style={{ background: "rgba(0,60,50,0.5)", borderColor: "rgba(0,196,154,0.25)" }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="px-2.5 py-1 rounded-full bg-[#00c49a]/10 border border-[#00c49a]/20 text-[#00c49a] text-[10px] font-bold tracking-widest uppercase">After — 90 Days</span>
                </div>
                <div className="flex flex-col gap-3">
                  {NENA_AFTER.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#00c49a]/15 flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-[#00c49a]" />
                      </span>
                      <span className="text-white/80 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Business impact pills */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex flex-wrap gap-2.5 mt-1"
              >
                <span className="px-4 py-2 rounded-full bg-[#e17339]/10 border border-[#e17339]/20 text-[#e17339] text-xs font-semibold">Full speaking calendar</span>
                <span className="px-4 py-2 rounded-full bg-[#e17339]/10 border border-[#e17339]/20 text-[#e17339] text-xs font-semibold">Inbound inquiries</span>
                <span className="px-4 py-2 rounded-full bg-[#e17339]/10 border border-[#e17339]/20 text-[#e17339] text-xs font-semibold">Time reclaimed</span>
              </motion.div>
            </div>

            {/* ── Right: Stats grid ── */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {NENA_STATS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 22, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-[#00c49a]/30 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-black text-white mb-1 leading-none">
                      <CountUp
                        end={s.end}
                        suffix={s.suffix}
                        duration={2200}
                        className="tabular-nums"
                      />
                    </div>
                    <p className="text-white/40 text-xs leading-snug">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Top post callout */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="rounded-2xl p-5 border border-[#00c49a]/20 bg-[#00c49a]/[0.05] flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-xl bg-[#00c49a]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#00c49a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Top-performing post</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    47,651 impressions &middot; 294 reactions &middot; 39 comments — from a single piece of value-first content.
                  </p>
                </div>
              </motion.div>

              {/* 27 posts note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-white/30 text-xs text-center"
              >
                27 posts published over 90 days (2&times;/week cadence)
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0c0a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What clients say</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Real results. Real people.</h2>
            <p className="text-white/40 text-base mt-4 max-w-xl leading-relaxed">
              We let the outcomes speak. Every client relationship is built on transparency and genuine results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-white/[0.14] transition-colors duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-3.5 h-3.5 text-[#e17339]" filled />
                  ))}
                </div>
                <p className="text-white/65 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHO THIS IS FOR
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#09080f] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Is this right for you?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-[1.1]">
              Built for leaders who are already busy.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { yes: true, text: "You are a founder, executive, or speaker who wants LinkedIn to work for you" },
              { yes: true, text: "You know your content matters but have no time to do it consistently" },
              { yes: true, text: "You want authentic content that actually sounds like you" },
              { yes: true, text: "You want one point of contact and a simple monthly process" },
              { yes: false, text: "You want to micromanage every word of every post" },
              { yes: false, text: "You expect overnight results with zero strategy" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`flex items-start gap-3 px-5 py-4 rounded-xl border ${item.yes ? "bg-white/[0.02] border-white/[0.06]" : "bg-red-900/[0.08] border-red-900/20 opacity-60"}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.yes ? "bg-[#00c49a]/15" : "bg-red-900/30"}`}>
                  {item.yes ? (
                    <CheckIcon className="w-3 h-3 text-[#00c49a]" />
                  ) : (
                    <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </span>
                <span className="text-white/55 text-sm leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#004845] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.11, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-white/40 text-xs font-bold tracking-[0.25em] uppercase mb-5">Ready to grow?</p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Your LinkedIn.<br />Our execution.
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
              Book a free 30-minute call. We will look at your LinkedIn and show you exactly what is possible — no pressure, no pitch deck.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004845] font-black text-lg rounded-xl hover:bg-[#f5f8f7] transition-colors shadow-2xl shadow-black/25"
              >
                Book your free call
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <p className="text-white/40 text-sm">No commitment. Just a conversation.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
