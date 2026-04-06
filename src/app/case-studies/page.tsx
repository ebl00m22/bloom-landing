"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "@/components/CountUp";
import { ArrowRightIcon, StarIcon } from "@/components/Icons";

// ─── Nena stats ───────────────────────────────────────────────────────────────

const NENA_STATS = [
  { end: 127379, label: "Total Impressions",  display: null },
  { end: 4718,   label: "Total Reactions",    display: null },
  { end: 1475,   label: "Comments",           display: null },
  { end: 314,    label: "Reposts",            display: null },
  { end: 54,     label: "People Reached",     display: "K+" },
  { end: 47651,  label: "Unique Viewers",     display: null },
];

const BEFORE = [
  "Posting 5× per week — burning out with zero ROI",
  "AI-generated content with no real voice or personality",
  "Flat engagement, zero inbound leads from LinkedIn",
  "No clear positioning or thought leadership angle",
];

const AFTER = [
  "2× per week — higher quality, way lower volume",
  "Authentic, voice-matched content that sounds like her",
  "Consistent inbound inquiries from ideal clients",
  "Recognized thought leader in her space",
];

// ─── Animated stat ────────────────────────────────────────────────────────────

function AnimatedStat({ end, label, display, index }: { end: number; label: string; display: string | null; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
    >
      <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">
        {inView ? <CountUp end={end} /> : "0"}
        {display && <span>{display}</span>}
      </div>
      <p className="text-white/40 text-xs leading-snug">{label}</p>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <main className="overflow-x-hidden bg-[#0c0a14]">

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden pt-32 pb-20">

        {/* Orb — teal */}
        <div className="absolute rounded-full blur-[160px] pointer-events-none" style={{ width: 700, height: 700, top: "-20%", right: "-10%", background: "#004845", opacity: 0.35 }} />
        {/* Orb — orange */}
        <div className="absolute rounded-full blur-[120px] pointer-events-none" style={{ width: 400, height: 400, bottom: "0%", left: "-8%", background: "#e17339", opacity: 0.12 }} />

        {/* Ghost B mark */}
        <div
          aria-hidden="true"
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[45vw] max-w-[580px] pointer-events-none select-none"
          style={{ opacity: 0.06, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#e17339] text-[10px] font-bold tracking-[0.3em] uppercase mb-5"
          >
            Proven Results
          </motion.p>

          <motion.h1
            className="text-[clamp(2.6rem,6.5vw,5.5rem)] font-extrabold text-white leading-[1.04] tracking-tight mb-6 max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
            }}
          >
            {["Results", "you", "can", "actually", "see."].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.22em] last:mr-0"
                variants={{
                  hidden:  { opacity: 0, y: 40, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-white/45 max-w-xl leading-relaxed"
          >
            We let the numbers do the talking. Real clients, real growth, real return on investment.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURED CASE STUDY — NENA SHIMP
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-8 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-white/[0.08] bg-[#001a19]"
          >

            {/* Card header */}
            <div className="px-8 md:px-12 pt-10 pb-8 border-b border-white/[0.06] flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e17339]/15 border border-[#e17339]/25 text-[#e17339] text-[10px] font-bold tracking-widest uppercase mb-4">
                  ★ Featured Case Study
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  Nena Shimp — Fractional CFO & Business Strategist
                </h2>
                <p className="text-white/40 text-sm">Executive LinkedIn Management · 90-Day Transformation</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 rounded-lg bg-[#004845]/40 border border-[#004845]/50 text-[#4db8b3] text-xs font-semibold">Executive LinkedIn</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-white/50 text-xs font-semibold">90 Days</span>
              </div>
            </div>

            <div className="px-8 md:px-12 py-10 space-y-10">

              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4">

                {/* BEFORE */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="rounded-2xl p-6 border"
                  style={{ background: "rgba(80,10,10,0.35)", borderColor: "rgba(180,30,30,0.2)" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-xs font-black">✕</span>
                    </div>
                    <span className="text-red-400 font-bold text-sm tracking-wide">Before Bloom</span>
                  </div>
                  <ul className="space-y-3">
                    {BEFORE.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-snug">
                        <span className="text-red-500/70 font-bold mt-0.5 shrink-0">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* AFTER */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="rounded-2xl p-6 border"
                  style={{ background: "rgba(0,60,30,0.35)", borderColor: "rgba(0,150,80,0.2)" }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 text-xs font-black">✓</span>
                    </div>
                    <span className="text-green-400 font-bold text-sm tracking-wide">After Bloom</span>
                  </div>
                  <ul className="space-y-3">
                    {AFTER.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/55 leading-snug">
                        <span className="text-green-400 font-bold mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Stats grid */}
              <div>
                <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-5">By The Numbers</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {NENA_STATS.map((s, i) => (
                    <AnimatedStat key={i} end={s.end} label={s.label} display={s.display} index={i} />
                  ))}
                </div>
              </div>

              {/* Business impact */}
              <div>
                <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">Business Impact</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Inbound deal inquiries",
                    "Established thought leader presence",
                    "Content that converts, not just performs",
                    "Authentic voice clients recognize",
                  ].map((pill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="px-4 py-2 rounded-full bg-[#004845]/40 border border-[#004845]/60 text-[#4db8b3] text-xs font-semibold"
                    >
                      {pill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Top post callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl px-6 py-5 border border-[#e17339]/20 bg-[#e17339]/[0.06] flex items-start gap-4"
              >
                <div className="text-[#e17339] text-xl mt-0.5">★</div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">Top Post Highlight</p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Her single top-performing post reached <span className="text-white font-bold">12,000+ people</span> — organic, zero paid promotion. That&apos;s what the right content strategy does.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PLACEHOLDER CASE STUDIES
      ════════════════════════════════════════════════════════════════ */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">More Results</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">More case studies on the way.</h2>
            <p className="text-white/35 text-sm mt-2">We&apos;re compiling results from more clients. Check back soon.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                service: "Social Media Management",
                client: "West Michigan B2B Brand",
                teaser: "+340% impressions in 90 days",
                industry: "Manufacturing",
              },
              {
                service: "Executive LinkedIn",
                client: "Healthcare Executive",
                teaser: "12× engagement growth",
                industry: "Healthcare · Grand Rapids, MI",
              },
            ].map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 overflow-hidden"
              >
                {/* Blur overlay */}
                <div className="absolute inset-0 backdrop-blur-[1px] bg-[#0c0a14]/40 z-10 flex items-center justify-center rounded-2xl">
                  <span className="px-4 py-2 rounded-full bg-white/[0.07] border border-white/[0.12] text-white/50 text-xs font-bold tracking-widest uppercase">
                    Case Study Coming Soon
                  </span>
                </div>

                {/* Muted content behind */}
                <div className="opacity-40 select-none">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#e17339]/70 mb-3 block">{cs.service}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{cs.client}</h3>
                  <p className="text-white/40 text-xs mb-6">{cs.industry}</p>
                  <div className="text-3xl font-black text-white mb-1">{cs.teaser.split(" ")[0]}</div>
                  <p className="text-white/35 text-sm">{cs.teaser.split(" ").slice(1).join(" ")}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TESTIMONIAL PULL QUOTE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#001a19]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-0.5 mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-[#e17339]" filled />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white/80 leading-relaxed italic mb-6">
              &ldquo;Working with Bloom Social has made our lives so much easier. Not only have we gotten so much time back, but the team does a better job keeping on top of trends, knowing our numbers, and pushing us to grow strategically.&rdquo;
            </blockquote>
            <p className="text-white font-bold text-sm">Grace Gavin</p>
            <p className="text-white/30 text-xs">Know Honesty</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-[#004845] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.09, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Ready to be our next case study?
            </h2>
            <p className="text-white/55 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Book a free strategy call. We&apos;ll look at your current social presence and show you exactly what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004845] font-black text-lg rounded-xl hover:bg-[#f0f7f6] transition-colors shadow-2xl shadow-black/20"
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
