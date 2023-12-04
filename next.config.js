/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      { hostname: "photos.wellfound.com" },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "idx.digital",
      },
    ],
  },
};

module.exports = nextConfig;
