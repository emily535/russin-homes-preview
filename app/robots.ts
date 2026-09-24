import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { isPublicProductionDeploy } from "@/data/metadata";

export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots {
  const isPublic = isPublicProductionDeploy();
  return {
    rules: isPublic ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    ...(isPublic ? { host: site.url } : {}),
  };
}
