import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/sign-in",
        permanent: true,
      },
      {
        source: "/app",
        destination: "/app/chat",
        permanent: true,
      },
      {
        source: "/auth",
        destination: "/auth/sign-in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
