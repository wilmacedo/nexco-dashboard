/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "photos.wellfound.com",
      },
    ],
  },
};

module.exports = nextConfig;
