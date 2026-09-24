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
    ];
  },
};

export default nextConfig;
