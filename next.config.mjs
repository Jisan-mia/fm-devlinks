/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/profile",
        },
      ],
    };
  },
};

export default nextConfig;
