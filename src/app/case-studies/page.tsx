"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "@/components/CountUp";
import { ArrowRightIcon, StarIcon } from "@/components/Icons";

// LinkedIn icon
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

// ─── Animated stat ─────────────────────────────────────────────────────────────

function BigStat({ end, suffix, label, color, index }: { end: number; suffix?: string; label: string; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-1 px-4 py-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
    >
      <div className="text-4xl md:text-5xl font-black tabular-nums leading-none" style={{ color }}>
        {inView ? <CountUp end={end} suffix={suffix ?? ""} duration={2000} /> : "0"}
      </div>
      <p className="text-white/35 text-[10px] tracking-widest uppercase font-semibold text-center leading-tight mt-1">{label}</p>
    </motion.div>
  );
}

// ─── Scroll-driven growth chart ────────────────────────────────────────────────

function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.3"] });
  const pathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const areaOpacity = useTransform(scrollYProgress, [0.05, 0.6], [0, 0.3]);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const linePath = "M 60,185 C 100,185 140,180 185,174 C 250,164 285,138 340,106 C 400,70 445,46 510,32 C 565,20 630,15 730,10";
  const areaPath = linePath + " L 730,198 L 60,198 Z";
  const xPos    = [60, 185, 340, 510, 730];
  const yPos    = [185, 174, 106, 32, 10];
  const labels  = ["Before", "Month 1", "Month 2", "Month 3", "90 Days"];

  return (
    <div ref={ref}>
      <div className="flex flex-wrap items-center gap-6 mb-4 text-[10px] text-white/30 font-semibold tracking-widest uppercase">
        <span className="flex items-center gap-2"><span className="block w-8 h-px bg-[#e17339]" />Impressions</span>
        <span className="flex items-center gap-2"><span className="block w-6 border-t border-dashed border-white/25" />Bloom joins</span>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-white/[0.07] bg-[#001210]">
        <svg viewBox="0 0 790 210" className="w-full h-[180px] sm:h-[220px]">
          {[55, 100, 150].map(y => (
            <line key={y} x1="50" y1={y} x2="750" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          ))}
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e17339" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e17339" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path d={areaPath} fill="url(#areaGrad)" style={{ opacity: areaOpacity }} />
          <motion.line x1="185" y1="8" x2="185" y2="198" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} />
          <motion.text x="191" y="22" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            BLOOM JOINS
          </motion.text>
          <motion.path d={linePath} fill="none" stroke="#e17339" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength }} />
          {xPos.map((x, i) => (
            <motion.circle key={i} cx={x} cy={yPos[i]} r="4.5" fill={i === 0 ? "#001210" : "#e17339"}
              stroke={i === 0 ? "rgba(255,255,255,0.25)" : "#e17339"} strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.13, type: "spring", stiffness: 260 }} />
          ))}
          {labels.map((l, i) => (
            <motion.text key={i} x={xPos[i]} y="208" textAnchor="middle" fill="rgba(255,255,255,0.28)"
              fontSize="9" fontFamily="sans-serif"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.07 }}>
              {l}
            </motion.text>
          ))}
          <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}>
            <rect x="636" y="1" width="106" height="20" rx="4" fill="rgba(225,115,57,0.18)" stroke="rgba(225,115,57,0.4)" strokeWidth="1" />
            <text x="689" y="14" textAnchor="middle" fill="#e17339" fontSize="10" fontWeight="700" fontFamily="monospace">127K impressions</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudiesPage() {
  return (
    <main className="overflow-x-hidden bg-[#0c0a14]">

      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute rounded-full blur-[200px] pointer-events-none" style={{ width: 900, height: 700, top: "-25%", right: "-18%", background: "#004845", opacity: 0.28 }} />
        <div className="absolute rounded-full blur-[140px] pointer-events-none" style={{ width: 400, height: 400, bottom: "0%", left: "-6%", background: "#e17339", opacity: 0.07 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[#e17339] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Case Studies
          </motion.p>
          <div className="max-w-3xl">
            <motion.h1
              className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-white leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
              The work speaks<br />
              <span className="text-white/25">for itself.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-white/40 leading-relaxed max-w-xl">
              Real clients. Real numbers. No cherry-picked screenshots. Just what actually happened when we got to work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ════════════ CASE STUDY 01 — NENA SHIMP ════════════ */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-white/20 text-xs font-bold tracking-widest uppercase">01</span>
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004845]/30 border border-[#004845]/50 text-[#4db8b3] text-[10px] font-bold tracking-widest uppercase">
              <LinkedInIcon className="w-3 h-3" />
              Executive LinkedIn
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-white/[0.08]">

            {/* ── Header ── */}
            <div className="relative px-8 md:px-14 pt-14 pb-12 bg-gradient-to-br from-[#001e1b] via-[#001612] to-[#0c0a14] overflow-hidden border-b border-white/[0.07]">
              <div aria-hidden="true" className="absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] md:text-[13rem] font-black text-[#e17339]/[0.05] leading-none select-none pointer-events-none tabular-nums">
                127K
              </div>
              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#004845]/60 shrink-0 ring-2 ring-[#e17339]/20">
                  <Image
                    src="/images/case-study-nena-shimp.png"
                    alt="Nena Shimp"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-white/80 text-sm font-semibold leading-tight">Nena Shimp</p>
                  <p className="text-white/30 text-xs">Fractional CFO and Business Strategist</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e17339]/10 border border-[#e17339]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e17339] animate-pulse" />
                  <span className="text-[#e17339]/70 text-[10px] font-bold tracking-widest uppercase">Active client</span>
                </div>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight relative z-10 max-w-2xl">
                More reach. Less posting.<br />
                <span className="text-[#e17339]">Way better results.</span>
              </motion.h2>
            </div>

            {/* ── Before / After ── */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#0c0a14] px-8 md:px-12 py-10">
                <p className="text-white/20 text-[10px] font-bold tracking-[0.28em] uppercase mb-7">Before Bloom</p>
                <ul className="space-y-4">
                  {[
                    "Posting five times a week with no clear return on the effort",
                    "AI-generated content that didn't sound like her",
                    "Flat engagement and no inbound leads coming in",
                    "No positioning or thought leadership angle to speak of",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/30 leading-relaxed">
                      <span className="text-red-400/40 font-black mt-0.5 shrink-0 text-base leading-none">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#001e1b] px-8 md:px-12 py-10">
                <p className="text-[#e17339] text-[10px] font-bold tracking-[0.28em] uppercase mb-7">After Bloom</p>
                <ul className="space-y-4">
                  {[
                    "Two posts a week, higher quality, a fraction of the time",
                    "Authentic content that sounds exactly like her voice",
                    "Consistent inbound inquiries from exactly the right clients",
                    "A recognized voice and clear positioning in her space",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                      <span className="text-[#4db8b3] font-black mt-0.5 shrink-0 text-base leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ── Stats strip ── */}
            <div className="px-8 md:px-14 py-10 border-t border-white/[0.07] bg-gradient-to-r from-[#001a18] to-[#0d1a18]">
              <div className="flex items-center justify-between mb-6">
                <p className="text-white/25 text-[10px] font-bold tracking-[0.28em] uppercase">90-Day Results</p>
                <span className="text-[#e17339] text-[10px] font-bold tracking-widest uppercase">No paid promotion</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <BigStat end={127379} label="Total impressions" color="#e17339" index={0} />
                <BigStat end={54000}  suffix="+" label="People reached" color="#4db8b3" index={1} />
                <BigStat end={4718}   label="Reactions"         color="#e17339" index={2} />
                <BigStat end={47651}  label="Unique viewers"    color="#4db8b3" index={3} />
              </div>
              <p className="text-center text-white/20 text-xs mt-6">
                Her top post alone reached <span className="text-white/50 font-semibold">12,000+ people</span> with zero ad spend.
              </p>
            </div>

            {/* ── Chart ── */}
            <div className="px-8 md:px-14 py-12 border-t border-white/[0.07] bg-[#001410]">
              <p className="text-white/25 text-xs font-semibold mb-2">Impressions trajectory over the full 90-day engagement.</p>
              <GrowthChart />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ════════════ COMING SOON ════════════ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "02", service: "Social Media Management", industry: "Manufacturing · West Michigan" },
              { n: "03", service: "Executive LinkedIn",      industry: "Healthcare · Grand Rapids, MI" },
            ].map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-white/[0.05] bg-white/[0.015] p-10 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-white/15 text-xs font-bold tracking-widest uppercase">{cs.n}</span>
                  <div className="h-px flex-1 bg-white/[0.05]" />
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.05] text-white/25 text-[10px] font-bold tracking-widest uppercase">Coming Soon</span>
                </div>
                <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase mb-2">{cs.service}</p>
                <p className="text-white/15 text-xs mb-8">{cs.industry}</p>
                <p className="text-base font-medium text-white/25 leading-relaxed">A new client story in progress. Check back soon for the full breakdown.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PULL QUOTE ════════════ */}
      <section className="py-24 border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center">
            <div className="flex justify-center gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-[#e17339]" filled />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-white/55 leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;Bloom Social has been a rock star partner for Corewell Health for years. Their creativity and technical skills have led to a huge increase in our social channel following and engagement.&rdquo;
            </blockquote>
            <p className="text-white/50 font-bold text-sm">Cheryl Welch</p>
            <p className="text-white/25 text-xs mt-1">Corewell Health</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-28 bg-[#004845] relative overflow-hidden">
        <div aria-hidden="true" className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.08, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">Ready to be next?</h2>
            <p className="text-white/50 text-lg mb-10 max-w-md mx-auto">Book a free strategy call and let&apos;s talk about what&apos;s possible for your brand.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#004845] font-black text-base rounded-xl hover:bg-[#f0f7f6] transition-colors">
              Book your free call
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
