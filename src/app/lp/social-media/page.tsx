"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import {
  StarIcon,
  ArrowRightIcon,
  ChartIcon,
  CameraIcon,
  MegaphoneIcon,
  SparklesIcon,
} from "@/components/Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: MegaphoneIcon,
    title: "Every platform, one team",
    body: "Instagram, Facebook, LinkedIn, TikTok. One strategy, consistently executed.",
  },
  {
    icon: CameraIcon,
    title: "Content that fits your brand",
    body: "We build a monthly calendar, design the visuals, write the copy. You approve and we post.",
  },
  {
    icon: ChartIcon,
    title: "Numbers that mean something",
    body: "Monthly performance reports showing real growth, not just vanity metrics.",
  },
];

const STATS = [
  { end: 50, suffix: "+", label: "Clients served" },
  { end: 5, suffix: "×", label: "Avg engagement growth" },
  { end: 2, suffix: " wks", label: "Kickoff to first post" },
];

const STEPS = [
  { n: "01", title: "Onboarding", body: "We learn your brand, audience, and goals." },
  { n: "02", title: "Content Calendar", body: "Full calendar delivered on the 15th." },
  { n: "03", title: "You Approve", body: "30 minutes once a month." },
  { n: "04", title: "We Handle It", body: "We post, engage, and report back monthly." },
];

const TESTIMONIALS = [
  {
    quote: "We went from zero strategy to a full content calendar and our engagement tripled in the first month.",
    name: "Owner, Restaurant Group",
    title: "Grand Rapids, MI",
  },
  {
    quote: "After two other agencies, Bloom finally felt like a partner who understood our business.",
    name: "Marketing Director, B2B SaaS",
    title: "Chicago, IL",
  },
  {
    quote: "The reporting alone changed how we think about social. We understand what is working now.",
    name: "Founder, E-commerce Brand",
    title: "Detroit, MI",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SocialMediaLP() {
  const prefersReduced = useReducedMotion();

  return (
    <main className="overflow-x-hidden bg-[#0c0a14]">

      {/* ════════════════════════════════════════════════════════════════
          HERO
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

        {/* Ghost B mark */}
        <motion.div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] pointer-events-none select-none z-[2]"
          style={{ opacity: 0.13, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.13 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Hero content */}
        <div className="relative z-[3] w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-36">

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

          {/* Headline */}
          <motion.h1
            className="text-[clamp(2.6rem,6.5vw,5.8rem)] font-extrabold text-white leading-[1.04] tracking-tight mb-7 max-w-4xl"
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

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.78 }}
            className="text-lg md:text-xl text-white/55 leading-relaxed max-w-xl mb-10"
          >
            Full-service content, community management, and monthly reporting across every platform that matters to your audience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.92 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e17339] text-white font-bold rounded-xl hover:bg-[#c8622a] transition-colors text-sm"
            >
              Book a free call
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.08] text-white font-semibold rounded-xl hover:bg-white/[0.14] border border-white/[0.12] transition-colors text-sm"
            >
              See our services
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
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
          BENEFITS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0c0a14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] max-w-lg">
              First posts live within two weeks of kickoff.
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
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#0c0a14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What clients say</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Real results. Real businesses.</h2>
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
          FINAL CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#004845] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.11, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>
        <div className="noise-overlay opacity-[0.03]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
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
