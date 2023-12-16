/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  output: "standalone",
  // webpack: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //   };
  //   return config;
  // },
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
  },
};

module.exports = nextConfig;
