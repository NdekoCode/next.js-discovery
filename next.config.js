/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
