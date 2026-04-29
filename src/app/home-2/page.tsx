"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useCallback, useState } from "react";
import CountUp from "@/components/CountUp";
import { StarIcon, ArrowRightIcon } from "@/components/Icons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const MARQUEE = [
  "Executive Thought Leadership",
  "Social Media Management",
  "Content Strategy",
  "Grand Rapids, MI",
  "50+ Clients Served",
  "LinkedIn Ghostwriting",
  "B2B Lead Generation",
  "Brand Authority",
];

const BUBBLES = [
  { text: "Got 3 DMs from this post",     left: "5%",  duration: 14, delay: -7  },
  { text: "Reach up 8×",                  left: "12%", duration: 21, delay: -14 },
  { text: "Sounds just like me",           left: "20%", duration: 16, delay: -3  },
  { text: "I'm famous at work now",        left: "29%", duration: 18, delay: -10 },
  { text: "Content approved ✓",            left: "38%", duration: 19, delay: -5  },
  { text: "CEO loved it",                  left: "47%", duration: 13, delay: -1  },
  { text: "3 leads this week",             left: "56%", duration: 17, delay: -8  },
  { text: "Post went mini-viral",          left: "65%", duration: 20, delay: -11 },
  { text: "Inbox is popping rn",           left: "74%", duration: 15, delay: -4  },
  { text: "Follower count tripled",        left: "83%", duration: 22, delay: -6  },
  { text: "Just got a referral from it",   left: "10%", duration: 25, delay: -18 },
  { text: "My clients keep asking",        left: "35%", duration: 23, delay: -2  },
  { text: "Comments section is fire",      left: "53%", duration: 18, delay: -15 },
  { text: "Saved by 400 people",           left: "72%", duration: 24, delay: -9  },
  { text: "Whole team shared it",          left: "90%", duration: 16, delay: -13 },
  { text: "Closed a deal from a post",     left: "43%", duration: 26, delay: -20 },
  { text: "Finally sounds like me",        left: "16%", duration: 20, delay: -7  },
  { text: "Best quarter ever",             left: "60%", duration: 22, delay: -3  },
];

const SERVICES = [
  {
    num: "01",
    eyebrow: "Executive LinkedIn",
    title: "Ghostwriting",
    body: "We write LinkedIn content in your voice. Thought leadership and personal stories that build your reputation and generate real business results.",
    bullets: ["Monthly content calendar", "Profile optimization", "Voice matching", "Strategic engagement"],
    accent: "#004845",
  },
  {
    num: "02",
    eyebrow: "Social Media",
    title: "Management",
    body: "Full-service management across every platform your audience uses. Strategy, content, publishing, and reporting. Handled by our team.",
    bullets: ["Multi-platform strategy", "Branded visual content", "Community management", "Monthly analytics"],
    accent: "#3196cd",
  },
  {
    num: "03",
    eyebrow: "Content",
    title: "Production",
    body: "Short-form video, graphics, reels. We produce visual content that makes people stop scrolling and start paying attention to your brand.",
    bullets: ["Video production", "Graphic design", "Reels & Shorts", "Brand templates"],
    accent: "#e17339",
  },
  {
    num: "04",
    eyebrow: "Content",
    title: "Strategy",
    body: "A clear plan for what to post, where, and why. Strategy built around your goals, your audience, and the platforms that will move the needle.",
    bullets: ["Competitive analysis", "Platform strategy", "Audience targeting", "Goal alignment"],
    accent: "#004845",
  },
];

const STATS = [
  { num: 50,  suffix: "+",    label: "Clients served nationwide" },
  { num: 5,   suffix: " yrs", label: "Building brands since 2020" },
  { num: 30,  suffix: " min", label: "Your weekly time investment" },
  { num: 12,  suffix: "×",    label: "Avg impressions growth in 90 days" },
];

const PROCESS = [
  { n: "01", title: "Strategy Call",         body: "We learn your voice, goals, and audience in one conversation." },
  { n: "02", title: "Content Calendar",      body: "By the 15th of every month you get a full calendar ready for review." },
  { n: "03", title: "Quick Approval",        body: "Review and approve in 30 minutes on Monday.com. That is your entire monthly commitment." },
  { n: "04", title: "We Handle Everything",  body: "Publishing, engagement, monitoring, and reporting. You run your business. We run your social." },
];

