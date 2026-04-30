"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import {
  StarIcon,
  ArrowRightIcon,
  ChartIcon,
  MegaphoneIcon,
  SparklesIcon,
  CalendarIcon,
  CheckIcon,
  UsersIcon,
  RocketIcon,
} from "@/components/Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: MegaphoneIcon,
    title: "Every platform, one team",
    body: "Instagram, Facebook, LinkedIn, TikTok. One strategy, consistently executed.",
  },
  {
    icon: ChartIcon,
    title: "Content that fits your brand",
    body: "We build a monthly calendar, design the visuals, write the copy. You approve and we post.",
  },
  {
    icon: SparklesIcon,
    title: "Numbers that mean something",
    body: "Monthly performance reports showing real growth, not just vanity metrics.",
  },
];

const STATS = [
  { end: 50, suffix: "+", label: "Clients served" },
  { end: 5, suffix: "×", label: "Avg engagement growth" },
  { end: 5, suffix: " wks", label: "Kickoff to first post" },
];

const STEPS = [
  { n: "01", title: "Onboarding", body: "We learn your brand, audience, and goals." },
  { n: "02", title: "Content Calendar", body: "Full calendar delivered on the 15th." },
  { n: "03", title: "You Approve", body: "30-minute check-in plus quick approvals in Monday.com." },
  { n: "04", title: "We Handle It", body: "We post, engage, and report back monthly." },
];

const WHY_BLOOM = [
  {
    icon: CalendarIcon,
    title: "Monthly content calendar",
    body: "Planned, written, and designed by the 15th.",
  },
  {
    icon: CheckIcon,
    title: "Easy monthly approval",
    body: "A 30-minute check-in plus a couple of quick reviews in Monday.com. About an hour a month.",
  },
  {
    icon: ChartIcon,
    title: "Real performance data",
    body: "Monthly reports connecting content to actual business goals.",
  },
  {
    icon: UsersIcon,
    title: "Community engagement",
    body: "We reply, engage, and build your audience daily.",
  },
  {
    icon: SparklesIcon,
    title: "Branded visual content",
    body: "Graphics, Reels, Shorts — designed in your brand voice.",
  },
  {
    icon: RocketIcon,
    title: "Live within 5 weeks",
    body: "From kickoff to published content in under a month.",
  },
];

const WHO_FOR = [
  {
    title: "Local businesses",
    body: "You know social matters but you don't have the time or team to do it well.",
  },
  {
    title: "Growth-stage companies",
    body: "You've outgrown DIY but aren't ready for a 6-person in-house team.",
  },
  {
    title: "B2B brands",
    body: "Your audience is on LinkedIn, Instagram, and more. You need to show up consistently.",
  },
];

const FAQS = [
  {
    q: "What platforms do you manage?",
    a: "Instagram, Facebook, LinkedIn, TikTok, and YouTube Shorts. We'll recommend what makes sense for your audience.",
  },
  {
    q: "How much of my time does this take?",
    a: "About an hour a month. A 30-minute check-in plus a couple of quick reviews in Monday.com to approve your content. We handle everything else.",
  },
  {
    q: "When do posts go live?",
    a: "Within 5 weeks of your kickoff call. We spend the first two weeks on strategy, then your first calendar is ready by the 15th.",
  },
  {
    q: "Do I own the content?",
    a: "Yes, 100%. Everything we create belongs to you.",
  },
];

