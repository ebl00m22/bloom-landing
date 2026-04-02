import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bloom Social | Social Media Services | Grand Rapids, Michigan",
    template: "%s | Bloom Social",
  },
  description:
    "Bloom Social is a boutique social media agency helping businesses bloom. Executive LinkedIn management, content creation, strategy, and more. Michigan-based, women-owned, nationwide results.",
  keywords: [
    "social media agency",
    "LinkedIn ghostwriter",
    "executive LinkedIn management",
    "social media management",
    "content creation",
    "Grand Rapids",
    "Michigan",
  ],
  openGraph: {
    title: "Bloom Social | Social Media Services",
    description:
      "A boutique social media agency helping businesses bloom. Executive LinkedIn management, content creation, strategy, and more.",
    url: "https://www.bloomsocialbiz.com",
    siteName: "Bloom Social",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXX"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-XXXXXXX');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <SmoothScroll />
        <Navigation />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
