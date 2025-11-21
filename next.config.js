/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For username.github.io repositories, basePath should be empty
  // If using a different repo name, set basePath to '/repo-name'
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

