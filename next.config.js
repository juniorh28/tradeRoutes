/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'yt3.ggpht.com',
      'www.wappenwiki.org',
      'upload.wikimedia.org',
      'flagcdn.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  nextConfig,
}
