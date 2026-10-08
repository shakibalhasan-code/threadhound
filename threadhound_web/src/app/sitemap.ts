import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = ["", "/reddit-data", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(`${site.lastUpdated} UTC`),
  }));
}
