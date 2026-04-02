import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  PenIcon,
  TargetIcon,
  ChartIcon,
  UsersIcon,
  CameraIcon,
  MegaphoneIcon,
  SparklesIcon,
  ChatBubbleIcon,
  CheckIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Social media management, executive LinkedIn management, content creation, photography, strategy, and community management. See how Bloom Social can help your business grow.",
};

const SERVICES = [
  {
    title: "Executive LinkedIn Management",
    description:
      "We help executives elevate their presence on LinkedIn with a strategic mix of thought leadership, personal branding, and consistent content. We help you build influence, attract opportunities, and lead industry conversations.",
    icon: PenIcon,
    features: [
      "Ghostwritten posts in your voice",
      "Profile optimization and headline strategy",
      "Strategic commenting and engagement",
      "Connection building with decision-makers",
      "Monthly analytics and reporting",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "We handle your social media presence from top to bottom so you can focus on running your business. From content planning to daily engagement, we keep your brand active and growing.",
    icon: ChartIcon,
    features: [
      "Custom content calendars",
      "Daily posting and scheduling",
      "Community monitoring and engagement",
      "Platform-specific strategies",
      "Monthly performance reports",
    ],
  },
  {
    title: "Content Creation",
    description:
      "We create content that captures attention and keeps your audience coming back. From graphics and captions to video, every piece is crafted to reflect your brand and drive results.",
    icon: SparklesIcon,
    features: [
      "Graphic design and visual content",
      "Copywriting and captions",
      "Video content and reels",
      "Brand-aligned creative direction",
      "Content repurposing across platforms",
    ],
  },
  {
    title: "Photography",
    description:
      "Professional photography that tells your brand story. We capture the real moments, the team, the products, and the culture that make your business unique.",
    icon: CameraIcon,
    features: [
      "Brand photography sessions",
      "Team headshots and portraits",
      "Product and lifestyle shoots",
      "Event coverage",
      "Social-ready image editing",
    ],
  },
  {
    title: "Social Media Strategy",
    description:
      "Social media is not one-size-fits-all. We build custom strategies specifically designed to fit your goals, your audience, and your industry. Data-driven, creative, and actionable.",
    icon: TargetIcon,
    features: [
      "Audience research and analysis",
      "Competitive landscape review",
      "Platform selection and prioritization",
      "Content pillars and messaging framework",
      "KPI setting and measurement plans",
    ],
  },
  {
    title: "Community Management",
    description:
      "Building a brand means building a community. We manage your online conversations, respond to comments, and foster genuine engagement that turns followers into advocates.",
    icon: UsersIcon,
    features: [
      "Comment and DM management",
      "Audience engagement and growth",
      "Reputation monitoring",
      "Influencer relationship building",
      "Community feedback reporting",
    ],
  },
  {
    title: "Paid Social Campaigns",
    description:
      "We build and manage paid campaigns that get your content in front of the right people. Targeted, optimized, and built to generate real ROI.",
    icon: MegaphoneIcon,
    features: [
      "Campaign strategy and setup",
      "Audience targeting and segmentation",
      "Ad creative and copywriting",
      "A/B testing and optimization",
      "Budget management and reporting",
    ],
  },
  {
    title: "Consulting",
    description:
      "Need guidance but want to keep things in-house? We offer consulting sessions where we audit your current strategy, identify opportunities, and give you a clear roadmap to follow.",
    icon: ChatBubbleIcon,
    features: [
      "Social media audits",
      "Strategy workshops",
      "Team training sessions",
      "Best practices and playbooks",
      "Ongoing advisory support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Everything You Need to
              <span className="text-bloom-orange"> Bloom Online.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
              From executive LinkedIn management to full-service social media,
              we have the tools and the talent to get your brand seen by the
              right people.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const isReversed = i % 2 !== 0;
              return (
                <div
                  key={service.title}
                  className={`grid md:grid-cols-2 gap-10 items-center ${
                    isReversed ? "md:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "md:order-2" : ""}>
                    <div className="w-14 h-14 bg-bloom-green/10 rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-bloom-green" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-bloom-green mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <CheckIcon className="w-5 h-5 text-bloom-orange shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-bloom-light rounded-2xl p-12 flex items-center justify-center ${
                      isReversed ? "md:order-1" : ""
                    }`}
                  >
                    <div className="text-center">
                      <Icon className="w-16 h-16 text-bloom-green/20 mx-auto mb-4" />
                      <p className="text-bloom-green font-bold text-xl">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bloom-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Book a free strategy session. We will walk through your goals and
            recommend the exact services that will move the needle for your
            business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 shadow-lg shadow-bloom-orange/30 hover:shadow-xl hover:-translate-y-1"
          >
            Book a Free Strategy Session
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
