import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Old WordPress URL redirects → new Next.js equivalents
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/our-services', destination: '/services', permanent: true },
      { source: '/our-services/', destination: '/services', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/', destination: '/about', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/products-and-services', destination: '/products', permanent: true },
    ];
  },
};

export default nextConfig;
