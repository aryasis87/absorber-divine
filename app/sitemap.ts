import type { MetadataRoute } from "next";

const BASE = "https://absorber-divine.vercel.app";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/faq", priority: 0.8 },
  { path: "/kontak", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
