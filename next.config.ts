import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    // Shared hosting (CloudLinux LVE) enforces a low per-account process limit;
    // constrain the build to one worker running as an in-process thread rather
    // than spawning separate OS processes, to avoid EAGAIN during `next build`.
    cpus: 1,
    workerThreads: true,
  },
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

const withMDX = createMDX({});

export default withMDX(nextConfig);
