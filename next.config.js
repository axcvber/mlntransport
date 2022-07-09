/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  images: {
    // loader: "default",
    domains: ['res.cloudinary.com'],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
}

module.exports = nextConfig
