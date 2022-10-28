/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/login": { page: "/login" },
    };
  },
};

module.exports = nextConfig;
