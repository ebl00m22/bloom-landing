"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  CalendarIcon,
  PenIcon,
  RocketIcon,
  ChartIcon,
  LightBulbIcon,
  BMark,
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─── Timeline steps ────────────────────────────────────────────────────────

const timelineSteps = [
  {
    number: "B",
    acronym: "Begin",
    icon: <LightBulbIcon className="w-6 h-6" />,
    title: "Strategy Alignment",
    timing: "Week 1–2 after signing",
    body: "We kick off with a deep-dive call to learn your voice, your goals, your target audience, and what makes you different. We audit your existing presence, set KPIs, and build the foundation for everything that follows.",
    details: [
      "Brand voice interview and tone of voice guide",
      "Audit of your current LinkedIn and social profiles",
      "Audience research and ideal client profiling",
      "Competitor landscape review",
      "KPI setting and success metrics definition",
    ],
  },
  {
    number: "L",
    acronym: "Launch",
    icon: <CalendarIcon className="w-6 h-6" />,
    title: "Content Calendar Delivered",
    timing: "15th of each month",
    timingHighlight: true,
    body: "By the 15th of every month, you receive a complete, ready-to-review content calendar: every post written, every asset designed, organized by date and platform. You see the full month before anything goes live.",
    details: [
      "Full month of posts drafted in your voice",
      "Visual content and graphics designed",
      "Platform-specific copy and hashtags",
      "Organized in Monday.com for easy review",
      "Notes on strategy rationale for key posts",
    ],
  },
  {
    number: "O",
    acronym: "Observe",
    icon: <PenIcon className="w-6 h-6" />,
    title: "You Approve in One Batch",
    timing: "30–60 minutes, your call",
    timingHighlight: true,
    body: "Review and approve your entire month of content in a single 30–60 minute session via Monday.com. Leave comments, request changes, or give a thumbs up. That&apos;s your entire monthly time commitment to Bloom Social.",
    details: [
      "Simple approval workflow in Monday.com",
      "Comment directly on individual posts",
      "Request edits with one-click notes",
      "Revisions turned around within 48 hours",
      "No phone calls required (unless you want one)",
    ],
  },
  {
    number: "O",
    acronym: "Optimize",
    icon: <RocketIcon className="w-6 h-6" />,
    title: "Publishing & Engagement",
    timing: "First week of each month",
    body: "Posts go live on schedule. Our team monitors engagement, responds to comments, makes strategic connections, and keeps your presence active every single day. You stay top of mind without lifting a finger.",
    details: [
      "Posts published on schedule across platforms",
      "Comment monitoring and replies",
      "Strategic connection requests to ideal prospects",
      "Engagement on relevant industry content",
      "DM management and lead flagging",
    ],
  },
  {
    number: "M",
    acronym: "Measure",
    icon: <ChartIcon className="w-6 h-6" />,
    title: "Monthly Reporting",
    timing: "5th of each month",
    timingHighlight: true,
    body: "By the 5th of each month, you receive a clear performance report showing what happened, what worked, and what we&apos;re adjusting for the next month. No vanity metrics. Just data that connects to your actual goals.",
    details: [
      "Impressions, reach, and engagement metrics",
      "Follower/connection growth tracking",
      "Top-performing content analysis",
      "Strategy recommendations for next month",
      "Quarterly deep-dive reviews available",
    ],
  },
];