const BUBBLES = [
  { size: 110, left: "8%",  delay: 0,    bg: "rgba(225,115,57,0.05)",  blur: 0 },
  { size: 80,  left: "22%", delay: -4,   bg: "rgba(255,255,255,0.05)", blur: 1 },
  { size: 140, left: "40%", delay: -8,   bg: "rgba(225,115,57,0.04)",  blur: 2 },
  { size: 70,  left: "57%", delay: -13,  bg: "rgba(255,255,255,0.04)", blur: 0 },
  { size: 100, left: "72%", delay: -6,   bg: "rgba(225,115,57,0.06)",  blur: 1 },
  { size: 90,  left: "88%", delay: -10,  bg: "rgba(255,255,255,0.05)", blur: 2 },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#004845]/30 last:border-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#003330] text-base leading-snug group-hover:text-[#e17339] transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#004845]/40 flex items-center justify-center transition-transform duration-300 ${
            open ? "rotate-45 bg-[#e17339] border-[#e17339]" : ""
          }`}
        >
          <svg
            className={`w-3 h-3 transition-colors ${open ? "text-white" : "text-[#004845]"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[#003330]/65 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SocialMediaLP() {
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
        source: "social_media_lp",
        extra: { platform: data.get("platform"), message: data.get("message") },
      }),
    });
    if (typeof window !== "undefined") {
      (window as any).dataLayer?.push({ event: "form_submission", formType: "social_media_lp" });
    }
    setFormLoading(false);
    setFormSubmitted(true);
  }

  return (
    <main className="overflow-x-hidden bg-[#0c0a14]">

      {/* Bubble keyframes */}
      <style>{`
        @keyframes bubble-rise {
          0%   { transform: translateY(0)   scale(1);    opacity: 0; }
          8%   { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1.12); opacity: 0; }
        }
        .bubble {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          animation: bubble-rise 16s ease-in infinite;
          pointer-events: none;
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════
          HERO — two-column
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
        {/* Orb — blue accent */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[100px] pointer-events-none"
          style={{ width: 340, height: 340, top: "42%", left: "38%", background: "rgba(49,150,205,0.14)" }}
          animate={prefersReduced ? {} : { x: [0, 18, -22, 10, 0], y: [0, -18, 10, -6, 0], scale: [1, 1.1, 0.9, 1.05, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Ghost B mark — behind right column */}
        <motion.div
          aria-hidden="true"
          className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[640px] pointer-events-none select-none z-[2]"
          style={{ opacity: 0.10, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.10 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Floating speech bubbles */}
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              background: b.bg,
              filter: b.blur ? `blur(${b.blur}px)` : undefined,
              animationDelay: `${b.delay}s`,
              animationDuration: `${14 + i * 2}s`,
            }}
          />
        ))}

        {/* Hero content — two columns */}
        <div className="relative z-[3] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT COL ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06] text-white/55 text-xs font-semibold tracking-widest uppercase mb-10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#e17339] animate-pulse" />
                Social Media Management
              </motion.div>

              {/* Headline — word stagger */}
              <motion.h1
                className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold text-white leading-[1.04] tracking-tight mb-7"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.065, delayChildren: 0.2 } },
                }}
              >
                {["Social", "media", "done", "right,", "so", "you", "can", "focus", "on", "everything", "else."].map((word, i) => (
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

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.78 }}
                className="text-lg text-white/55 leading-relaxed mb-8"
              >
                Full-service content, community management, and monthly reporting across every platform that matters to your audience.
              </motion.p>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.92 }}
                className="flex flex-wrap gap-x-5 gap-y-3"
              >
                {/* Stars */}
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <StarIcon key={j} className="w-3.5 h-3.5 text-[#e17339]" filled />
                    ))}
                  </div>
                  <span className="text-white/50 text-xs font-medium">5 Google reviews</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#e17339] font-bold text-xs">50+</span>
                  <span className="text-white/50 text-xs">clients served</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white/50 text-xs">Women-owned · Grand Rapids, MI</span>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT COL — contact form card ── */}
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.72, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[4]"
            >
              <div className="bg-white/[0.06] border border-white/[0.10] rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-white font-bold text-xl mb-1">Get a Free Strategy Call</h2>
                <p className="text-white/45 text-sm mb-6">Tell us about your business and we'll reach out within one business day.</p>

                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Name + Company row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/55 text-xs font-semibold tracking-wide uppercase">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/55 text-xs font-semibold tracking-wide uppercase">Company *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Acme Co."
                        className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email + Phone row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/55 text-xs font-semibold tracking-wide uppercase">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/55 text-xs font-semibold tracking-wide uppercase">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(616) 555-0123"
                        className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/55 text-xs font-semibold tracking-wide uppercase">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us a bit about your goals…"
                      className="w-full bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#e17339]/60 focus:bg-white/[0.10] transition-all resize-none"
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
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e17339] text-white font-bold rounded-xl hover:bg-[#c8622a] active:scale-[0.98] transition-all text-sm mt-1 disabled:opacity-60"
                      >
                        {formLoading ? "Sending…" : "Book My Free Strategy Call"}
                        {!formLoading && <ArrowRightIcon className="w-4 h-4" />}
                      </button>
                      <p className="text-center text-white/30 text-xs">We respond within 1 business day.</p>
                    </>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
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
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What you get</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-[1.1]">
              Everything handled. Nothing half-done.
            </h2>
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
          <div className="grid grid-cols-3 gap-4 sm:gap-10 lg:divide-x lg:divide-white/[0.08]">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center lg:px-8"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
                <p className="text-white/40 text-xs leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHY BLOOM
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#001a19] relative overflow-hidden">
        {/* Ghost B — left */}
        <div
          aria-hidden="true"
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[40vw] max-w-[500px] pointer-events-none select-none"
          style={{ opacity: 0.06, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Why Bloom</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] max-w-2xl">
              What you get when you work with us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_BLOOM.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-[#e17339]/30 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#e17339]/10 text-[#e17339] flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1.5">{card.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
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
              First posts live within five weeks of kickoff.
            </h2>
          </motion.div>

          <div className="relative">
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
          WHO THIS IS FOR
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Who this is for</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0c0a14] leading-[1.08] max-w-2xl">
              Built for businesses that are done winging it on social
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {WHO_FOR.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="border border-[#0c0a14]/10 rounded-2xl p-7 bg-[#f8f8f6] hover:border-[#e17339]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#e17339] mb-5" />
                <h3 className="text-[#0c0a14] font-bold text-xl mb-3">{w.title}</h3>
                <p className="text-[#0c0a14]/55 text-sm leading-relaxed">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-bloom-light relative overflow-hidden">
        {/* Ghost B — right */}
        <div
          aria-hidden="true"
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[38vw] max-w-[460px] pointer-events-none select-none"
          style={{ opacity: 0.06, filter: "brightness(0) saturate(0)", mixBlendMode: "multiply" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003330] leading-[1.08]">
              Common questions
            </h2>
          </motion.div>

          <div className="divide-y divide-[#004845]/20 border border-[#004845]/15 rounded-2xl bg-white/50 px-7">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
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
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Stop guessing.
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
              Book a free 30-minute call. We will audit your social presence and show you exactly where the growth is.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004845] font-black text-lg rounded-xl hover:bg-[#f5f8f7] transition-colors shadow-2xl shadow-black/25"
            >
              Book your free call
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
