/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
  },
  async rewrites() {
    return [{
        source: "/:path",
        destination: "https://localhost:4000/:path",
    }];
  },
};

export default nextConfig;
