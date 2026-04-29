"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import CountUp from "@/components/CountUp";
import { ArrowRightIcon, StarIcon } from "@/components/Icons";

function BigStat({ end, suffix, label, color, index }: { end: number; suffix?: string; label: string; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-1 px-4 py-6 rounded-2xl border border-[#004845]/[0.1] bg-white hover:bg-[#f0faf8] transition-colors shadow-sm">
      <div className="text-4xl md:text-5xl font-black tabular-nums leading-none" style={{ color }}>
        {inView ? <CountUp end={end} suffix={suffix ?? ""} duration={2000} /> : "0"}
      </div>
      <p className="text-[#004845]/40 text-[10px] tracking-widest uppercase font-semibold text-center leading-tight mt-1">{label}</p>
    </motion.div>
  );
}

function GrowthChartLight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.3"] });
  const pathLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const areaOpacity = useTransform(scrollYProgress, [0.05, 0.6], [0, 0.18]);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const linePath = "M 60,185 C 100,185 140,180 185,174 C 250,164 285,138 340,106 C 400,70 445,46 510,32 C 565,20 630,15 730,10";
  const areaPath = linePath + " L 730,198 L 60,198 Z";
  const xPos = [60, 185, 340, 510, 730];
  const yPos = [185, 174, 106, 32, 10];
  const labels = ["Before", "Month 1", "Month 2", "Month 3", "90 Days"];

  return (
    <div ref={ref}>
      <div className="flex flex-wrap items-center gap-6 mb-4 text-[10px] text-[#004845]/30 font-semibold tracking-widest uppercase">
        <span className="flex items-center gap-2"><span className="block w-8 h-px bg-[#004845]" />Impressions</span>
        <span className="flex items-center gap-2"><span className="block w-6 border-t border-dashed border-[#004845]/30" />Bloom joins</span>
      </div>
      <div className="relative rounded-xl overflow-hidden border border-[#004845]/[0.1] bg-[#f0f8f6]">
        <svg viewBox="0 0 790 210" className="w-full h-[180px] sm:h-[220px]">
          {[55, 100, 150].map(y => (
            <line key={y} x1="50" y1={y} x2="750" y2={y} stroke="rgba(0,72,69,0.07)" strokeWidth="1" />
          ))}
          <defs>
            <linearGradient id="areaGradLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#004845" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#004845" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path d={areaPath} fill="url(#areaGradLight)" style={{ opacity: areaOpacity }} />
          <motion.line x1="185" y1="8" x2="185" y2="198" stroke="rgba(0,72,69,0.3)" strokeWidth="1" strokeDasharray="5 4"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} />
          <motion.text x="191" y="22" fill="rgba(0,72,69,0.45)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            BLOOM JOINS
          </motion.text>
          <motion.path d={linePath} fill="none" stroke="#004845" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength }} />
          {xPos.map((x, i) => (
            <motion.circle key={i} cx={x} cy={yPos[i]} r="4.5"
              fill={i === 0 ? "#f0f8f6" : "#004845"}
              stroke={i === 0 ? "rgba(0,72,69,0.3)" : "#004845"} strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.13, type: "spring", stiffness: 260 }} />
          ))}
          {labels.map((l, i) => (
            <motion.text key={i} x={xPos[i]} y="208" textAnchor="middle" fill="rgba(0,72,69,0.35)"
              fontSize="9" fontFamily="sans-serif"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 + i * 0.07 }}>
              {l}
            </motion.text>
          ))}
          <motion.g initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.1 }}>
            <rect x="636" y="1" width="106" height="20" rx="4" fill="rgba(0,72,69,0.1)" stroke="rgba(0,72,69,0.25)" strokeWidth="1" />
            <text x="689" y="14" textAnchor="middle" fill="#004845" fontSize="10" fontWeight="700" fontFamily="monospace">127K impressions</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

