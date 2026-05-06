/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/charm-cards', destination: '/cards', permanent: true },
      { source: '/charm-cards/:path*', destination: '/cards', permanent: true },
      { source: '/wallet', destination: '/', permanent: true },
      { source: '/pricing', destination: '/quote', permanent: true },
    ]
  },
}
export default nextConfig
