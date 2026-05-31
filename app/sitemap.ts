import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: BRAND.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