// ─── FAQ items ─────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "How much of my time does this take?",
    answer: "About 30–60 minutes per month. You&apos;ll do a kickoff call when we onboard (usually 60–90 minutes), and after that, you just review and approve your monthly content calendar. We handle everything else: strategy, writing, design, scheduling, engagement, and reporting.",
  },
  {
    question: "What platforms do you manage?",
    answer: "We specialize in LinkedIn, Instagram, Facebook, TikTok, and YouTube Shorts. Most clients start with LinkedIn (our core specialty) and expand from there. We&apos;ll recommend the platforms that make the most sense for your audience and goals.",
  },
  {
    question: "Do I own the content you create?",
    answer: "Yes, 100%. All content we create for you belongs to you. We build your content calendar in your name, write in your voice, and everything we produce is yours to keep, even if you ever decide to stop working with us.",
  },
  {
    question: "How do I approve content?",
    answer: "We use Monday.com as our approval platform. You&apos;ll receive a link to your content board, where you can review posts, leave comments, request edits, and give final approval. All in one place, on your own schedule.",
  },
  {
    question: "When will my first posts go live?",
    answer: "Typically within 5 weeks of your kickoff call. We spend the first couple of weeks in strategy and onboarding, then build your first content calendar. Posts usually go live in the first week of your first full month of service.",
  },
  {
    question: "What if I don't like something?",
    answer: "Request an edit and we&apos;ll revise it. No questions asked, no limit on revisions during the approval window. Our goal is for you to feel genuinely proud of everything that goes out under your name.",
  },
];

// ─── Components ────────────────────────────────────────────────────────────

