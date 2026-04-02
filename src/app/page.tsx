"use client";

import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import VideoShowcase from "@/components/VideoShowcase";
import AnimateIn from "@/components/AnimateIn";
import CountUp from "@/components/CountUp";
import {
  CheckIcon,
  StarIcon,
  LinkedInIcon,
  PenIcon,
  TargetIcon,
  ChartIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const RESULTS = [
  { metric: "3-5x", label: "More profile views within 90 days" },
  { metric: "40%", label: "Average increase in connection requests" },
  { metric: "10+", label: "Hours saved per executive per month" },
];

const SERVICES = [
  {
    title: "LinkedIn Ghostwriting",
    description:
      "We craft compelling posts in your voice. Thought leadership, industry insights, and stories that resonate with your audience and drive engagement.",
    icon: PenIcon,
  },
  {
    title: "Profile Optimization",
    description:
      "From headline to featured section, we transform your profile into a magnet for the right opportunities, connections, and conversations.",
    icon: TargetIcon,
  },
  {
    title: "Content Strategy",
    description:
      "A data-driven content calendar aligned with your business goals. We plan the topics, timing, and formats that maximize reach.",
    icon: ChartIcon,
  },
  {
    title: "Community Engagement",
    description:
      "Strategic commenting, connection building, and DM outreach that expands your network and keeps you top-of-mind with decision-makers.",
    icon: UsersIcon,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I've worked with Kirsten for over ten years. She is extremely competent in all aspects of social media, capable of producing engaging and creative content with a solid grasp of social strategy.",
    name: "Long-Term Client",
    company: "10+ Year Partnership",
  },
  {
    quote:
      "Bloom Social completely transformed our LinkedIn presence. We went from posting once a month to being seen as thought leaders in our industry. The leads started coming to us.",
    name: "Marketing Director",
    company: "B2B SaaS Company",
  },
  {
    quote:
      "As a founder, I didn't have time to build my personal brand on LinkedIn. Bloom Social nailed my voice from day one and now my posts consistently get thousands of impressions.",
    name: "Startup Founder",
    company: "Series A Tech Startup",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your voice, goals, and audience to build a strategy that is authentically you.",
  },
  {
    step: "02",
    title: "Strategy & Calendar",
    description:
      "We create a custom content calendar with topics, formats, and a posting schedule tailored to your industry.",
  },
  {
    step: "03",
    title: "Content Creation",
    description:
      "Our writers craft posts in your voice. You review, approve, and we handle the rest.",
  },
  {
    step: "04",
    title: "Engage & Grow",
    description:
      "We manage engagement, track analytics, and optimize your strategy for continuous growth.",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-bloom-blue rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-bloom-orange rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bloom-pink rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20">
                <LinkedInIcon className="w-5 h-5" />
                <span>Executive LinkedIn Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Your LinkedIn Should
                <span className="block text-bloom-orange mt-1">
                  Work As Hard As You Do
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                We ghostwrite scroll-stopping LinkedIn content for executives and
                founders so you build authority, generate leads, and stay
                top-of-mind without lifting a finger.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-300 pt-2">
                {["Done-For-You Content", "Your Authentic Voice", "Proven Results"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-bloom-orange" />
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-2">
                  {[
                    "https://static.wixstatic.com/media/341fff_ce25eba8cfb341bcbb178cf5e7b64a1a~mv2.jpg/v1/fill/w_100,h_100,fp_0.49_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jeff-headshot.jpg",
                    "https://static.wixstatic.com/media/341fff_c0fdb8c9233f445ea5ecea7e0f115aab~mv2.jpg/v1/fill/w_100,h_100,fp_0.51_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/kirsten-headshot.jpg",
                    "https://static.wixstatic.com/media/341fff_1708be88ce2c4fa7a9180c1d89c7c017~mv2.jpg/v1/fill/w_100,h_100,fp_0.50_0.39,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ethan-headshot.jpg",
                    "https://static.wixstatic.com/media/341fff_993ce4c6541f4c56a6ddf9d3e7771bde~mv2.jpg/v1/fill/w_100,h_100,fp_0.49_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/carly-headshot.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Team member"
                      className="w-10 h-10 rounded-full border-2 border-bloom-green object-cover"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Trusted by 50+ executives nationwide
                  </p>
                </div>
              </div>
            </div>

            <div id="contact">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <AnimateIn className="text-center" delay={0}>
              <p className="text-4xl md:text-5xl font-bold text-bloom-green">
                <CountUp end={5} prefix="" suffix="x" />
              </p>
              <p className="text-gray-600 mt-2">More profile views within 90 days</p>
            </AnimateIn>
            <AnimateIn className="text-center" delay={200}>
              <p className="text-4xl md:text-5xl font-bold text-bloom-green">
                <CountUp end={40} suffix="%" />
              </p>
              <p className="text-gray-600 mt-2">Average increase in connection requests</p>
            </AnimateIn>
            <AnimateIn className="text-center" delay={400}>
              <p className="text-4xl md:text-5xl font-bold text-bloom-green">
                <CountUp end={10} suffix="+" />
              </p>
              <p className="text-gray-600 mt-2">Hours saved per executive per month</p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-bloom-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
            Sound Familiar?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-bloom-green leading-tight">
            You know you should be on LinkedIn.
            <br className="hidden md:block" /> You just don&apos;t have the time.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              "You stare at a blank post and don't know what to write",
              "You post once, get no engagement, and give up for months",
              "Your competitors are building audiences while you stay invisible",
              "You know your expertise is valuable but nobody sees it",
            ].map((pain) => (
              <div
                key={pain}
                className="flex gap-3 items-start bg-white rounded-xl p-5 shadow-sm"
              >
                <svg className="w-5 h-5 text-bloom-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-gray-700 text-sm leading-relaxed">{pain}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 shadow-lg shadow-bloom-orange/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Let&apos;s Fix That
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
              Full-Service LinkedIn Management
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to become a recognized voice in your industry, without the time commitment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group bg-bloom-light hover:bg-bloom-green rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-bloom-green/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-bloom-green group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-bloom-green group-hover:text-white mb-2 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-bloom-green font-semibold hover:text-bloom-orange transition-colors"
            >
              View All Services
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-bloom-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              From Invisible to Influential in 4 Steps
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s) => (
              <div
                key={s.step}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/15 transition-all duration-300"
              >
                <span className="text-5xl font-black text-bloom-orange/30 absolute top-4 right-6">
                  {s.step}
                </span>
                <div className="relative">
                  <h3 className="text-lg font-bold text-white mb-2 mt-6">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-bloom-orange transition-colors"
            >
              Learn More About Our Process
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM PHOTO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-6">
            <AnimateIn delay={0}>
              <img
                src="https://static.wixstatic.com/media/341fff_7de18eb3df214a42b9a222994b548ed5~mv2.jpg/v1/fill/w_387,h_506,fp_0.56_0.25,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-27.jpg"
                alt="Bloom Social team at work"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </AnimateIn>
            <AnimateIn delay={150}>
              <img
                src="https://static.wixstatic.com/media/341fff_ca6f9bb833f943b69014b2394587bd4f~mv2.jpg/v1/fill/w_387,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-11.jpg"
                alt="Bloom Social team collaboration"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </AnimateIn>
            <AnimateIn delay={300}>
              <img
                src="https://static.wixstatic.com/media/341fff_e2f6472d583b4234a55d1a8974b7ba27~mv2.jpg/v1/crop/x_0,y_898,w_4672,h_6110/fill/w_387,h_506,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-4.jpg"
                alt="Bloom Social behind the scenes"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <VideoShowcase />

      {/* TESTIMONIALS */}
      <section className="bg-bloom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              What Our Clients Say
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
              Real Results. Real People.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8">
                <div className="flex gap-0.5 mb-4">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-bloom-green">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to Become the Go-To Voice
            <span className="text-bloom-orange"> in Your Industry?</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Book a free strategy session and we&apos;ll show you exactly how
            we&apos;d transform your LinkedIn presence. You keep the custom plan
            even if we don&apos;t end up working together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 shadow-lg shadow-bloom-orange/30 hover:shadow-xl hover:-translate-y-1"
          >
            Claim Your Free Strategy Session
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Limited spots available each month
          </p>
        </div>
      </section>
    </main>
  );
}
