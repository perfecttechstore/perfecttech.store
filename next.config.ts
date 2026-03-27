import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add this section to allow your local network access
  experimental: {
    allowedDevOrigins: ['192.168.100.126'],
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
};

export default nextConfig;