const TESTIMONIALS = [
  {
    quote: "Working with Bloom Social has made our lives so much easier. Not only have we gotten so much time back, but the team does a better job keeping on top of trends, knowing our numbers, and pushing us to grow strategically.",
    name: "Grace Gavin",
    title: "Know Honesty",
  },
  {
    quote: "I have had the pleasure of working with Kirsten and Jeff from Bloom Social for nearly five years. Their approach is personal, ethical, and consistently prompt — just a few of the many competencies you'd expect from a top-notch social media consultancy.",
    name: "Gwen Sandefur",
    title: "Loud Minds",
  },
  {
    quote: "Bloom Social has been a rock star partner for Corewell Health for years. Their creativity and technical skills have led to a huge increase in our social channel following and engagement.",
    name: "Cheryl Welch",
    title: "Corewell Health",
  },
];

// ─── Typewriter (light theme) ────────────────────────────────────────────────

const TYPEWRITER_WORDS_LIGHT = ["following.", "growing.", "watching.", "converting.", "thriving.", "leading."];

function TypewriterWordLight() {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(TYPEWRITER_WORDS_LIGHT[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(TYPEWRITER_WORDS_LIGHT[0]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const word = TYPEWRITER_WORDS_LIGHT[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIdx < word.length) {
      t = setTimeout(() => { setText(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 85);
    } else if (!isDeleting && charIdx === word.length) {
      t = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIdx > 0) {
      t = setTimeout(() => { setText(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 42);
    } else {
      setIsDeleting(false);
      setWordIdx(i => (i + 1) % TYPEWRITER_WORDS_LIGHT.length);
    }
    return () => clearTimeout(t);
  }, [started, charIdx, isDeleting, wordIdx]);

  return (
    <span className="inline-block whitespace-nowrap min-h-[1.05em]">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-[#004845]/60 ml-1 align-middle animate-[cursor-blink-light_0.75s_step-end_infinite]" />
    </span>
  );
}

// ─── Floating bubble ──────────────────────────────────────────────────────────

function FloatingBubble({
  text,
  left,
  duration,
  delay,
}: {
  text: string;
  left: string;
  duration: number;
  delay: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 pointer-events-none select-none hidden sm:block"
      style={{
        left,
        animation: `bubble-rise-light ${duration}s linear ${delay}s infinite`,
      }}
    >
      <div className="px-3 py-1.5 rounded-full bg-[#0c0a14]/[0.06] backdrop-blur-sm border border-[#0c0a14]/[0.1] text-[#004845]/50 text-xs font-medium whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePageTwo() {
  const prefersReduced = useReducedMotion();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  // ── Hero scroll parallax ─────────────────────────────────────────────────
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroContentY     = useTransform(heroScroll, [0, 1], [0, -80]);
  const heroContentAlpha = useTransform(heroScroll, [0, 0.55], [1, 0]);
  const bMarkY           = useTransform(heroScroll, [0, 1], [0, 55]);
  const bMarkScale       = useTransform(heroScroll, [0, 1], [1, 1.09]);

  // ── Cursor-tracking rotation for B mark ──────────────────────────────────
  const rawX   = useMotionValue(0.5);
  const rawY   = useMotionValue(0.5);
  const tiltY  = useSpring(useTransform(rawX, [0, 1], [-13, 13]), { stiffness: 75, damping: 22 });
  const tiltX  = useSpring(useTransform(rawY, [0, 1], [9, -9]),   { stiffness: 75, damping: 22 });

  const onMove = useCallback(
    (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth);
      rawY.set(e.clientY / window.innerHeight);
    },
    [rawX, rawY],
  );

  useEffect(() => {
    if (prefersReduced) return;
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove, prefersReduced]);

  return (
    <main className="overflow-x-hidden bg-white">

      {/* Global keyframes */}
      <style>{`
        @keyframes bubble-rise-light {
          0%   { transform: translateY(0);       opacity: 0;    }
          8%   {                                  opacity: 1;    }
          88%  {                                  opacity: 0.75; }
          100% { transform: translateY(-100vh);  opacity: 0;    }
        }
        @keyframes scroll-marquee-light {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }
        @keyframes cursor-blink-light {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
      `}</style>

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-[#f8faf9]"
      >
        {/* Subtle grid/noise texture */}
        <div className="absolute inset-0 opacity-[0.025]" aria-hidden="true"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004845' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        {/* Orb — soft teal */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[160px] pointer-events-none"
          style={{ width: 700, height: 700, top: "-15%", right: "-8%", background: "#004845", opacity: 0.08 }}
          animate={prefersReduced ? {} : { x: [0, 38, -18, 0], y: [0, -28, 14, 0], scale: [1, 1.06, 0.97, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orb — soft orange */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[140px] pointer-events-none"
          style={{ width: 500, height: 500, bottom: "-5%", left: "-5%", background: "#e17339", opacity: 0.07 }}
          animate={prefersReduced ? {} : { x: [0, -24, 18, 0], y: [0, 20, -14, 0], scale: [1, 0.93, 1.04, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Floating speech bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
          {BUBBLES.map((b, i) => <FloatingBubble key={i} {...b} />)}
        </div>

        {/* B mark — light mode (dark, multiply blend) */}
        <motion.div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[56vw] max-w-[720px] pointer-events-none select-none z-[2]"
          style={{
            y: bMarkY,
            scale: bMarkScale,
            rotateY: prefersReduced ? 0 : tiltY,
            rotateX: prefersReduced ? 0 : tiltX,
            transformPerspective: 1400,
            opacity: 0.07,
            mixBlendMode: "multiply",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-[3] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-24 sm:pb-32"
          style={prefersReduced ? {} : { y: heroContentY, opacity: heroContentAlpha }}
        >
          <div className="max-w-3xl">
            {/* Headline — typewriter on its own line */}
            <motion.h1
              className="text-[clamp(2.8rem,7.5vw,6.5rem)] font-extrabold text-[#004845] leading-[1.04] tracking-tight mb-7"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
              }}
            >
              {["We", "build", "brands", "worth"].map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.24em]"
                  variants={{
                    hidden:   { opacity: 0, y: 48, filter: "blur(7px)" },
                    visible:  { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="block"
                variants={{
                  hidden:  { opacity: 0, y: 48, filter: "blur(7px)" },
                  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <TypewriterWordLight />
              </motion.span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="text-lg md:text-xl text-[#004845]/55 leading-relaxed max-w-xl mb-10"
            >
              We take over your social media. The strategy, the content, the writing. So you can stay focused on running your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.82 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e17339] text-white font-bold rounded-xl hover:bg-[#c8622a] transition-colors text-sm shadow-lg shadow-[#e17339]/25"
              >
                See our services
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0c0a14]/[0.06] text-[#004845] font-semibold rounded-xl hover:bg-[#0c0a14]/[0.1] border border-[#0c0a14]/[0.1] transition-colors text-sm"
              >
                Book a strategy call
              </Link>
            </motion.div>

            {/* Trust micro-row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#004845]/35 text-xs"
            >
              <a
                href="https://www.google.com/search?q=Bloom+Social+Grand+Rapids+MI+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#004845]/70 transition-colors group"
                aria-label="Read or leave a Google review"
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-[#e17339]" filled />
                ))}
                <span className="ml-0.5 font-semibold text-[#004845]/60">5.0</span>
                <span className="text-[#004845]/25">·</span>
                <span className="group-hover:underline">5 Google reviews</span>
              </a>
              <span className="hidden sm:block text-[#004845]/20">·</span>
              <span>Women-owned · Grand Rapids, MI</span>
              <span className="hidden sm:block text-[#004845]/20">·</span>
              <span>Founded 2020</span>
            </motion.div>
          </div>

          {/* Full-width team photo */}
          <motion.div
            className="mt-14 lg:mt-20"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#004845]/10 ring-1 ring-[#004845]/[0.1]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bloom-social-grand-rapids-team.webp"
                alt="Bloom Social team Grand Rapids"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={prefersReduced ? {} : { opacity: heroContentAlpha }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-[#0c0a14]/20 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#f0f0ee] py-4 border-y border-[#0c0a14]/[0.06] overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "scroll-marquee-light 30s linear infinite" }}
        >
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 text-[#004845]/40 text-[10px] font-semibold tracking-[0.22em] uppercase px-8"
            >
              {item}
              <span className="text-[#e17339] text-sm">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004845] max-w-xl leading-[1.1]">
              Every service your brand needs to show up and stand out.
            </h2>
          </motion.div>

          {/* 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-[#0c0a14]/[0.08] rounded-2xl p-7 overflow-hidden hover:border-[#0c0a14]/[0.18] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0c0a14]/[0.06] transition-all duration-300"
              >
                {/* Bloom glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 15% 85%, ${s.accent}10 0%, transparent 60%)` }}
                />

                {/* Ghost number */}
                <div
                  className="text-[5rem] font-black leading-none mb-4 select-none"
                  style={{ color: `${s.accent}45` }}
                >
                  {s.num}
                </div>

                <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-0.5" style={{ color: s.accent }}>
                  {s.eyebrow}
                </p>
                <h3 className="text-2xl font-bold text-[#004845] mb-3">{s.title}</h3>
                <p className="text-[#004845]/45 text-sm leading-relaxed mb-5">{s.body}</p>

                <ul className="space-y-2 mb-6">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs text-[#004845]/40">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200 group-hover:gap-2.5"
                  style={{ color: s.accent }}
                >
                  Learn more
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          STATS BAR  (keep dark — nice contrast anchor)
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#004845] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute right-[-6%] top-1/2 -translate-y-1/2 w-[36vw] max-w-[440px] pointer-events-none select-none"
          style={{ opacity: 0.07, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
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
                  <CountUp end={s.num} />{s.suffix}
                </div>
                <p className="text-white/40 text-xs leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004845] leading-[1.1] max-w-lg">
              First posts live within five weeks of kickoff.
            </h2>
          </motion.div>

          {/* Timeline row */}
          <div className="relative">
            <div className="hidden lg:block absolute top-[9px] left-[3.5%] right-[3.5%] h-px bg-[#0c0a14]/[0.08]" />
            <motion.div
              className="hidden lg:block absolute top-[9px] left-[3.5%] h-px bg-[#e17339] origin-left"
              animate={{
                scaleX: hoveredStep !== null ? (hoveredStep + 1) / PROCESS.length : 0,
                opacity: hoveredStep !== null ? 1 : 0,
              }}
              style={{ right: "3.5%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {PROCESS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  onHoverStart={() => setHoveredStep(i)}
                  onHoverEnd={() => setHoveredStep(null)}
                  animate={{
                    opacity: hoveredStep !== null && hoveredStep !== i ? 0.4 : 1,
                    y: hoveredStep === i ? -6 : 0,
                  }}
                  className="relative cursor-default group"
                >
                  <motion.div
                    className="hidden lg:block w-[18px] h-[18px] rounded-full border-2 bg-[#fafaf9] mb-8 relative z-10"
                    animate={{
                      borderColor: i <= (hoveredStep ?? -1) ? "#e17339" : "rgba(225,115,57,0.3)",
                      backgroundColor: hoveredStep === i ? "#e17339" : "#fafaf9",
                      scale: hoveredStep === i ? 1.35 : 1,
                      boxShadow: hoveredStep === i ? "0 0 0 5px rgba(225,115,57,0.15)" : "0 0 0 0px transparent",
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  <p className="text-[#e17339] text-[10px] font-bold tracking-[0.22em] uppercase mb-2">{step.n}</p>
                  <motion.h3
                    className="font-bold text-lg mb-2"
                    animate={{ color: hoveredStep === i ? "#0c0a14" : "rgba(12,10,20,0.65)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-[#004845]/40 text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-[#004845]/45 text-sm hover:text-[#004845] transition-colors"
            >
              See the full process
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TEAM / WHO WE ARE
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#edf5f4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-4">Who we are</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#004845] leading-[1.1] mb-6">
                A Grand Rapids agency that treats your brand like it is their own.
              </h2>
              <p className="text-[#004845]/50 leading-relaxed mb-4 text-sm">
                Founded in 2020 by Jeff and Kirsten Pipp, Bloom Social is a boutique team of strategists, writers, and designers based in West Michigan.
              </p>
              <p className="text-[#004845]/50 leading-relaxed mb-8 text-sm">
                We run on EOS: clear processes, real accountability, and results you can point to. We serve clients in Grand Rapids and across the US.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#004845] font-semibold hover:text-[#e17339] transition-colors text-sm group"
              >
                Meet the team
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  src: "/images/bloom-social-grand-rapids-team.webp",
                  alt: "Bloom Social team Grand Rapids",
                  className: "col-span-2 aspect-[16/9]",
                  delay: 0,
                },
                {
                  src: "/images/bloom-social-content-production-team.webp",
                  alt: "Bloom Social content production team",
                  className: "aspect-square",
                  delay: 0.1,
                },
                {
                  src: "/images/bloom-social-video-production-grand-rapids.webp",
                  alt: "Bloom Social video production Grand Rapids",
                  className: "aspect-square",
                  delay: 0.2,
                },
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: photo.delay }}
                  className={`relative rounded-xl overflow-hidden shadow-md ${photo.className}`}
                >
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[#e17339] text-[10px] font-bold tracking-[0.25em] uppercase mb-3">What clients say</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#004845]">Real results. Real people.</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="bg-[#f7f8f7] border border-[#0c0a14]/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#0c0a14]/[0.14] hover:shadow-lg hover:shadow-[#0c0a14]/[0.05] transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-3.5 h-3.5 text-[#e17339]" filled />
                  ))}
                </div>
                <p className="text-[#004845]/60 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#004845] text-sm">{t.name}</p>
                  <p className="text-[#004845]/35 text-xs">{t.title}</p>
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

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
              Ready to grow?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto">
              Book a free 30-minute strategy call. We will look at your current social presence and show you exactly what is possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#004845] font-black text-lg rounded-xl hover:bg-[#f5f8f7] transition-colors shadow-2xl shadow-black/25"
            >
              Book your free call
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <p className="text-white/30 text-xs mt-5 tracking-wide">
              No pressure. No pitch deck. Just a real conversation.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
