/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'upload.wikimedia.org',
      port:'',
    },{
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port:'',
    }]
  },
};

module.exports = nextConfig;
