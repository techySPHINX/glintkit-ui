import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  images: {
    domains: ["ferf1mheo22r9ira.public.blob.vercel-storage.com"],
  },
};

export default withMDX(nextConfig);
