import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management Services | Bloom Social",
  description:
    "Full-service social media management for businesses ready to grow. Content calendar, branded graphics, community management, and monthly reporting — completely done-for-you. Free audit call.",
  robots: { index: false, follow: false },
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
