/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t2.gstatic.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
