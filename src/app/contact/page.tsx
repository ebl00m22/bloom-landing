import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { MapPinIcon, EnvelopeIcon, LinkedInIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bloom Social. Book a free strategy session and find out how we can help your business grow on social media.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* HERO */}
      <section className="bg-gradient-to-br from-bloom-green via-bloom-dark to-bloom-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-bloom-orange mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
              Let&apos;s Talk About
              <span className="text-bloom-orange"> Your Goals.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
              Whether you need full-service social media management or just want
              to pick our brain, we are here to help. Fill out the form and
              we will be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT INFO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-bloom-green mb-6">
                  Other Ways to Reach Us
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-bloom-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPinIcon className="w-6 h-6 text-bloom-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-bloom-green">Location</p>
                      <p className="text-gray-600 text-sm mt-1">
                        Grand Rapids, Michigan
                        <br />
                        Serving clients nationwide
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-bloom-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <EnvelopeIcon className="w-6 h-6 text-bloom-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-bloom-green">Website</p>
                      <a
                        href="https://www.bloomsocialbiz.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm mt-1 hover:text-bloom-orange transition-colors"
                      >
                        bloomsocialbiz.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-bloom-green/10 rounded-xl flex items-center justify-center shrink-0">
                      <LinkedInIcon className="w-6 h-6 text-bloom-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-bloom-green">Social</p>
                      <div className="flex flex-col gap-1 mt-1">
                        <a
                          href="https://www.linkedin.com/company/bloomsocialbiz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm hover:text-bloom-orange transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://www.facebook.com/bloomsocialbiz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm hover:text-bloom-orange transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.instagram.com/bloomsocialbiz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm hover:text-bloom-orange transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ-style quick answers */}
              <div className="bg-bloom-light rounded-2xl p-7">
                <h4 className="font-bold text-bloom-green mb-4">
                  Quick Answers
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      q: "How quickly will I hear back?",
                      a: "Within 24 hours. Usually same day.",
                    },
                    {
                      q: "Is the strategy session really free?",
                      a: "Yes. No strings attached. You keep the plan either way.",
                    },
                    {
                      q: "Do you only work with executives?",
                      a: "Nope. We work with businesses of all sizes. LinkedIn management is just one of our specialties.",
                    },
                    {
                      q: "Do I need to be in Michigan?",
                      a: "Not at all. We work with clients across the country.",
                    },
                  ].map((faq) => (
                    <div key={faq.q}>
                      <p className="text-sm font-semibold text-bloom-green">
                        {faq.q}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
