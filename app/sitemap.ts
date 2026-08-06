import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/app/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  // Absolute URLs for the project screenshots rendered on the homepage,
  // so Google Images can index them alongside the page.
  const images = projects.map(
    (project) => `${siteConfig.siteUrl}${project.image}`,
  );

  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images,
    },
  ];
}
