/** @type {import('next').NextConfig} */

const nextSafe = require("next-safe");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src localhost;
  style-src 'self' localhost;
  font-src 'self';  
`;

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    TENUP_URL: "https://js1.10up.com/wp-json",
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: nextSafe(ContentSecurityPolicy),
  //     },
  //   ];
  // },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

module.exports = nextConfig;
