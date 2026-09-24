import type { MetadataRoute } from "next";
import { routes, site } from "@/data/site";

export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "/" || route === "/parade-of-homes" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/parade-of-homes"
          ? 0.9
          : route.startsWith("/opportunities/")
            ? 0.8
            : 0.7,
  }));
}
