import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Bloom Social",
  description: "Book a free strategy session with Bloom Social. We'll look at your social presence and show you exactly what's possible in the next 90 days.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
