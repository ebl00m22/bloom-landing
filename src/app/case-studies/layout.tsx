import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Bloom Social",
  description:
    "Real results from real clients. See how Bloom Social has helped businesses grow their social presence, build authority, and generate leads.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
