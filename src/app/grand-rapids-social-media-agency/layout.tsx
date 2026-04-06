import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Rapids Social Media Agency | Bloom Social",
  description:
    "Bloom Social is a boutique social media agency in Grand Rapids, MI. We specialize in executive LinkedIn ghostwriting, social media management, and content strategy for West Michigan businesses. Women-owned. Founded 2020.",
  keywords: [
    "Grand Rapids social media agency",
    "social media agency Grand Rapids MI",
    "Grand Rapids Michigan social media management",
    "West Michigan social media agency",
    "LinkedIn ghostwriter Grand Rapids",
    "social media management Grand Rapids",
    "content strategy Grand Rapids",
    "boutique social media agency Michigan",
  ],
  openGraph: {
    title: "Grand Rapids Social Media Agency | Bloom Social",
    description:
      "Boutique social media management and LinkedIn ghostwriting for West Michigan businesses. Women-owned agency, founded in Grand Rapids in 2020.",
    url: "https://www.bloomsocialbiz.com/grand-rapids-social-media-agency",
    siteName: "Bloom Social",
    images: [{ url: "/images/bloom-social-grand-rapids-team.webp", width: 1400, alt: "Bloom Social team — Grand Rapids social media agency" }],
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a Grand Rapids social media agency do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Grand Rapids social media agency like Bloom Social handles your entire social media presence — strategy, content creation, publishing, community management, and reporting. We create content calendars, write posts in your brand voice, design graphics, produce short-form video, and analyze performance so you don't have to. Our clients invest about 30 minutes per month reviewing content. We handle everything else."
      }
    },
    {
      "@type": "Question",
      "name": "How much does social media management cost in Grand Rapids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Social media management pricing in Grand Rapids varies based on the number of platforms, content volume, and services included. Bloom Social offers boutique monthly retainers that cover strategy, content creation, publishing, and reporting. Book a free strategy call to get a clear picture of what investment makes sense for your goals."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bloom Social based in Grand Rapids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Bloom Social is based in Grand Rapids, Michigan. We were founded here in 2020 and are deeply rooted in the West Michigan business community. We serve clients locally in Grand Rapids and across the United States."
      }
    },
    {
      "@type": "Question",
      "name": "What industries does Bloom Social work with in Grand Rapids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bloom Social works with a wide range of industries in the Grand Rapids area including manufacturing, healthcare, financial services, legal, real estate, nonprofits, B2B technology, and retail. We specialize in helping executives and business leaders build their personal brand on LinkedIn, and in managing full social media presences for companies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Bloom Social only work with businesses in Grand Rapids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. While we are based in Grand Rapids and deeply connected to the West Michigan business community, Bloom Social serves clients nationwide. We have clients across the United States who work with us remotely. Our process is designed to work seamlessly regardless of location."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can Bloom Social start managing my social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After your strategy call, Bloom Social typically has your first content calendar ready within two weeks. Most clients see their first posts go live within five weeks of kickoff. We move fast while still taking the time to learn your voice, your goals, and your audience properly."
      }
    },
    {
      "@type": "Question",
      "name": "Is Bloom Social a women-owned business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Bloom Social is a women-owned boutique social media agency founded in Grand Rapids, Michigan. We are also Diverse Business Enterprise (DVE) certified."
      }
    }
  ]
};

export default function GrandRapidsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
