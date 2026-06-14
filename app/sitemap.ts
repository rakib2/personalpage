import type { MetadataRoute } from "next";
import { getEssaySlugs } from "@/lib/essays";

const BASE = "https://rakibhasan.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const essays = getEssaySlugs().map((slug) => ({
    url: `${BASE}/essays/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    ...essays,
  ];
}
