/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "13.212.76.243",
        port: "",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
        pathname: "/**",
      },
    ],

    domains: [
      "images.pexels.com",
      "unsplash.com",
      "api-janie.quinntougard.xyz",
    ],
  },
};

module.exports = nextConfig;
