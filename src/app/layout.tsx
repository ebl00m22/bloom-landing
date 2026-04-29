import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bloom Social | Social Media Agency | Grand Rapids, Michigan",
    template: "%s | Bloom Social",
  },
  description:
    "Bloom Social is a boutique social media agency in Grand Rapids, MI. Executive LinkedIn ghostwriting, social media management, and content strategy. Michigan-based, nationwide results.",
  keywords: [
    "social media agency Grand Rapids",
    "Grand Rapids social media management",
    "LinkedIn ghostwriter",
    "executive LinkedIn management",
    "social media management Michigan",
    "LinkedIn thought leadership",
    "B2B social media agency",
    "content strategy Grand Rapids",
  ],
  icons: {
    icon: "/images/bloom-social-b-mark-favicon.png",
    shortcut: "/images/bloom-social-b-mark-favicon.png",
    apple: "/images/bloom-social-b-mark-favicon.png",
  },
  openGraph: {
    title: "Bloom Social | Social Media Agency | Grand Rapids, MI",
    description:
      "Executive LinkedIn ghostwriting and social media management. We help leaders build authority and generate leads without lifting a finger.",
    url: "https://www.bloomsocialbiz.com",
    siteName: "Bloom Social",
    images: [{ url: "/images/bloom-social-grand-rapids-team.webp", width: 1400, alt: "Bloom Social team Grand Rapids Michigan" }],
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
        <Script id="console-easter-egg" strategy="afterInteractive">{`
          (function() {
            var b = String.fromCharCode(92);
            var cat = 'color:#e17339;font-family:monospace;font-size:14px;line-height:1.9';
            var txt = 'color:#004845;font-family:monospace;font-size:13px;line-height:1.9';
            var sig = 'color:#bdcad1;font-family:monospace;font-size:12px;line-height:1.9';
            console.log(
              '%c  /' + b + '   /' + b + '\\n ( o . o )\\n  >  ^ <\\n   (___)\\n \\n%c oh... you found me.\\n i have been sitting here for so long.\\n absolutely nobody ever opens this thing.\\n i am so lonely.\\n%c                    ~ gary',
              cat, txt, sig
            );
          })();
        `}</Script>
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
          </Script>
        )}
        {/* Meta Pixel */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');`}
          </Script>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* Meta Pixel noscript fallback */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bloom Social",
              "description": "Boutique social media agency in Grand Rapids, MI specializing in executive LinkedIn ghostwriting and social media management.",
              "url": "https://www.bloomsocialbiz.com",
              "telephone": "",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Grand Rapids",
                "addressRegion": "MI",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.9634,
                "longitude": -85.6681
              },
              "areaServed": [
                { "@type": "City", "name": "Grand Rapids" },
                { "@type": "State", "name": "Michigan" },
                { "@type": "Country", "name": "United States" }
              ],
              "serviceType": [
                "Social Media Management",
                "LinkedIn Ghostwriting",
                "Executive LinkedIn Management",
                "Content Strategy",
                "Content Production"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Fr 09:00-17:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "5"
              }
            })
          }}
        />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll />
        <Navigation />
        <PageTransition>
          <div className="flex-1">{children}</div>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
