import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon, LinkedInIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the Bloom Social team. A Michigan-based, women-owned boutique social media agency helping businesses and executives bloom since 2015.",
};

const TEAM = [
  {
    name: "Kirsten Pipp",
    role: "Founder & CEO",
    image:
      "https://static.wixstatic.com/media/341fff_c0fdb8c9233f445ea5ecea7e0f115aab~mv2.jpg/v1/fill/w_100,h_100,fp_0.51_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/kirsten-headshot.jpg",
    bio: "Kirsten started Bloom Social as a side hustle in 2015 while working full-time at a corporate job. She made the leap to full-time in 2020 and hasn't looked back. With over a decade of experience in social media strategy, she leads the team with a passion for helping executives find their voice online.",
  },
  {
    name: "Jeff Pipp",
    role: "Operations & Strategy",
    image:
      "https://static.wixstatic.com/media/341fff_ce25eba8cfb341bcbb178cf5e7b64a1a~mv2.jpg/v1/fill/w_100,h_100,fp_0.49_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/jeff-headshot.jpg",
    bio: "Jeff keeps Bloom Social running smoothly behind the scenes. From operations to client strategy, he makes sure every project hits its goals and every client gets the attention they deserve.",
  },
  {
    name: "Ethan Weliver",
    role: "Creative & Content",
    image:
      "https://static.wixstatic.com/media/341fff_1708be88ce2c4fa7a9180c1d89c7c017~mv2.jpg/v1/fill/w_100,h_100,fp_0.50_0.39,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ethan-headshot.jpg",
    bio: "Ethan brings the creative vision to life. Whether it's photography, video, or content creation, he makes sure everything Bloom Social produces looks sharp and tells the right story.",
  },
  {
    name: "Carly",
    role: "Social Media Manager",
    image:
      "https://static.wixstatic.com/media/341fff_993ce4c6541f4c56a6ddf9d3e7771bde~mv2.jpg/v1/fill/w_100,h_100,fp_0.49_0.40,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/carly-headshot.jpg",
    bio: "Carly manages the day-to-day social presence for Bloom Social's clients. From scheduling posts to engaging with audiences, she keeps brands active and growing across every platform.",
  },
  {
    name: "Abbie",
    role: "Social Media Coordinator",
    image:
      "https://static.wixstatic.com/media/6f7b33_98d17a22e1574dc2817c398d8131f61f~mv2.jpg/v1/fill/w_100,h_100,fp_0.49_0.46,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bloom-social-biz-headshot-square-abbie.jpg",
    bio: "Abbie supports the team with content coordination, community management, and making sure nothing falls through the cracks. She keeps things organized so the creative work can shine.",
  },
];

const VALUES = [
  {
    title: "Results Over Vanity Metrics",
    description:
      "We care about leads, authority, and real business outcomes. Not just likes.",
  },
  {
    title: "Your Voice, Not Ours",
    description:
      "Every piece of content sounds like you because we take the time to learn how you think and speak.",
  },
  {
    title: "Transparency Always",
    description:
      "You see exactly what we're doing, why we're doing it, and how it's performing. No black boxes.",
  },
  {
    title: "Creative with Purpose",
    description:
      "Every post, every photo, every strategy is built to move the needle for your business.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              About Bloom Social
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Storytellers, Creatives,
              <span className="text-bloom-orange"> and Experts.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
              We are a boutique social media agency with a passion for helping
              businesses bloom. Michigan-based, women-owned, and serving clients
              nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM PHOTOS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-bloom-green leading-tight">
                Started as a side hustle. Now we help executives nationwide.
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Bloom Social was founded in 2015 by Kirsten Pipp while she was
                still working her corporate job. What started as a passion
                project grew into something bigger. By 2020, Kirsten went
                all-in, building a team of creatives and strategists who share
                the same goal: helping businesses tell their story and get
                results through social media.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Today, we specialize in executive LinkedIn management, content
                creation, photography, social media strategy, and community
                management. We are not a one-size-fits-all agency. We work
                collaboratively with each client to craft strategies that
                actually fit their goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {["Women-Owned", "Est. 2015", "Grand Rapids, MI", "Nationwide Clients"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-4 py-2 bg-bloom-green/10 text-bloom-green text-sm font-semibold rounded-full"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://static.wixstatic.com/media/341fff_7de18eb3df214a42b9a222994b548ed5~mv2.jpg/v1/fill/w_387,h_506,fp_0.56_0.25,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-27.jpg"
                alt="Bloom Social team at work"
                className="w-full h-64 object-cover rounded-2xl"
              />
              <img
                src="https://static.wixstatic.com/media/341fff_ca6f9bb833f943b69014b2394587bd4f~mv2.jpg/v1/fill/w_387,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-11.jpg"
                alt="Bloom Social team collaboration"
                className="w-full h-64 object-cover rounded-2xl mt-8"
              />
              <img
                src="https://static.wixstatic.com/media/341fff_e2f6472d583b4234a55d1a8974b7ba27~mv2.jpg/v1/crop/x_0,y_898,w_4672,h_6110/fill/w_387,h_506,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20250827-Bloom-Chamber-4.jpg"
                alt="Bloom Social behind the scenes"
                className="w-full h-64 object-cover rounded-2xl col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-bloom-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7">
                <div className="w-10 h-10 bg-bloom-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckIcon className="w-5 h-5 text-bloom-orange" />
                </div>
                <h3 className="text-lg font-bold text-bloom-green mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              The Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-bloom-green">
              Meet the People Behind the Posts
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              We are a tight-knit team of strategists, writers, and creatives
              who genuinely care about your success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="bg-bloom-light rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mb-5"
                />
                <h3 className="text-xl font-bold text-bloom-green">
                  {member.name}
                </h3>
                <p className="text-bloom-orange font-medium text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
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
            Want to work with us?
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Let&apos;s talk about how we can help you bloom.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-bloom-orange hover:bg-bloom-orange/90 text-white font-bold rounded-lg text-lg tracking-wide uppercase transition-all duration-200 shadow-lg shadow-bloom-orange/30 hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
