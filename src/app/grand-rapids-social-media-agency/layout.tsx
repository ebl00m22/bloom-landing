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

export default function GrandRapidsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
