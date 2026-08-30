import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bravohcs.com";
  const routes = [
    "",
    "/about",
    "/home-health",
    "/residential",
    "/services",
    "/referrals",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/accessibility",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-08-26"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
