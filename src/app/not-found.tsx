"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0c0a14] flex items-center justify-center overflow-hidden relative px-6">

      {/* Orb — teal */}
      <div
        className="absolute rounded-full blur-[160px] pointer-events-none"
        style={{ width: 600, height: 600, top: "-10%", right: "-10%", background: "#004845", opacity: 0.35 }}
      />
      {/* Orb — orange */}
      <div
        className="absolute rounded-full blur-[140px] pointer-events-none"
        style={{ width: 400, height: 400, bottom: "-5%", left: "-5%", background: "#e17339", opacity: 0.15 }}
      />

      {/* Ghost 404 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="text-[28vw] font-black leading-none tracking-tighter"
          style={{ color: "rgba(255,255,255,0.018)" }}
        >
          404
        </span>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* B mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/bloom-social-b-mark-bg.png"
            alt="Bloom Social"
            className="w-16 h-auto"
            style={{ filter: "brightness(0) invert(1)", opacity: 0.35 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[#e17339] text-[10px] font-bold tracking-[0.3em] uppercase mb-4"
        >
          Page Not Found
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5"
        >
          This page doesn&apos;t exist.
          <br />
          <span className="text-white/30">Your social strategy shouldn&apos;t either.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-white/40 text-base mb-10 leading-relaxed"
        >
          Looks like this URL went off-brand. Let&apos;s get you back somewhere useful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e17339] text-white font-bold rounded-xl hover:bg-[#c8622a] transition-colors text-sm"
          >
            Back to home
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.07] text-white font-semibold rounded-xl hover:bg-white/[0.12] border border-white/[0.1] transition-colors text-sm"
          >
            Book a call
          </Link>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/25 text-xs"
        >
          {[
            { href: "/about", label: "About" },
            { href: "/process", label: "Our Process" },
            { href: "/services", label: "Services" },
            { href: "/case-studies", label: "Case Studies" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
