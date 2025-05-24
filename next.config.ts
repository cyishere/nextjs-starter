import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // With this setting, Vercel's serverless environment can find this folder
  outputFileTracingIncludes: {
    '/*': ['./content/**/*']
  }
};

export default nextConfig;
