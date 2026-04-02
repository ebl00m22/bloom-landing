import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  LightBulbIcon,
  CalendarIcon,
  PenIcon,
  RocketIcon,
  ChartIcon,
  CheckIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how Bloom Social works with clients from discovery to results. Our proven process takes you from invisible to influential on social media.",
};

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "We get to know you.",
    icon: LightBulbIcon,
    description:
      "Everything starts with a conversation. We learn about your business, your goals, your audience, and what makes you different. We dig into your voice, your industry, and what success looks like for you.",
    details: [
      "Deep-dive into your brand, values, and goals",
      "Audit of your current social media presence",
      "Competitive landscape analysis",
      "Audience research and persona development",
      "Define KPIs and success metrics",
    ],
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "We build your roadmap.",
    icon: CalendarIcon,
    description:
      "Based on what we learn in discovery, we create a custom strategy built specifically for you. This is not a cookie-cutter template. It is a detailed plan that maps out exactly how we will grow your presence and hit your goals.",
    details: [
      "Custom content calendar with topics and themes",
      "Platform-specific strategies and posting schedules",
      "Content pillar framework tailored to your industry",
      "Engagement strategy and community growth plan",
      "Paid media recommendations (if applicable)",
    ],
  },
  {
    number: "03",
    title: "Creation",
    subtitle: "We bring it to life.",
    icon: PenIcon,
    description:
      "Our team gets to work creating content that sounds like you, looks like your brand, and resonates with your audience. You review everything before it goes live. We don't post anything you haven't approved.",
    details: [
      "Ghostwritten posts and captions in your voice",
      "Professional graphics and visual content",
      "Photography and video (if included in your package)",
      "Profile optimization and branding updates",
      "Approval workflow before anything goes live",
    ],
  },
  {
    number: "04",
    title: "Launch & Engage",
    subtitle: "We put it out there.",
    icon: RocketIcon,
    description:
      "Content goes live. But posting is only half the job. We actively manage engagement, respond to comments, build connections, and make sure your brand stays visible and active every single day.",
    details: [
      "Scheduled posting across all platforms",
      "Daily community management and engagement",
      "Strategic commenting and connection outreach",
      "DM management and lead flagging",
      "Real-time monitoring for opportunities and trends",
    ],
  },
  {
    number: "05",
    title: "Measure & Optimize",
    subtitle: "We track what matters.",
    icon: ChartIcon,
    description:
      "We don't just set it and forget it. Every month, we review performance, identify what is working, and adjust the strategy to keep improving. You get clear reports that show exactly what is happening and why.",
    details: [
      "Monthly performance reporting with clear insights",
      "Content performance analysis (what worked, what didn't)",
      "Audience growth and engagement tracking",
      "Strategy adjustments based on data",
      "Quarterly strategy reviews and goal check-ins",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              Our Process
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              From Invisible
              <span className="text-bloom-orange"> to Influential.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
              Social media is not one-size-fits-all. Our process is built to
              understand your unique business and create a strategy that actually
              gets results.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-20">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute left-7 top-20 bottom-0 w-px bg-bloom-green/10 -mb-20" style={{ height: "calc(100% + 5rem)" }} />
                  )}

                  <div className="flex gap-8">
                    {/* Number circle */}
                    <div className="hidden md:flex shrink-0 w-14 h-14 bg-bloom-green rounded-2xl items-center justify-center text-white font-bold text-lg relative z-10">
                      {step.number}
                    </div>

                    <div className="flex-1">
                      <div className="md:hidden w-12 h-12 bg-bloom-green rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4">
                        {step.number}
                      </div>

                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-6 h-6 text-bloom-orange" />
                        <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange">
                          {step.subtitle}
                        </p>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-bloom-green mb-4">
                        {step.title}
                      </h2>

                      <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-2xl">
                        {step.description}
                      </p>

                      <div className="bg-bloom-light rounded-2xl p-6">
                        <p className="text-sm font-semibold text-bloom-green mb-4 uppercase tracking-wider">
                          What this looks like:
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <CheckIcon className="w-5 h-5 text-bloom-orange shrink-0 mt-0.5" />
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-bloom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              Why Bloom Social
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "We learn your voice",
                desc: "Every business is different. We take the time to understand how you communicate so the content always sounds like you.",
              },
              {
                title: "You approve everything",
                desc: "Nothing goes live without your sign-off. You always have full visibility and control over what gets posted.",
              },
              {
                title: "Data drives decisions",
                desc: "We track what works and adjust the strategy every month. No guesswork. Just data-backed creative.",
              },
              {
                title: "We are a real team",
                desc: "You are not getting passed off to a freelancer. You work with the same team of strategists and creatives every month.",
              },
              {
                title: "We are proactive",
                desc: "We don't wait for you to tell us what to post. We bring ideas, spot trends, and keep your content fresh.",
              },
              {
                title: "Results over vanity metrics",
                desc: "Likes are nice. Leads are better. We focus on the metrics that actually move your business forward.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7">
                <h3 className="text-lg font-bold text-bloom-green mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bloom-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            The first step is a conversation. Let us learn about your goals and
            show you how we can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 shadow-lg shadow-bloom-orange/30 hover:shadow-xl hover:-translate-y-1"
          >
            Book Your Free Discovery Call
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
