/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    trailingSlash: true, // Ensures proper routing for GitHub Pages
    images: {
      unoptimized: true, // Disables image optimization for static export
    },
  };
  
  module.exports = nextConfig;