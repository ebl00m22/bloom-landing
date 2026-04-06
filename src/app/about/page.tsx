"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  BMark,
  RocketIcon,
  UsersIcon,
  StarIcon,
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

// ─── Data ──────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "Ethan Weliver",
    role: "Creative & Content",
    image: "/images/team-ethan-bloom-social.webp",
    bio: "Ethan brings the creative vision to life. Whether it's photography, video, or written content, he makes sure everything Bloom Social produces looks sharp and tells the right story.",
  },
  {
    name: "Carly",
    role: "Social Media Manager",
    image: "/images/team-carly-bloom-social.webp",
    bio: "Carly manages the day-to-day social presence for Bloom Social's clients. From scheduling posts to engaging with audiences, she keeps brands active and growing across every platform.",
  },
  {
    name: "Abbie",
    role: "Social Media Coordinator",
    image: "/images/team-abbie-bloom-social.webp",
    bio: "Abbie supports the team with content coordination and community management. She keeps everything organized so the creative work can shine, and nothing falls through the cracks.",
  },
];

const values = [
  {
    icon: <RocketIcon className="w-6 h-6" />,
    title: "Growth Mindset",
    body: "We invest in our craft, stay current on every platform, and constantly look for smarter ways to deliver results for the people we serve.",
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Respect for Others",
    body: "Every client interaction, every piece of content, every team decision is grounded in mutual respect: for your time, your voice, and your goals.",
  },
  {
    icon: <StarIcon />,
    title: "Happy Clients",
    body: "We measure success by yours. When your profile is growing, your inbox is active, and you feel good about your brand online. That's our win.",
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "Impact + Value Driven",
    body: "We don't do vanity metrics. Every strategy we build is designed to create real business impact: visibility, relationships, and revenue.",
  },
];

const badges = ["Women-Owned", "Founded 2020", "Grand Rapids, MI", "Nationwide Clients", "Built on EOS"];

// ─── Component ─────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="hero-mesh relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="noise-overlay opacity-[0.055] z-[1]" aria-hidden="true" />

        {/* Orb */}
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[120px] pointer-events-none z-[1]"
          style={{ width: 600, height: 600, top: "-15%", right: "-5%", backgroundColor: "#004845" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute rounded-full blur-[140px] pointer-events-none z-[1]"
          style={{ width: 400, height: 400, bottom: "-10%", left: "-5%", backgroundColor: "#301730" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
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
              About Bloom Social
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6"
            >
              Meet the Team Behind Your
              <span className="text-bloom-orange"> LinkedIn Success</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xl text-white/65 leading-relaxed max-w-2xl"
            >
              We&apos;re a boutique social media agency based in Grand Rapids, Michigan, built to help executives and B2B companies show up with confidence and clarity online.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOUNDERS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">The Founders</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight">
              Jeff &amp; Kirsten Pipp
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {/* Photo pair */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/team-jeff-pipp-bloom-social.webp"
                  alt="Jeff Pipp — Co-founder, Bloom Social"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 p-4">
                  <p className="text-white font-bold text-sm">Jeff Pipp</p>
                  <p className="text-white/65 text-xs">Co-Owner</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/team-kirsten-pipp-bloom-social.webp"
                  alt="Kirsten Pipp — Co-founder, Bloom Social"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 p-4">
                  <p className="text-white font-bold text-sm">Kirsten Pipp</p>
                  <p className="text-white/65 text-xs">Co-Owner</p>
                </div>
              </div>
            </motion.div>

            {/* Story copy */}
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">Our Story</p>
              <h3 className="text-3xl md:text-4xl font-extrabold text-bloom-green leading-tight mb-6">
                Built from passion.<br />Grown through results.
              </h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Jeff and Kirsten Pipp founded Bloom Social in 2020 in Grand Rapids, Michigan. What started as a vision to bring boutique-quality social media strategy to executives and B2B companies has grown into a nationwide practice with clients across the country.
                </p>
                <p>
                  They run Bloom Social on the Entrepreneurial Operating System (EOS), which means every part of the business, from client onboarding to content delivery, runs on clear processes, measurable goals, and genuine accountability.
                </p>
                <p>
                  Today, Bloom Social serves executives, founders, and growth-stage companies who want to show up powerfully online without spending their own time doing it.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 bg-bloom-green/[0.08] text-bloom-green text-sm font-semibold rounded-full border border-bloom-green/15"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Full team photo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[16/7] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/bloom-social-grand-rapids-team.webp"
              alt="The full Bloom Social team, Grand Rapids, Michigan"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bloom-green/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
              <p className="text-white text-xl md:text-2xl font-extrabold">The Bloom Social Team, Grand Rapids, MI</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TEAM
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">The Team</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight">
              Meet the People Behind the Posts
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              A tight-knit group of strategists, writers, and creatives who genuinely care about your success.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-bloom-green mb-0.5">{member.name}</h3>
                  <p className="text-bloom-orange font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VALUES
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-3">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-bloom-green leading-tight">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-bloom-light hover:bg-bloom-green rounded-2xl p-7 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-bloom-green/[0.08] group-hover:bg-white/15 rounded-xl flex items-center justify-center text-bloom-green group-hover:text-white transition-colors duration-300 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-bloom-green group-hover:text-white transition-colors duration-300 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-300 text-sm leading-relaxed">
                  {value.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-bloom-green relative overflow-hidden py-24 md:py-32">
        {/* Ghost B mark */}
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
              Work With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Ready to Work With a Team<br />That Gets It?
            </h2>
            <p className="text-white/65 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy call and let&apos;s talk about what&apos;s possible for your brand on social in the next 90 days.
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
