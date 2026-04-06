"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "@/components/CountUp";
import { ArrowRightIcon, StarIcon } from "@/components/Icons";

// ─── Animated number ──────────────────────────────────────────────────────────

function BigStat({ end, suffix, label, index }: { end: number; suffix?: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-black text-white tabular-nums leading-none mb-2">
        {inView ? <CountUp end={end} suffix={suffix ?? ""} duration={2000} /> : <span>0</span>}
      </div>
      <p className="text-white/35 text-xs tracking-wide leading-snug">{label}</p>
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
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute rounded-full blur-[180px] pointer-events-none" style={{ width: 800, height: 600, top: "-20%", right: "-15%", background: "#004845", opacity: 0.3 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#e17339] text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          >
            Case Studies
          </motion.p>
          <div className="max-w-3xl">
            <motion.h1
              className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-white leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              The work speaks<br />
              <span className="text-white/30">for itself.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-white/45 leading-relaxed"
            >
              Real clients. Real numbers. No fluff, no cherry-picked screenshots — just what actually happened.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CASE STUDY 01 — NENA SHIMP
      ════════════════════════════════════════════════════════════════ */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Label row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <span className="text-white/20 text-xs font-bold tracking-widest uppercase">01</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="px-3 py-1 rounded-full bg-[#004845]/30 border border-[#004845]/50 text-[#4db8b3] text-[10px] font-bold tracking-widest uppercase">Executive LinkedIn</span>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-[#0d1a18] border border-white/[0.07] overflow-hidden"
          >

            {/* Top: name + big result statement */}
            <div className="px-8 md:px-14 pt-12 pb-10 border-b border-white/[0.06]">
              <p className="text-white/35 text-sm mb-2">Nena Shimp · Fractional CFO & Business Strategist</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl">
                More reach. Less posting.<br />
                <span className="text-[#e17339]">Way better results.</span>
              </h2>
            </div>

            {/* Middle: before / after — clean, simple */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">

              {/* Before */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="px-8 md:px-14 py-10"
              >
                <p className="text-white/25 text-[10px] font-bold tracking-[0.25em] uppercase mb-6">Before Bloom</p>
                <ul className="space-y-4">
                  {[
                    "Posting 5 times a week — burning time with no clear ROI",
                    "AI-generated content that didn't sound like her",
                    "Flat engagement, no inbound leads",
                    "No real positioning or thought leadership angle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/40 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="px-8 md:px-14 py-10"
              >
                <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-6">After Bloom</p>
                <ul className="space-y-4">
                  {[
                    "2 posts a week — higher quality, a fraction of the effort",
                    "Authentic content that sounds exactly like her",
                    "Consistent inbound inquiries from ideal clients",
                    "A recognized voice in her space",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#e17339] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom: 4 big numbers */}
            <div className="px-8 md:px-14 py-14 bg-[#004845]/20 border-t border-white/[0.06]">
              <p className="text-white/25 text-[10px] font-bold tracking-[0.25em] uppercase mb-10 text-center">90-Day Results</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                <BigStat end={127379} label="Total impressions" index={0} />
                <BigStat end={54} suffix="K+" label="People reached" index={1} />
                <BigStat end={4718} label="Reactions" index={2} />
                <BigStat end={47651} label="Unique viewers" index={3} />
              </div>
              <p className="text-center text-white/25 text-xs mt-10 leading-relaxed">
                Her top post alone reached <span className="text-white/55 font-semibold">12,000+ people</span> — no paid promotion.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          COMING SOON STUDIES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "02", client: "West Michigan B2B Brand",    service: "Social Media Management", teaser: "+340% impressions in 90 days",  industry: "Manufacturing" },
              { n: "03", client: "Healthcare Executive",        service: "Executive LinkedIn",       teaser: "12× engagement growth",        industry: "Healthcare · Grand Rapids, MI" },
            ].map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-white/[0.05] bg-white/[0.015] p-10 relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-white/15 text-xs font-bold tracking-widest uppercase">{cs.n}</span>
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] text-white/25 text-[10px] font-bold tracking-widest uppercase">Coming Soon</span>
                </div>
                <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase mb-2">{cs.service}</p>
                <h3 className="text-xl font-bold text-white/25 mb-1">{cs.client}</h3>
                <p className="text-white/15 text-xs mb-8">{cs.industry}</p>
                <p className="text-2xl font-black text-white/20">{cs.teaser}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PULL QUOTE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-4 h-4 text-[#e17339]" filled />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;Bloom Social has been a rock star partner for Corewell Health for years. Their creativity and technical skills have led to a huge increase in our social channel following and engagement.&rdquo;
            </blockquote>
            <p className="text-white/50 font-bold text-sm">Cheryl Welch</p>
            <p className="text-white/25 text-xs mt-1">Corewell Health</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#004845] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.08, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
              Ready to be next?
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">
              Book a free strategy call and let&apos;s talk about what&apos;s possible for your brand.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#004845] font-black text-base rounded-xl hover:bg-[#f0f7f6] transition-colors"
            >
              Book your free call
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
