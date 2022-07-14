/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  images: {
    // loader: "default",
    // domains: ['res.cloudinary.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: 'default',
    domains: ['res.cloudinary.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
}

module.exports = nextConfig
