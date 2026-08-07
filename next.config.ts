import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    // Shared hosting (CloudLinux LVE) enforces a low per-account process limit;
    // capping to a single build worker avoids EAGAIN during `next build`.
    // (workerThreads: true was also tried but breaks prerendering of Next's
    // built-in error page under React 19 — child_process workers, capped to 1,
    // is the stable option here.)
    cpus: 1,
    // Bypasses the root-layout-wrapped internal /_not-found route, which
    // crashes on this hosting environment (see app/global-not-found.tsx).
    globalNotFound: true,
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
