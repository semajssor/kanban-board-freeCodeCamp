/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
    swcLoader: {
      jsc: {
        transform: {
          react: {
            runtime: 'automatic',
          },
        },
        externalHelpers: true,
        plugin: [
          // Include your Babel plugins here
        ],
      },
    },
  },};

export default nextConfig;
