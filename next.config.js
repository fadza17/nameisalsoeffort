/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure images from public directory are properly handled
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig;