function TimelineStep({
  step,
  isActive,
  isCurrent,
}: {
  step: typeof timelineSteps[0];
  isActive: boolean;
  isCurrent: boolean;
}) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Step bubble — letter + acronym */}
      <motion.div
        className="hidden md:flex shrink-0 w-16 h-16 rounded-2xl flex-col items-center justify-center text-white relative z-10 gap-0.5"
        animate={{
          backgroundColor: isCurrent ? "#e17339" : "#004845",
          boxShadow: isCurrent
            ? "0 0 0 8px rgba(225,115,57,0.12), 0 8px 24px rgba(225,115,57,0.28)"
            : "0 0 0 0px transparent",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-2xl font-black leading-none">{step.number}</span>
        {"acronym" in step && (
          <span className="text-[9px] font-semibold tracking-widest uppercase opacity-80 leading-none">
            {step.acronym as string}
          </span>
        )}
      </motion.div>

      {/* Mobile bubble */}
      <div className="md:hidden flex-col w-12 h-12 bg-bloom-green rounded-xl flex items-center justify-center text-white shrink-0 mt-1 gap-0.5">
        <span className="text-lg font-black leading-none">{step.number}</span>
        {"acronym" in step && (
          <span className="text-[7px] font-semibold tracking-wider uppercase opacity-75 leading-none">
            {step.acronym as string}
          </span>
        )}
      </div>

      <div className="flex-1 pt-1">
        {/* Timing badge */}
        {step.timing && (
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 ${
              step.timingHighlight
                ? "bg-bloom-orange/12 text-bloom-orange border border-bloom-orange/20"
                : "bg-bloom-green/[0.08] text-bloom-green border border-bloom-green/15"
            }`}
          >
            {step.icon}
            {step.timing}
          </span>
        )}

        <h3 className="text-2xl font-extrabold text-bloom-green mb-3">{step.title}</h3>
        <p
          className="text-gray-600 leading-relaxed mb-5 text-base"
          dangerouslySetInnerHTML={{ __html: step.body }}
        />

        {/* Details card — always fully visible, just border highlights when active */}
        <div
          className={`rounded-2xl p-6 border transition-colors duration-500 ${
            isCurrent
              ? "bg-white border-bloom-orange/20 shadow-sm"
              : "bg-bloom-light border-transparent"
          }`}
        >
          <p className="text-xs font-bold text-bloom-green uppercase tracking-[0.15em] mb-4">
            What this includes
          </p>
          <ul className="space-y-2.5">
            {step.details.map((detail, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className={`shrink-0 mt-0.5 transition-colors duration-300 ${isCurrent ? "text-bloom-orange" : "text-bloom-green"}`}>
                  <CheckIcon className="w-4 h-4" />
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 25%"],
  });

  const rawLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useSpring(rawLineHeight, { stiffness: 55, damping: 18 });

  useEffect(() => {
    const observers: (IntersectionObserver | null)[] = stepRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i);
          }
        },
        // rootMargin pushes the trigger point: step activates when its top
        // clears the upper-third of the viewport — no rapid flicker
        { threshold: 0, rootMargin: "-25% 0px -55% 0px" }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      {/* Static background line */}
      <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-bloom-green/10 hidden md:block" />
      {/* Animated orange fill line */}
      <motion.div
        className="absolute left-[27px] top-6 w-0.5 bg-gradient-to-b from-bloom-orange via-bloom-orange to-bloom-orange/50 hidden md:block rounded-full"
        style={{ height: lineHeight }}
      />

      <div className="space-y-14">
        {timelineSteps.map((step, i) => (
          <div
            key={i}
            ref={(el) => { stepRefs.current[i] = el; }}
          >
            <TimelineStep
              step={step}
              isActive={activeStep >= i}
              isCurrent={activeStep === i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-100 rounded-2xl overflow-hidden bg-white"
      initial={false}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">{question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-7 h-7 rounded-full bg-bloom-green/[0.08] flex items-center justify-center text-bloom-green shrink-0 font-bold text-lg leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6">
              <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ProcessPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-mesh relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="noise-overlay opacity-[0.055] z-[1]" aria-hidden="true" />

        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[120px] pointer-events-none z-[1]"
          style={{ width: 550, height: 550, top: "-10%", right: "-5%", backgroundColor: "#004845" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[130px] pointer-events-none z-[1]"
          style={{ width: 380, height: 380, bottom: "-10%", left: "-5%", backgroundColor: "#301730" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />

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
              Our Process
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            >
              How We Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-white/65 leading-relaxed max-w-2xl mb-8"
            >
              Simple, predictable, and designed to respect your time. Most clients spend less than an hour per month working with us.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="inline-flex items-center gap-3 px-5 py-3 bg-bloom-orange/15 border border-bloom-orange/30 rounded-full text-bloom-orange text-sm font-semibold"
            >
              <RocketIcon className="w-4 h-4" />
              First posts go live within 5 weeks of kickoff
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TIMELINE
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">Step by Step</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight mb-4">
              The Bloom Social Process
            </h2>
            {/* B.L.O.O.M. acronym display */}
            <div className="flex items-center justify-center gap-1 flex-wrap">
              {[
                { letter: "B", word: "Begin" },
                { letter: "L", word: "Launch" },
                { letter: "O", word: "Observe" },
                { letter: "O", word: "Optimize" },
                { letter: "M", word: "Measure" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="flex flex-col items-center px-3 py-2 rounded-xl bg-bloom-green/[0.06]">
                    <span className="text-xl font-black text-bloom-green leading-none">{item.letter}</span>
                    <span className="text-[9px] font-semibold tracking-widest text-bloom-orange uppercase mt-0.5">{item.word}</span>
                  </div>
                  {i < 4 && <span className="text-bloom-green/20 font-bold text-lg">·</span>}
                </div>
              ))}
            </div>
          </motion.div>

          <ProcessTimeline />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          KEY CALLOUT — 5 weeks
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#001a19] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/[0.08]"
          >
            {[
              { stat: "5 weeks", label: "From kickoff to first posts live", sub: "average for new clients" },
              { stat: "30–60 min", label: "Your monthly time commitment", sub: "review + approve in one batch" },
              { stat: "15th", label: "Content calendar delivery", sub: "every month, without fail" },
            ].map((item, i) => (
              <div key={i} className="text-center px-8">
                <div className="text-4xl md:text-5xl font-extrabold text-bloom-orange mb-2 tracking-tight">{item.stat}</div>
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-white/35 text-sm">{item.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-light py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">Questions</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FAQItem question={faq.question} answer={faq.answer} />
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
              Ready to Start?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              The First Step Is a Conversation
            </h2>
            <p className="text-white/65 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy session. We&apos;ll learn about your goals, show you what&apos;s possible, and outline exactly how we&apos;d work together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-full text-lg transition-all duration-200 shadow-xl shadow-bloom-orange/30 hover:-translate-y-0.5"
              >
                Book a Free Strategy Session <ArrowRightIcon />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white/[0.10] border border-white/20 hover:bg-white/[0.18] text-white font-semibold rounded-full text-lg transition-all duration-200"
              >
                See Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