export default function CaseStudiesWhitePage() {
  return (
    <main className="overflow-x-hidden bg-white">

      {/* ════════════ HERO ════════════ */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#f8faf9]">
        <div className="absolute rounded-full blur-[180px] pointer-events-none" style={{ width: 800, height: 600, top: "-20%", right: "-15%", background: "#004845", opacity: 0.07 }} />
        <div className="absolute rounded-full blur-[140px] pointer-events-none" style={{ width: 500, height: 400, bottom: "-10%", left: "-8%", background: "#e17339", opacity: 0.05 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[#e17339] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
            Case Studies
          </motion.p>
          <div className="max-w-3xl">
            <motion.h1 className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold text-[#004845] leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}>
              The work speaks<br />
              <span className="text-[#004845]/25">for itself.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg text-[#004845]/45 leading-relaxed max-w-xl">
              Real clients. Real numbers. No cherry-picked screenshots. Just what actually happened when we got to work.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ════════════ CASE STUDY 01 ════════════ */}
      <section className="pb-6 bg-white pt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-[#004845]/20 text-xs font-bold tracking-widest uppercase">01</span>
            <div className="h-px flex-1 bg-[#0c0a14]/[0.07]" />
            <span className="px-3 py-1 rounded-full bg-[#004845]/10 border border-[#004845]/20 text-[#004845] text-[10px] font-bold tracking-widest uppercase">Executive LinkedIn</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-[#004845]/[0.1] shadow-xl shadow-[#004845]/[0.06]">

            {/* ── Header ── */}
            <div className="relative px-8 md:px-14 pt-14 pb-12 bg-[#f0faf8] border-b border-[#004845]/[0.08] overflow-hidden">
              <div aria-hidden="true" className="absolute right-6 top-1/2 -translate-y-1/2 text-[10rem] md:text-[13rem] font-black text-[#004845]/[0.04] leading-none select-none pointer-events-none tabular-nums">
                127K
              </div>
              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-full bg-[#004845]/10 border border-[#004845]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#004845] text-sm font-black">NS</span>
                </div>
                <div>
                  <p className="text-[#004845]/80 text-sm font-semibold leading-tight">Nena Shimp</p>
                  <p className="text-[#004845]/35 text-xs">Fractional CFO and Business Strategist</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e17339]/10 border border-[#e17339]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e17339] animate-pulse" />
                  <span className="text-[#e17339]/70 text-[10px] font-bold tracking-widest uppercase">Active client</span>
                </div>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl font-extrabold text-[#004845] leading-[1.1] tracking-tight relative z-10 max-w-2xl">
                More reach. Less posting.<br />
                <span className="text-[#e17339]">Way better results.</span>
              </motion.h2>
            </div>

            {/* ── Before / After ── */}
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#004845]/[0.08]">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#fafafa] px-8 md:px-12 py-10">
                <p className="text-[#004845]/20 text-[10px] font-bold tracking-[0.28em] uppercase mb-7">Before Bloom</p>
                <ul className="space-y-4">
                  {[
                    "Posting five times a week with no clear return on the effort",
                    "AI-generated content that didn't sound like her",
                    "Flat engagement and no inbound leads coming in",
                    "No positioning or thought leadership angle to speak of",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#004845]/35 leading-relaxed">
                      <span className="text-red-400/60 font-black mt-0.5 shrink-0 text-base leading-none">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#edf8f5] px-8 md:px-12 py-10">
                <p className="text-[#e17339] text-[10px] font-bold tracking-[0.28em] uppercase mb-7">After Bloom</p>
                <ul className="space-y-4">
                  {[
                    "Two posts a week, higher quality, a fraction of the time",
                    "Authentic content that sounds exactly like her voice",
                    "Consistent inbound inquiries from exactly the right clients",
                    "A recognized voice and clear positioning in her space",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#004845]/70 leading-relaxed">
                      <span className="text-[#004845] font-black mt-0.5 shrink-0 text-base leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ── Stats strip ── */}
            <div className="px-8 md:px-14 py-10 border-t border-[#004845]/[0.08] bg-[#f5fcfa]">
              <div className="flex items-center justify-between mb-6">
                <p className="text-[#004845]/25 text-[10px] font-bold tracking-[0.28em] uppercase">90-Day Results</p>
                <span className="text-[#e17339] text-[10px] font-bold tracking-widest uppercase">No paid promotion</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <BigStat end={127379} label="Total impressions" color="#e17339"  index={0} />
                <BigStat end={54}     suffix="K+" label="People reached"  color="#004845" index={1} />
                <BigStat end={4718}   label="Reactions"          color="#e17339"  index={2} />
                <BigStat end={47651}  label="Unique viewers"     color="#004845" index={3} />
              </div>
              <p className="text-center text-[#004845]/25 text-xs mt-6">
                Her top post alone reached <span className="text-[#004845]/55 font-semibold">12,000+ people</span> with zero ad spend.
              </p>
            </div>

            {/* ── Chart ── */}
            <div className="px-8 md:px-14 py-12 border-t border-[#004845]/[0.08] bg-[#f8faf9]">
              <p className="text-[#004845]/30 text-xs font-semibold mb-4">Impressions trajectory over the full 90-day engagement.</p>
              <GrowthChartLight />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ════════════ COMING SOON ════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { n: "02", client: "West Michigan B2B Brand",  service: "Social Media Management", teaser: "+340% impressions in 90 days", industry: "Manufacturing" },
              { n: "03", client: "Healthcare Executive",      service: "Executive LinkedIn",       teaser: "12× engagement growth",       industry: "Healthcare · Grand Rapids, MI" },
            ].map((cs, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl border border-[#004845]/[0.08] bg-[#f8f8f8] p-10 relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#004845]/15 text-xs font-bold tracking-widest uppercase">{cs.n}</span>
                  <div className="h-px flex-1 bg-[#004845]/[0.07]" />
                  <span className="px-2.5 py-1 rounded-full bg-[#004845]/[0.06] text-[#004845]/25 text-[10px] font-bold tracking-widest uppercase">Coming Soon</span>
                </div>
                <p className="text-[#004845]/20 text-[10px] font-bold tracking-widest uppercase mb-2">{cs.service}</p>
                <h3 className="text-xl font-bold text-[#004845]/25 mb-1">{cs.client}</h3>
                <p className="text-[#004845]/15 text-xs mb-8">{cs.industry}</p>
                <p className="text-2xl font-black text-[#004845]/20">{cs.teaser}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PULL QUOTE ════════════ */}
      <section className="py-24 bg-[#edf5f4]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <div className="flex justify-center gap-0.5 mb-8">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-[#e17339]" filled />)}
            </div>
            <blockquote className="text-xl md:text-2xl font-semibold text-[#004845]/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              &ldquo;Bloom Social has been a rock star partner for Corewell Health for years. Their creativity and technical skills have led to a huge increase in our social channel following and engagement.&rdquo;
            </blockquote>
            <p className="text-[#004845]/50 font-bold text-sm">Cheryl Welch</p>
            <p className="text-[#004845]/25 text-xs mt-1">Corewell Health</p>
          </motion.div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-28 bg-[#004845] relative overflow-hidden">
        <div aria-hidden="true" className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[44vw] max-w-[560px] pointer-events-none select-none"
          style={{ opacity: 0.08, mixBlendMode: "multiply" }}>
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
