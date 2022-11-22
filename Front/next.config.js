/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  //github pages에 url때문에 임시로 적용 나중에 지워야함
  basePath: "/kkiri",
};

module.exports = nextConfig;
