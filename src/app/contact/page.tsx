"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  MapPinIcon,
  LinkedInIcon,
  ArrowRightIcon,
  CheckIcon,
  BMark,
  StarIcon,
  CalendarIcon,
  RocketIcon,
  ChartIcon,
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

// ─── What to expect on the call ────────────────────────────────────────────

const callExpectations = [
  {
    icon: <CalendarIcon className="w-5 h-5" />,
    title: "30-minute strategy call",
    body: "A real conversation about your goals, your audience, and where social media fits into your growth.",
  },
  {
    icon: <ChartIcon className="w-5 h-5" />,
    title: "Social media audit walkthrough",
    body: "We look at your current presence together and show you exactly where the biggest opportunities are hiding.",
  },
  {
    icon: <RocketIcon className="w-5 h-5" />,
    title: "A clear path forward",
    body: "You leave with a concrete picture of what a strong social presence could look like for your brand in 90 days.",
  },
];

// ─── Trust signals ─────────────────────────────────────────────────────────

const trustSignals = [
  "50+ executives served nationwide",
  "Founded 2020 in Grand Rapids, MI",
  "Women-owned boutique agency",
  "Built on EOS: clear process, real accountability",
  "No long-term contracts required",
  "Respond within 24 hours (usually same day)",
];

// ─── Social links ──────────────────────────────────────────────────────────

const socialLinks = [
  { href: "https://www.linkedin.com/company/bloomsocialbiz", label: "LinkedIn", icon: <LinkedInIcon className="w-4 h-4" /> },
  {
    href: "https://www.instagram.com/bloomsocialbiz/",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/bloomsocialbiz/",
    label: "Facebook",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

// ─── Component ─────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — split layout
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-mesh relative overflow-hidden min-h-screen flex items-center">
        <div className="noise-overlay opacity-[0.055] z-[1]" aria-hidden="true" />

        {/* Orbs */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[130px] pointer-events-none z-[1]"
          style={{ width: 600, height: 600, top: "-15%", right: "-8%", backgroundColor: "#004845" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[140px] pointer-events-none z-[1]"
          style={{ width: 420, height: 420, bottom: "-10%", left: "-5%", backgroundColor: "#301730" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Ghost B mark */}
        <div
          aria-hidden="true"
          className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] pointer-events-none z-[2] select-none"
          style={{ opacity: 0.13, filter: "brightness(0) invert(1)", mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/bloom-social-b-mark-bg.png" alt="" className="w-full h-auto" />
        </div>

        <div className="relative z-[3] w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — copy + contact info */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4"
              >
                Contact Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
              >
                Let&apos;s Talk
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-xl text-white/65 leading-relaxed mb-10 max-w-lg"
              >
                Book a free strategy session. We&apos;ll learn about your goals and show you exactly what&apos;s possible for your brand in the next 90 days.
              </motion.p>

              {/* What to expect */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-5 mb-10"
              >
                {callExpectations.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-white/[0.08] border border-white/15 rounded-xl flex items-center justify-center text-bloom-orange shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                      <p
                        className="text-white/55 text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="border-t border-white/[0.10] pt-8 space-y-4"
              >
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPinIcon className="w-4 h-4 text-bloom-orange" />
                  Grand Rapids, Michigan, serving clients nationwide
                </div>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <svg className="w-4 h-4 text-bloom-orange" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 01.284-2.253" />
                  </svg>
                  <a
                    href="https://www.bloomsocialbiz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    bloomsocialbiz.com
                  </a>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 rounded-lg bg-white/[0.07] hover:bg-bloom-orange hover:text-white text-white/50 flex items-center justify-center transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRUST SIGNALS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">Why Bloom Social</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-bloom-green leading-tight">
              You&apos;re in Good Hands
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {trustSignals.map((signal, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 bg-bloom-light rounded-2xl px-6 py-5"
              >
                <CheckIcon className="w-5 h-5 text-bloom-orange shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{signal}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stars row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-gray-400 text-sm">5.0 rated. Trusted by 50+ executives nationwide.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          QUICK FAQ PANEL
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-bloom-green">Before You Reach Out</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {[
              {
                q: "How quickly will you respond?",
                a: "Within 24 hours. Usually the same business day.",
              },
              {
                q: "Is the strategy session really free?",
                a: "Yes, no strings attached. You keep the plan even if we don't work together.",
              },
              {
                q: "Do you only work with executives?",
                a: "We specialize in executive social media, but we work with businesses of all types and sizes.",
              },
              {
                q: "Do I need to be in Michigan?",
                a: "Not at all. We serve clients across the entire country.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-gray-100"
              >
                <p className="font-bold text-bloom-green mb-2 text-sm">{faq.q}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-green py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white font-extrabold text-2xl md:text-3xl leading-snug">
              Not ready for a call yet?
            </p>
            <p className="text-white/60 mt-1">
              Check out our services or read about our process first.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-3 shrink-0"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-bloom-green font-bold rounded-full text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Our Services <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.10] border border-white/20 hover:bg-white/[0.18] text-white font-semibold rounded-full text-sm transition-all duration-200"
            >
              How We Work
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
