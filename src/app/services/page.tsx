"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  PenIcon,
  MegaphoneIcon,
  CheckIcon,
  CalendarIcon,
  ChartIcon,
  SparklesIcon,
} from "@/components/Icons";

// ─── Animation variants ────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const capabilities = [
  "LinkedIn Ghostwriting",
  "Instagram Content",
  "Facebook Management",
  "TikTok & Reels",
  "YouTube Shorts",
  "Brand Strategy",
  "Visual Design",
  "Content Calendars",
  "Analytics & Reporting",
  "Community Engagement",
  "Profile Optimization",
  "Competitor Research",
];

const linkedInIncludes = [
  "Ghostwritten posts, published monthly",
  "Profile optimization at kickoff",
  "Content strategy & topic pillars",
  "Approval in one batch via Monday.com",
  "Strategic commenting & engagement",
  "Monthly performance report",
];

const socialIncludes = [
  "Multi-platform strategy (IG, FB, TikTok, YT Shorts, LinkedIn)",
  "Branded graphics & short-form video",
  "Up to 20 posts/month per platform",
  "Approval in one batch via Monday.com",
  "Community engagement & reply management",
  "Monthly analytics report",
];

const differentiators = [
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "Your voice, always",
    body: "We interview you at kickoff and build a voice guide. Every piece of content sounds like you wrote it yourself.",
  },
  {
    icon: <CalendarIcon className="w-6 h-6" />,
    title: "30 to 60 minutes a month",
    body: "Review and approve your full month of content in a single batch. That's your entire time commitment.",
  },
  {
    icon: <ChartIcon className="w-6 h-6" />,
    title: "Results that move the needle",
    body: "Monthly reports tied directly to your business goals. Impressions, engagement, and growth, all tracked and actioned.",
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-mesh relative min-h-[62vh] flex items-center overflow-hidden">
        <div className="noise-overlay opacity-[0.055] z-[1]" aria-hidden="true" />

        {/* Orbs */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[120px] pointer-events-none z-[1]"
          style={{ width: 550, height: 550, top: "-15%", right: "-5%", backgroundColor: "#004845" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[130px] pointer-events-none z-[1]"
          style={{ width: 380, height: 380, bottom: "-10%", left: "-4%", backgroundColor: "#301730" }}
          animate={{ scale: [1, 1.09, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* B-mark watermark */}
        <div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] pointer-events-none z-[2] select-none"
          style={{ opacity: 0.13, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-[3] max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4"
            >
              What We Do
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            >
              Social media,{" "}
              <span className="text-bloom-orange">handled.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/65 leading-relaxed max-w-2xl"
            >
              Strategy, content, publishing, engagement, and reporting, all built around your brand and managed by a team that treats it like their own.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CAPABILITIES BAR
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#001a19] py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-white/30 text-center mb-7"
          >
            One team. Full coverage.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {capabilities.map((cap) => (
              <motion.span
                key={cap}
                variants={fadeUp}
                className="px-4 py-2 rounded-full border border-white/[0.12] text-white/60 text-sm font-medium tracking-wide"
              >
                {cap}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TWO OFFERINGS — SIDE BY SIDE CARDS
      ════════════════════════════════════════════════════════════════ */}
      <TwoWaysSection />

      {/* ═══════════════════════════════════════════════════════════════
          WHAT MAKES US DIFFERENT
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-bloom-green leading-tight">
              The Bloom Social difference
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="w-11 h-11 bg-bloom-green/10 rounded-xl flex items-center justify-center text-bloom-green mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-green relative overflow-hidden py-24 md:py-32">
        <div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[42vw] max-w-[540px] pointer-events-none select-none"
          style={{ opacity: 0.12, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              Not Sure Where to Start?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Let&apos;s Figure It Out Together
            </h2>
            <p className="text-white/65 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy session. We&apos;ll walk through your goals and recommend exactly which services will move the needle for your business.
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
                See How We Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

function TwoWaysSection() {
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mouseX.set(-9999);
    mouseY.set(-9999);
  };

  const spotlight = useMotionTemplate`radial-gradient(550px circle at ${mouseX}px ${mouseY}px, rgba(0, 72, 69, 0.10), transparent 70%)`;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="bg-white py-24 md:py-32 relative overflow-hidden"
    >
      {/* Cursor spotlight */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight mb-4">
            Two ways to work with us
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Most clients start with one and add the other as they grow.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >

          {/* Card A — Executive LinkedIn (green → deep green/black on hover) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group bg-bloom-green hover:bg-[#0a1f1d] rounded-3xl p-10 flex flex-col relative overflow-hidden ring-1 ring-bloom-green/20 hover:ring-2 hover:ring-bloom-orange/60 hover:shadow-2xl hover:shadow-bloom-orange/30 transition-all duration-500"
          >
            {/* Hover glow */}
            <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 0%, rgba(225,115,57,0.35), transparent 65%)" }} />
            {/* Subtle grid pattern that fades in */}
            <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none"
              style={{ backgroundImage: "linear-gradient(rgba(225,115,57,1) 1px, transparent 1px), linear-gradient(90deg, rgba(225,115,57,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-white/10 group-hover:bg-bloom-orange rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <PenIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-2 group-hover:tracking-[0.18em] transition-all duration-500">
                  Personal Brand
                </p>
                <h3 className="text-3xl font-extrabold text-white leading-tight mb-4">
                  Executive LinkedIn
                </h3>
                <p className="text-white/70 group-hover:text-white/85 leading-relaxed transition-colors duration-500">
                  We become your LinkedIn ghostwriter. Your thinking, your voice, our strategy. Published consistently to grow your authority and generate real opportunities.
                </p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {linkedInIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 group-hover:text-white/95 transition-colors duration-500">
                    <CheckIcon className="w-5 h-5 text-bloom-orange shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/lp/executive-linkedin"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:text-bloom-orange group-hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>

          {/* Card B — Social Media Management (white → green on hover) */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group bg-white border border-gray-100 shadow-lg rounded-3xl p-10 flex flex-col relative overflow-hidden hover:bg-bloom-green hover:border-bloom-green hover:shadow-2xl hover:shadow-bloom-green/35 transition-all duration-500"
          >
            <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 0%, rgba(225,115,57,0.18), transparent 60%)" }} />
            <div className="relative">
              <div className="mb-8">
                <div className="w-12 h-12 bg-bloom-orange/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-bloom-orange group-hover:scale-110 transition-all duration-300">
                  <MegaphoneIcon className="w-6 h-6 text-bloom-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-2">
                  Brand Social
                </p>
                <h3 className="text-3xl font-extrabold text-bloom-green group-hover:text-white leading-tight mb-4 transition-colors duration-500">
                  Social Media Management
                </h3>
                <p className="text-gray-500 group-hover:text-white/75 leading-relaxed transition-colors duration-500">
                  Full-service management across every platform your audience uses. We handle strategy, creative, publishing, and reporting so your brand shows up consistently without consuming your time.
                </p>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {socialIncludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 group-hover:text-white/85 transition-colors duration-500">
                    <CheckIcon className="w-5 h-5 text-bloom-orange shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/lp/social-media"
                className="inline-flex items-center gap-2 text-bloom-green group-hover:text-bloom-orange font-semibold text-sm group-hover:gap-3 transition-all duration-200"
              >
                Learn more <ArrowRightIcon />
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
