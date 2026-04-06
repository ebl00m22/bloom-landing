import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bloomsocialbiz.com";

  const routes = [
    { url: "/",                                    priority: 1.0,  changeFrequency: "monthly" as const },
    { url: "/about",                               priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services",                            priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/process",                             priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/case-studies",                        priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/contact",                             priority: 0.9,  changeFrequency: "yearly"  as const },
    { url: "/grand-rapids-social-media-agency",    priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/lp/executive-linkedin",               priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/lp/social-media",                     priority: 0.75, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
