import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/available-homesites",
        destination: "/opportunities",
        permanent: true,
      },
      // Old Wix URLs Google still has on file. Both earned clicks before the
      // rebuild, so send that traffic to the closest live page instead of a 404.
      {
        source: "/book-online",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/home-information-and-amenities",
        destination: "/opportunities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
