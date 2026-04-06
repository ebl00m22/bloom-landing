import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The B.L.O.O.M. Process | Bloom Social",
  description:
    "Five intentional stages. One proven system. Begin, Launch, Observe, Optimize, Measure — the Bloom Social framework that transforms social media into a strategic growth engine.",
};

export default function BloomProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
