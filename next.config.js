/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['gsap']);
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  
}


module.exports = withTM({
  webpack(config) {
    return config;
  },
});

module.exports = withPlugins([
  [
    optimizedImages,
    {
      // all other plugins will go here
    },
  ],
])



module.exports = nextConfig
