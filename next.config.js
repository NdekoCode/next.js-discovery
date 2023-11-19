/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  swcMinify: true,
  images:{
    domains:['upload.wikimedia.org']
  }
};

module.exports = nextConfig;
