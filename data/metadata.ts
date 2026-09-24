import type { Metadata } from "next";
import { assets, site } from "./site";

const PUBLIC_HOSTS = ["www.russinhomes.com", "russinhomes.com"];

function hostOf(value: string | undefined) {
  try {
    return new URL(value || "").hostname;
  } catch {
    return "";
  }
}

// Indexing requires Netlify's production context AND the public hostname.
// Both URL and DEPLOY_PRIME_URL are checked because an automatic deploy
// subdomain ("main" on this project) makes DEPLOY_PRIME_URL resolve to
// main--russin-homes-preview.netlify.app on production builds.
export function isPublicProductionDeploy() {
  if (process.env.CONTEXT !== "production") return false;
  const hosts = [process.env.URL, process.env.DEPLOY_PRIME_URL].map(hostOf);
  return hosts.some((hostname) => PUBLIC_HOSTS.includes(hostname));
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image: string | undefined = assets.hero,
): Metadata {
  const canonical = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      images: [{ url: image || assets.logo, alt: "Russin Homes custom residence" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || assets.logo],
    },
  };
}
