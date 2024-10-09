/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/',
          destination: "/profile"
        }
      ]
    }
  }
};

export default nextConfig;
