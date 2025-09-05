/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    images: {
        domains: ['images.unsplash.com'],
        formats: ['image/webp', 'image/avif'],
    },
    experimental: {
        mdxRs: false,
    },
    trailingSlash: false,
    poweredByHeader: false,
    compress: true,
    generateEtags: true,
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
      // Vercel optimizations
  output: 'standalone',
}

module.exports = withMDX(nextConfig)
