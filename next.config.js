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
    },
    experimental: {
        mdxRs: false,
    },
    trailingSlash: false,
}

module.exports = withMDX(nextConfig)
