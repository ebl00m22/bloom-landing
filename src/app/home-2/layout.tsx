import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloom Social — Boutique Social Media Agency | Grand Rapids, MI",
  description:
    "Bloom Social is a boutique social media agency in Grand Rapids, MI. We build content strategies, manage your accounts, and craft the words that make your brand worth following.",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
