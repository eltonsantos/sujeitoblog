/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  images: {
    domains: ["images.prismic.io"]
  }
}

module.exports = nextConfig
