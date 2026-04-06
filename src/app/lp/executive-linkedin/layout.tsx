import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive LinkedIn Management | Bloom Social",
  description:
    "Done-for-you LinkedIn ghostwriting for executives and founders. Bloom Social writes, schedules, and publishes your LinkedIn content — in your voice, every week. Free audit call.",
  robots: { index: false, follow: false },
};

export default function ExecLinkedInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
